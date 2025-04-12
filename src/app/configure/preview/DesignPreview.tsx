"use client";

import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { BASE_PRICE } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from "@/validators/option-validator";
import { Configuration } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { createCheckoutSession } from "./action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const router = useRouter();

  // Lấy ID của sản phẩm và người dùng
  const { id } = configuration;
  const { user } = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // Hiển thị "pháo hoa" 😅
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => {
    setShowConfetti(true);
  }, []);

  // Trích xuất các thông tin về sản phẩm của khách hàng trong Database
  const { color, model, material, finish } = configuration;
  //
  const colorCase = COLORS.find((whatColor) => whatColor.value === color)?.tw;
  //
  const modelPhone = MODELS.options.find(
    (whatModel) => whatModel.value === model
  )?.label;
  //
  const materialCase = MATERIALS.options.find(
    (whatMaterial) => whatMaterial.value === material
  );
  //
  const finishCase = FINISHES.options.find(
    (whatFinish) => whatFinish.value === finish
  );

  // Tính tổng tiền sản phẩm
  const totalPrice = BASE_PRICE + materialCase!.price + finishCase!.price;

  // Xử lý tiến trình thanh toán
  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else throw new Error("Unable to retrieve payment URL.");
    },
    onError: () => {
      toast.error(
        <p className="text-red-400 font-bold">Something went wrong</p>,
        {
          description: "There was an error on our end. Please try again.",
        }
      );
    },
  });

  // Kiểm tra người dùng có đăng nhập hay không
  const handleCheckout = () => {
    if (user) {
      // Create Payment Session
      createPaymentSession({
        configId: configuration.id,
        price: totalPrice,
      });
    } else {
      // Need to login
      localStorage.setItem(LOCAL_STORAGE_KEYS.CONFIGURATION_ID, id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      {/* Chạy hiệu ứng pháo hoa */}
      <div className="absolute inset-0 pointer-events-none select-none flex justify-center overflow-hidden">
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 200,
            spread: 90,
          }}
        />
      </div>

      {/* Hiện Dialog bắt buộc đăng nhập khi mua hàng */}
      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="flex flex-col items-center mt-20 text-sm md:grid sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        {/* Ảnh Preview sản phẩm */}
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <Phone
            className={cn(`bg-${colorCase}`, "max-w-[150px] md:max-w-full")}
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>

        {/* Thông tin tổng quan sản phẩm */}
        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelPhone} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-green-500" />
            In stock and ready to ship
          </div>
        </div>

        {/* Thông tin chi tiết sản phẩm */}
        <div className="sm:col-span-12 md:col-span-9 text-base">
          <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-zinc-950">Highlights</p>
              <ol className="mt-3 list-disc list-inside text-zinc-700">
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 year print warranty</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-zinc-950">Materials</p>
              <ol className="mt-3 list-disc list-inside text-zinc-700">
                <li>High-quality, durable material</li>
                <li>Scratch and fingerprint resistant coating</li>
              </ol>
            </div>
          </div>

          {/*
           * 1️⃣ flow-root - Kích hoạt Block Formatting Context (BFC)
           *
           * flow-root → Kích hoạt Block Formatting Context (BFC), giúp phần tử:
           *   _ Tự động bao bọc các phần tử con nổi (float) mà không cần thêm clearfix.
           *   _ Ngăn chặn margin collapse (sụp đổ margin) giữa phần tử cha và con.
           *
           * 📌 Ý nghĩa:
           *   ✔ Giúp phần tử tránh bị sụp đổ layout khi có nội dung con có float.
           *   ✔ Hữu ích khi dùng trong danh sách, thẻ chứa ảnh, hoặc các layout phức tạp.
           */}
          <div className="mt-8">
            <div className="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
              <div className="flow-root text-sm">
                <div className="mt-2 flex items-center justify-between py-1">
                  <p className="text-gray-600">Base price</p>
                  <p className="font-medium text-gray-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {materialCase ? (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-gray-600">{materialCase.label}</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(materialCase.price / 100)}
                    </p>
                  </div>
                ) : null}

                {finishCase ? (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-gray-600">{finishCase.label}</p>
                    <p className="font-medium text-gray-900">
                      {formatPrice(finishCase.price / 100)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-gray-900">Order total</p>
                  <p className="font-semibold text-gray-900">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                onClick={() => handleCheckout()}
                className="px-4 sm:px-6 lg:px-8 cursor-pointer"
              >
                Check out <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;
