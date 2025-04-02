"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  // Kiểm tra xem tài khoản được xác thực bởi Kinde hay chưa
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Báo lỗi nếu tài khoản chưa được xác thực bởi Kinde
  if (!user?.id || !user?.email) {
    throw new Error("Invalid user data");
  }

  // Kiểm tra xem tài khoản được lưu trong Database hay chưa
  const existingUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  // Nếu tài khoản chưa được lưu trong Database, thêm vào
  if (!existingUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.email,
      },
    });
  }

  return {
    success: true,
  };
};
