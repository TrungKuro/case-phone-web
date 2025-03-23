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

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  // Hiển thị "pháo hoa" 😅
  const [showConfetti, setShowConfetti] = useState(false);
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

  // ???
  const {} = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: 
  });

  return (
    <>
      <div className="absolute inset-0 pointer-events-none select-none flex justify-center overflow-hidden">
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 200,
            spread: 90,
          }}
        />
      </div>
      <div className="mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        {/* ??? */}
        <div className="sm:col-span-4 md:col-span-3 md:row-end-2 md:row-span-2">
          <Phone
            className={cn(`bg-${colorCase}`)}
            imgSrc={configuration.croppedImageUrl!}
          />
        </div>

        {/* ??? */}
        <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            Your {modelPhone} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-green-500" />
            In stock and ready to ship
          </div>
        </div>

        {/* ??? */}
        <div className="sm:col-span-12 md:col-span-9 text-base">
          {/* ??? */}
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

            {/* ??? */}
            <div className="mt-8 flex justify-end pb-12">
              <Button className="px-4 sm:px-6 lg:px-8 cursor-pointer">
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
