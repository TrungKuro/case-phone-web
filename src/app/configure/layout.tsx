import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

/*
 * flex     <-> Sử dụng Flexbox để bố cục phần tử con
 * flex-1   <-> Phần tử này sẽ mở rộng để lấp đầy không gian có sẵn trong flex container
 * flex-col <-> Sắp xếp các phần tử con theo chiều dọc (column)
 */

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
