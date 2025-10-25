// Chỉ định rằng file này sẽ chạy trên client-side trong Next.js
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

// Tạo một instance của QueryClient để quản lý cache và trạng thái của các query
const client = new QueryClient();

// Component `Providers` dùng để bọc toàn bộ ứng dụng với QueryClientProvider
// Nhận prop `children`, tức là các component con sẽ được bao bọc bởi provider này
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <KindeProvider>
      {/* Cung cấp `client` cho toàn bộ ứng dụng, giúp quản lý và caching API requests */}
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </KindeProvider>
  );
};

// Xuất component `Providers` để sử dụng trong `_app.tsx` hoặc layout chính của Next.js
export default Providers;
