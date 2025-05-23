import "./globals.css";

import { /*Geist, Geist_Mono*/ Recursive } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import NavBar from "@/components/NavBar";

import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

/* ------------------ Font mặc định khi tạo dự án Next.js ------------------ */

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

/* ------------------------------ Font tự chọn ----------------------------- */

const recursive = Recursive({ subsets: ["latin"] });

/* ------------------------ Background Image tự chọn ----------------------- */

/*
 * Lưu ý: có sử dụng HÌNH NỀN TÙY CHỈNH tên "grainy-light"
 */

/* ------------------------------------------------------------------------- */

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={recursive.className} // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ------------------------------ PAGE ----------------------------- */}
        <NavBar />
        <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex flex-1 flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
        {/* ----------------------------------------------------------------- */}
      </body>
    </html>
  );
}
