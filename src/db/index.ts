/* eslint-disable no-var */ // Tắt cảnh báo eslint cho cả file

import { PrismaClient } from "@prisma/client"; // Import PrismaClient từ thư viện Prisma

// Khai báo biến toàn cục `cachedPrisma` để lưu Prisma Client trong môi trường phát triển (development)
declare global {
  var cachedPrisma: PrismaClient;
}

/*
 * 📌 Giải thích chi tiết
 * Tại sao cần sử dụng biến toàn cục (global.cachedPrisma)?
 *
 * Khi dùng Next.js trong môi trường development, nếu bạn không cache Prisma Client, mỗi lần code thay đổi, một instance mới của PrismaClient sẽ được tạo ra. Điều này có thể gây lỗi "Too many connections" khi kết nối với database.
 * Vì vậy, lưu Prisma Client vào biến toàn cục (global.cachedPrisma) giúp tái sử dụng client thay vì tạo mới liên tục.
 * Tại sao không cần cache trong production?
 *
 * Trong production, ứng dụng chỉ khởi chạy một lần (không có hot-reload như development).
 * Vì vậy, không cần cache Prisma Client → tạo PrismaClient mới mỗi khi server khởi động.
 */

// Khởi tạo biến `prisma`
let prisma: PrismaClient;

// Kiểm tra môi trường hiện tại
if (process.env.NODE_ENV === "production") {
  // Nếu đang chạy trong môi trường production, tạo một PrismaClient mới
  prisma = new PrismaClient();
} else {
  // Nếu đang ở môi trường development:
  // Kiểm tra xem `cachedPrisma` đã được khởi tạo hay chưa
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient(); // Nếu chưa có, tạo mới PrismaClient và lưu vào biến toàn cục
  }

  prisma = global.cachedPrisma; // Sử dụng lại PrismaClient đã được cache
}

// Xuất Prisma Client dưới tên `db` để sử dụng trong toàn bộ dự án
export const db = prisma;
