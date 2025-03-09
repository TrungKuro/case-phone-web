/*
 * Trong Next.js 13+, khi sử dụng App Router (app/), tất cả các component mặc định là Server Component.
 * Nếu bạn muốn một component chạy trên client-side, bạn phải khai báo "use client"; ở đầu file.
 *
 * Server Component   ✅ (Mặc định)                       Xử lý dữ liệu, tải API trên server, tối ưu SEO, không cần trạng thái (state).
 * Client Component   ❌ (Phải khai báo "use client";)    Khi dùng state (useState), hooks (useEffect), event handlers (onClick), hoặc context (useContext).
 */
"use client";

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Phone from "./Phone";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

import Image, { StaticImageData } from "next/image";
import whatPeopleBuy from "../../public/what-people-are-buying.png";
import testimonial1 from "../../public/testimonials/1.jpg";
import testimonial2 from "../../public/testimonials/2.jpg";
import testimonial3 from "../../public/testimonials/3.jpg";
import testimonial4 from "../../public/testimonials/4.jpg";
import testimonial5 from "../../public/testimonials/5.jpg";
import testimonial6 from "../../public/testimonials/6.jpg";

/* -------------------------------- VARIABLE ------------------------------- */

const PHONES = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
];

/* -------------------------------- FUNCTION ------------------------------- */

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) result[index] = [];
    result[index].push(array[i]);
  }

  return result;
}

/* --------------------------- SUPPORT COMPONENT --------------------------- */

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string | StaticImageData;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in opacity-0 rounded-[2.25rem] bg-white p-6 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[] | StaticImageData[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee py-4 gap-x-8", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const columns = splitArray(PHONES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[49rem] max-h-[150vh] items-start gap-8 overflow-hidden px-4"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-slate-100" />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-slate-100" />
    </div>
  );
}

/* ----------------------------- MAIN COMPONENT ---------------------------- */

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        aria-hidden="true"
        src={whatPeopleBuy}
        alt="what-people-are-buying"
        className="absolute -left-32 top-1/3 hidden xl:block select-none"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
