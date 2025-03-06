import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

import Image, { StaticImageData } from "next/image";
import phoneDarkEdges from "../../public/phone-template-dark-edges.png";
import phoneLightEdges from "../../public/phone-template-white-edges.png";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string | StaticImageData;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative z-50 pointer-events-none overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={dark ? phoneDarkEdges : phoneLightEdges}
        alt="phone-edges"
        className="z-50 pointer-events-none select-none"
      />
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
