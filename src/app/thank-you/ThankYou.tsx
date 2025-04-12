"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./action";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import PhonePreview from "@/components/PhonePreview";
import { formatPrice } from "@/lib/utils";

const ThankYou = () => {
  // Lấy thông tin "id" của đơn hàng từ URL
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id") || "";

  // Lấy trạng thái thanh toán của đơn hàng
  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  // Hiển thị trạng thái "Loading"
  if (data === undefined) {
    return (
      <div className="flex w-full mt-24 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
          <h3 className="text-xl font-semibold">Loading your order...</h3>
          <p>This won{"'"}t take long.</p>
        </div>
      </div>
    );
  }

  // Hiển thị trạng thái "Not (yet) Paid"
  if (data === false) {
    return (
      <div className="flex w-full mt-24 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
          <h3 className="text-xl font-semibold">Verifying your payment...</h3>
          <p>This might take a moment.</p>
        </div>
      </div>
    );
  }

  // Lấy thông tin cần thiết từ đơn hàng
  const { configuration, billingAddress, shippingAddress, amount } = data;

  // Hiển thị trạng thái "Paid"
  return (
    <div className="bg-white">
      <div className="max-w-3xl px-4 py-16 mx-auto lg:px-8 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <p className="text-base text-primary font-medium">Thank you!</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your case is on the way!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            We{"'"}ve received your order and are now processing it.
          </p>

          {/* Mã đơn hàng */}
          <div className="mt-12 text-sm font-medium">
            <p className="text-zinc-900">Order number</p>
            <p className="mt-2 text-zinc-500">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200">
          <div className="flex flex-auto flex-col mt-10">
            <h4 className="text-zinc-900 font-semibold">
              You made a great choice!
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              We at CaseCobra believe that a phone case doesn{"'"}t only need to
              look good, but also last you for the years to come. We offer a
              5-year print guarantee: If you case isn{"'"}t of the highest
              quality, we{"'"}ll replace it for free.
            </p>
          </div>
        </div>

        {/* Hiển thị hình ảnh xem trước sản phẩm */}
        <div className="rounded-xl ring-1 ring-gray-900/10 ring-inset bg-gray-900/5 lg:rounded-2xl overflow-hidden mt-4 flex space-x-6">
          <PhonePreview
            croppedImageUrl={configuration.croppedImageUrl!}
            color={configuration.color!}
          />
        </div>

        {/* Hiển thị thông tin đơn hàng */}
        <div>
          <div className="grid grid-cols-2 py-10 gap-x-6 text-sm">
            {/* Địa chỉ giao hàng */}
            <div>
              <p className="text-gray-900 font-medium">Shipping address</p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block"> {shippingAddress?.name}</span>
                  <span className="block">{shippingAddress?.street}</span>
                  <span className="block">
                    {shippingAddress?.postalCode} {shippingAddress?.city}
                  </span>
                </address>
              </div>
            </div>
            {/* Địa chỉ thanh toán */}
            <div>
              <p className="text-gray-900 font-medium">Billing address</p>
              <div className="mt-2 text-zinc-700">
                <address className="not-italic">
                  <span className="block"> {billingAddress?.name}</span>
                  <span className="block">{billingAddress?.street}</span>
                  <span className="block">
                    {billingAddress?.postalCode} {billingAddress?.city}
                  </span>
                </address>
              </div>
            </div>
          </div>

          {/* Trạng thái thanh toán */}
          <div className="grid grid-cols-2 py-10 gap-x-6 border-t border-zinc-200 text-sm">
            <div>
              <p className="text-zinc-900 font-medium">Payment status</p>
              <p className="mt-2 text-zinc-700">Paid</p>
            </div>
            <div>
              <p className="text-zinc-900 font-medium">Shipping Method</p>
              <p className="mt-2 text-zinc-700">
                DHL, takes up to 3 working days
              </p>
            </div>
          </div>
        </div>

        {/* Thông tin hóa đơn thanh toán */}
        <div className="pt-10 border-t border-zinc-200 text-sm space-y-6">
          <div className="flex justify-between">
            <p className="text-zinc-900 font-medium">Subtotal</p>
            <p className="text-zinc-700">{formatPrice(amount)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-900 font-medium">Shipping</p>
            <p className="text-zinc-700">{formatPrice(0)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-zinc-900 font-medium">Total</p>
            <p className="text-zinc-700">{formatPrice(amount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
