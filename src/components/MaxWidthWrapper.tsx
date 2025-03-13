import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/*
 * Căn giữa nội dung và thiết lập kích thước tối đa
 * mx-auto          <-> Căn giữa theo trục ngang
 * h-full           <-> Chiều cao 100%
 * w-full           <-> Chiều rộng 100%
 * max-w-screen-xl  <-> Giới hạn chiều rộng tối đa ở kích thước XL (1280px)
 * px-2.5           <-> Padding ngang 2.5 đơn vị
 * md:px-20         <-> Ở màn hình md (≥768px), tăng padding ngang lên 20 đơn vị
 */

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
