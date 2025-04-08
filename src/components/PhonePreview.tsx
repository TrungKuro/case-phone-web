"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { CaseColor } from "@prisma/client";
import { COLORS } from "@/validators/option-validator";

import { AspectRatio } from "./ui/aspect-ratio";

import Image from "next/image";
import clearPhone from "../../public/clearphone.png";

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimensions({ width, height });
  };

  useEffect(() => {
    handleResize(); // Lấy kích thước lần đầu
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ✅ chỉ chạy 1 lần khi component mount

  const caseColor = COLORS.find((c) => c.value === color)?.tw || COLORS[0].tw;
  const caseBackgroundColor = `bg-${caseColor}`;

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <Image
          alt="Case Phone Preview"
          src={croppedImageUrl}
          width={renderedDimensions.width / (3000 / 637)}
          height={renderedDimensions.height / (2001 / 430)}
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColor
          )}
        />
      </div>

      <div className="h-full w-full relative z-40">
        <Image
          alt="Clear Phone"
          src={clearPhone}
          className="h-full w-full rounded-md pointer-events-none antialiased"
        />
      </div>
    </AspectRatio>
  );
};

export default PhonePreview;
