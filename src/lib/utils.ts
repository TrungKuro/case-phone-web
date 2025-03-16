// Import thư viện `clsx` để xử lý điều kiện className
import { clsx, type ClassValue } from "clsx";

// Import `twMerge` từ `tailwind-merge` để hợp nhất class của Tailwind mà không bị xung đột
import { twMerge } from "tailwind-merge";

/**
 * Hàm `cn` giúp hợp nhất nhiều className lại với nhau
 *
 * - `clsx(inputs)`: Xử lý danh sách các className có điều kiện (null, undefined, boolean...)
 * - `twMerge(...)`: Loại bỏ xung đột class của Tailwind (ví dụ: `px-2 px-4` -> chỉ giữ lại `px-4`)
 *
 * @param inputs - Danh sách className truyền vào
 * @returns Một chuỗi className đã được tối ưu
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Định dạng số tiền thành chuỗi hiển thị theo kiểu tiền tệ USD.
 *
 * @param price - Giá trị số cần định dạng
 * @returns Chuỗi định dạng tiền tệ (ví dụ: "$1,234.56")
 */
export const formatPrice = (price: number) => {
  // ✅ Tạo đối tượng formatter sử dụng Intl.NumberFormat để định dạng số theo kiểu tiền tệ USD
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency", // ✅ Hiển thị theo kiểu tiền tệ
    currency: "USD", // ✅ Đặt đơn vị tiền tệ là USD
  });

  // ✅ Trả về giá trị số đã được định dạng thành chuỗi tiền tệ
  return formatter.format(price);
};
