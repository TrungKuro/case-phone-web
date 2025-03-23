# About Project

...

## Sử dụng Package Manager `pnpm`

- Lệnh khởi tạo dự án với [Next.js](https://nextjs.org/docs/app/api-reference/cli/create-next-app) - `pnpm dlx create-next-app@latest`.

- Lệnh chạy dự án - `pnpm run dev`.

## Các Package sử dụng

### 1. [shadcn/ui](https://ui.shadcn.com/)

- Lệnh cài đặt gói - `pnpm dlx shadcn@latest init`.

  - Đây là một thư viện Component UI cho `React` & `Next.js`, được xây dựng trên Radix UI và sử dụng `Tailwind CSS`.

- Tính năng chính:

  - 📌 Component UI đơn giản, dễ tùy chỉnh, không có style cứng nhắc.
  - 📌 Dùng Tailwind CSS & Radix UI, giúp dễ dàng mở rộng & tùy chỉnh.
  - 📌 Không phải một package npm cồng kềnh → Bạn cài component trực tiếp vào code.
  - 📌 Tối ưu hiệu suất, không tải dư thừa dependency.
  - 📌 Hoạt động tốt với Next.js & React Server Components (RSC).

- Lệnh cài đặt các `Component`:

  - Lệnh cài đặt thêm gói [Component Button](https://ui.shadcn.com/docs/components/button) - `pnpm dlx shadcn@latest add button`.
  - Lệnh cài đặt thêm gói [Component Progress](https://ui.shadcn.com/docs/components/progress) - `pnpm dlx shadcn@latest add progress`.
  - Lệnh cài đặt thêm gói [Component Sonner](https://ui.shadcn.com/docs/components/sonner) - `pnpm dlx shadcn@latest add sonner`.
  - Lệnh cài đặt thêm gói [Component Aspect Ratio](https://ui.shadcn.com/docs/components/aspect-ratio) - `pnpm dlx shadcn@latest add aspect-ratio`.
  - Lệnh cài đặt thêm gói [Component Scroll Area](https://ui.shadcn.com/docs/components/scroll-area) - `pnpm dlx shadcn@latest add scroll-area`.
  - Lệnh cài đặt thêm gói [Component Label](https://ui.shadcn.com/docs/components/label) - `pnpm dlx shadcn@latest add label`.
  - Lệnh cài đặt thêm gói [Component Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu) - `pnpm dlx shadcn@latest add dropdown-menu`.

- <u>Các lưu ý</u>:

  - [1] _"The `toast` component is deprecated. Use the `sonner` component instead"_.
  - [2] Cách thêm [Theme](https://ui.shadcn.com/themes) - copy và paste đoạn code vào file `globals.css` vị trí `@layer base`.
  - [3] Riêng với `Tailwind V4` (bản mới nhất), đây là cách thêm [Theme](https://ui.shadcn.com/docs/tailwind-v4) vào dự án.

    ```
    Move :root and .dark out of the @layer base
    Wrap the color values in hsl()
    ```

### 2. [Lucide](https://lucide.dev/)

- Lệnh cài đặt gói - `pnpm install lucide-react`.

  - Đây là một thư viện Icon Component dành cho `React`.
  - Cung cấp hơn 1000+ icon đẹp, nhẹ và tùy chỉnh dễ dàng.

- Tính năng chính:

  - 🚀 Icon SVG hiện đại & dễ dùng trong React.
  - 🚀 Có hơn 1000+ icon miễn phí, không cần tải file SVG.
  - 🚀 Tùy chỉnh kích thước (size), màu sắc (color), độ dày (strokeWidth) dễ dàng.
  - 🚀 Hiệu suất cao, không ảnh hưởng đến tốc độ load trang.
  - 🚀 Hỗ trợ TypeScript & dễ tích hợp với Tailwind CSS.

### 3. [Framer Motion](https://www.npmjs.com/package/framer-motion)

- Lệnh cài đặt gói - `pnpm install framer-motion`.

  - Đây là thư viện Animation dành cho `React`.
  - Giúp tạo hiệu ứng động mượt mà và dễ sử dụng.

- Một số khả năng:

  - ✅ Dễ dàng tạo animation chỉ với vài dòng code.
  - ✅ Hỗ trợ animation trên cả client & server.
  - ✅ Tạo hiệu ứng kéo thả (drag & drop).
  - ✅ Tích hợp dễ dàng với Next.js và Tailwind CSS.
  - ✅ Hỗ trợ layout animations, shared transitions, hover effects, v.v.

### 4. [React Dropzone](https://www.npmjs.com/package/react-dropzone)

- Lệnh cài đặt gói - `pnpm install react-dropzone`.

  - Đây là một thư viện `React`.
  - Giúp tạo khu vực kéo & thả (Drag and Drop) để tải lên tệp tin (File Upload) một cách dễ dàng.

- Chức năng chính:

  - 🔥 Hỗ trợ kéo & thả file.
  - 🔥 Cho phép chọn file từ máy nếu không kéo thả.
  - 🔥 Giới hạn loại file, kích thước, số lượng file.
  - 🔥 Hỗ trợ multi-file upload.
  - 🔥 Cung cấp các sự kiện callback để xử lý file khi tải lên.

### 5. [Zod](https://www.npmjs.com/package/zod)

- Lệnh cài đặt gói - `pnpm install zod`.

  - Đây là một thư viện `TypeScript-first`.
  - Giúp _"xác thực" (validation)_ và _"phân tích" (parse)_ dữ liệu một cách an toàn, mạnh mẽ.

- Một số khả năng:

  - ✅ Kiểm tra dữ liệu API request (Validation & Parsing).
  - ✅ Xác thực dữ liệu form trước khi gửi lên server.
  - ✅ Tạo schema an toàn cho dữ liệu trong TypeScript.
  - ✅ Tránh lỗi dữ liệu không hợp lệ khi lưu vào database.

### 6. [Sharp](https://www.npmjs.com/package/sharp)

- Lệnh cài đặt gói - `pnpm install sharp`.

  - Đây là thư viện xử lý hình ảnh (image processing) cực kỳ nhanh, được viết bằng `C++`.
  - Giúp bạn chỉnh sửa, nén, thay đổi kích thước ảnh hiệu quả mà không tốn nhiều tài nguyên.

- Chức năng chính:

  - 🔹 Thay đổi kích thước ảnh (resize).
  - 🔹 Chuyển đổi định dạng ảnh (JPEG, PNG, WebP, AVIF, GIF, v.v.).
  - 🔹 Tối ưu hóa ảnh (giảm dung lượng mà không giảm chất lượng).
  - 🔹 Cắt ảnh (crop) hoặc xoay ảnh (rotate).
  - 🔹 Thêm bộ lọc (blur, sharpen, grayscale, v.v.).
  - 🔹 Hỗ trợ xử lý hàng loạt ảnh nhanh chóng.

### 7. [React Rnd](https://www.npmjs.com/package/react-rnd)

- Lệnh cài đặt gói - `pnpm install react-rnd`.

  - Đây là một thư viện `React`.
  - Giúp tạo các Component có thể kéo thả (draggable) và thay đổi kích thước (resizable).

- Tính năng chính:

  - 🔹 Kéo thả và thay đổi kích thước: Cho phép người dùng kéo thả và thay đổi kích thước các thành phần trong giao diện.​
  - 🔹 Tùy chỉnh linh hoạt: Cung cấp các thuộc tính để thiết lập vị trí, kích thước ban đầu, giới hạn kích thước tối thiểu/tối đa, và các sự kiện callback khi kéo thả hoặc thay đổi kích thước.

### 8. [@headlessui/react](https://www.npmjs.com/package/@headlessui/react)

- Lệnh cài đặt gói - `pnpm install @headlessui/react`.

  - Đây là một thư viện giúp bạn xây dựng các component UI như modal, dropdown, accordion, dialog, menu mà không áp đặt style.
  - Nó cung cấp chức năng UI, nhưng bạn có thể tự thiết kế giao diện theo ý muốn.

- Tính năng chính:

  - 🔥 Cung cấp component UI nhưng không có style sẵn, dễ dàng tùy chỉnh với Tailwind CSS.
  - 🔥 Hỗ trợ accessibility (a11y) giúp UI thân thiện với keyboard & screen reader.
  - 🔥 Được tối ưu cho React, giúp dễ dàng xây dựng UI động mà không cần tự code logic.

### 9. [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)

- Lệnh cài đặt gói - `pnpm install @tanstack/react-query`.

  - Trước đây là `react-query`.
  - Là một thư viện quản lý dữ liệu và caching dành cho `React`.
  - Giúp tối ưu hóa việc fetch API, giảm số lần gọi API không cần thiết và cải thiện trải nghiệm người dùng.

- Tính năng chính:

  - ✅ Quản lý dữ liệu bất đồng bộ (async state management)
  - ✅ Tự động caching & re-fetch khi dữ liệu thay đổi
  - ✅ Hỗ trợ background sync (đồng bộ dữ liệu khi người dùng quay lại trang)
  - ✅ Tối ưu hóa hiệu suất (giảm số lần gọi API, chỉ fetch khi cần thiết)
  - ✅ Dễ dàng xử lý trạng thái (loading, error, success, refetching)
  - ✅ Hỗ trợ pagination, infinite scrolling, polling (fetch liên tục)

### 10. [react-dom-confetti](https://www.npmjs.com/package/react-dom-confetti)

- Lệnh cài đặt gói - `pnpm install react-dom-confetti`.

  - Là một thư viện hiệu ứng pháo giấy (confetti) dành cho `React`.
  - Giúp hiển thị hiệu ứng ăn mừng khi sự kiện xảy ra.

- Khi nào nên dùng:

  - ✅ Dùng khi muốn thêm hiệu ứng ăn mừng sau sự kiện (mua hàng, đăng ký thành công, đạt được mục tiêu...).
  - ✅ Dễ dùng, nhẹ, không ảnh hưởng đến hiệu suất trang web.

## Các Service sử dụng

### 1. [Kinde](https://kinde.com/)

- Đây là một nền tảng quản lý xác thực người dùng (Authentication) và quyền truy cập (Authorization).
- Giúp các ứng dụng xác thực người dùng, quản lý phiên đăng nhập và phân quyền một cách dễ dàng.

- <u>Docs</u>:

  - Sử dụng theo hướng dẫn của [Kinde Docs](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/).

- <u>Step 1</u>:

  - Thiết đặt Business (vd: `case-phone-dev`).

- <u>Step 2</u>:

  - Thiết đặt Applications (chọn `My NextJS App | Back-end web`).

- <u>Step 3</u>:

  - Nhập lệnh cài đặt gói - `pnpm install @kinde-oss/kinde-auth-nextjs`.

- <u>Step 4</u>:

  - Cập nhập `Environment Vars` - tạo file `.env` đặt vào vị trí _"root"_ của dự án.

- <u>Step 5</u>:

  - Tạo `API Endpoints` - tạo file theo đường dẫn `src/app/api/auth/[kindeAuth]/route.js`.

### 2. [Uploadthing](https://uploadthing.com/)

- Đây là dịch vụ quản lý tải lên file (file upload management) dành cho Next.js, React, và các framework khác.
- Nó giúp upload file nhanh, bảo mật, và dễ dàng tích hợp với các ứng dụng web.

- <u>Docs</u>:

  - Sử dụng theo hướng dẫn của [Uploadthing Docs](https://docs.uploadthing.com/getting-started/appdir) dành cho `Next.js App Router`.

- <u>Step 1</u>:

  - Thiết đặt App (vd: `case-phone-web`).

- <u>Step 2</u>:

  - Nhập lệnh cài đặt gói - `pnpm install uploadthing @uploadthing/react`.

- <u>Step 3</u>:

  - Cập nhập `Environment Vars` - thêm `API Keys` (chọn `SDK v7+`) vào file `.env`.

- <u>Step 4</u>:

  - Tạo một `FileRouter` - tạo file theo đường dẫn `app/api/uploadthing/core.ts`.

- <u>Step 5</u>:

  - Tạo `API Route` để dùng `FileRouter` - tạo file theo đường dẫn `app/api/uploadthing/route.ts`.

### 3. [Neon](https://neon.tech/)

- Đây là một dịch vụ PostgreSQL database trên cloud, tối ưu cho serverless applications và Next.js, Vercel, Firebase, Supabase.

- <u>Docs</u>:

  - Sử dụng theo hướng dẫn của [Neon Docs](https://neon.tech/docs/guides/nextjs) dành cho `Framework Next.js`.

- <u>Step 1</u>:

  - Thiết đặt Project (vd: `case-phone`).

- <u>Step 2</u>:

  - Cập nhập `Environment Vars` - lấy chuỗi `Connect to your Database` và thêm vào file `.env`.

### 4. [Prisma](https://www.prisma.io/)

- <u>Step 1</u>:

  - Nhập lệnh `pnpm install prisma @prisma/client`.
  - Để cài đặt `Prisma` và `Prisma Client` vào dự án.

- Chức năng `prisma`:

  - Tạo Schema Database `(prisma/schema.prisma)`.
  - Chạy Migration (thay đổi cấu trúc DB).
  - Tạo Prisma Client để truy vấn dữ liệu DB.

- Chức năng `@prisma/client`:

  - Là _"thư viện"_ Client giúp ứng dụng kết nối với Database và truy vấn dữ liệu bằng cách sử dụng `ORM` của Prisma.
  - Tự động được tạo sau khi chạy lệnh `prisma generate`.

- Chức năng `ORM`:

  - Viết tắt của `Object-Relational Mapping`.
  - Là một kỹ thuật giúp tương tác với Cơ sở dữ liệu (Database) thông qua đối tượng (Objects) thay vì sử dụng câu lệnh `SQL` thuần.
  - 👉 Hiểu đơn giản: ORM giúp bạn làm việc với database giống như làm việc với object trong lập trình.

- <u>Step 2</u>:

  - Nhập lệnh `npx prisma init`.
  - Để khởi tạo `Prisma` trong dự án.
  - `Prisma` sẽ tạo các _"file cấu hình"_ cần thiết để sử dụng `Prisma ORM`.

    ```
    .
    ├── prisma/
    │   ├── schema.prisma  # File cấu hình chính của Prisma (chứa model, database)
    ├── .env               # File chứa biến môi trường (DATABASE_URL)
    ```

- File `schema.prisma`:

  - Xem [Docs](https://www.prisma.io/docs/orm/prisma-schema/overview) cho Prisma Schema.
  - Cài [Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) cho Prisma Schema trên VSCode.
  - Đây là file quan trọng nhất, chứa cấu trúc Database của bạn.
    - → _"Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb."_

- File `.env`:

  - Đây là file chứa biến môi trường (được tạo nếu chưa có), để lưu giá trị `DATABASE_URL` của bạn.
    - → _"Set the DATABASE_URL in the .env file to point to your existing database."_

- <u>Step 3</u>:

  - Tạo file `src/db/index.ts`.
  - Đây là file chứa biến toàn cục `cachedPrisma` để lưu Prisma Client trong môi trường phát triển (development).

- <u>Step 4</u>:

  - Cấu hình Model cho Database trong file `prisma/schema.prisma`.
  - Nhập lệnh `npx prisma db push`.
    - Để đẩy (push) Schema từ `schema.prisma` lên Database mà không tạo Migration.
    - Kiểm tra Database của bạn, cụ thể là trong Tables của dự án từ dịch vụ Neon.

  ```
  .
  ├── Image               | Configuration
  │   │                   | id                (String)
  │   ├── width           | width             (Int)
  │   ├── height          | height            (Int)
  │   ├── url             | imageUrl          (String)
  │   ├── croppedImageUrl | croppedImageUrl   (String?)
  ```

- Để xem nội dung trong `Prisma Schema`, nhập lệnh `npx prisma studio`.

## Các Layout tùy chỉnh

### Recursive Font từ Google Fonts

🔹 Recursive có gì đặc biệt?

- ✅ Variable Font (biến đổi nhiều kiểu trong một file duy nhất).
- ✅ Hỗ trợ mono-space, sans-serif và casual styles.
- ✅ Nhẹ, tối ưu cho hiệu suất.
- ✅ Tương thích tốt với Next.js & Tailwind CSS.

## Các Error gặp phải

### 🐞 Invalid "src" Prop on Component Image of NextJs

- Vd, mình đã upload hình lên database và hình được lưu ở path (https://j7ieebcwkc.ufs.sh/f/z703yu52e70coPGk6vgp1FY7HsrlVIhy5fOUNJBxnX3KSAtc).

```
Unhandled Runtime Error

Error: Invalid src prop (https://j7ieebcwkc.ufs.sh/f/z703yu52e70coPGk6vgp1FY7HsrlVIhy5fOUNJBxnX3KSAtc) on `next/image`, hostname "j7ieebcwkc.ufs.sh" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
```

📌 Nguyên nhân lỗi

- Lỗi này xảy ra khi bạn dùng ảnh từ một domain bên ngoài (ở đây là `j7ieebcwkc.ufs.sh`) nhưng chưa khai báo domain này trong cấu hình của Next.js.
- Next.js mặc định chỉ cho phép dùng ảnh từ các nguồn đã được cấu hình trước.

🛠️ Cách khắc phục

- Bước 1: Mở file `next.config.js` (hoặc `next.config.mjs`).
- Bước 2: Thêm `hostname` `"j7ieebcwkc.ufs.sh"` vào mục `images.domains`.
  - Tuy nhiên Next.js đề xuất: _"@deprecated — Use remotePatterns instead."_ -> ko dùng `domains` thay vào đó dùng `remotePatterns`.

```javascript
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j7ieebcwkc.ufs.sh",
        pathname: "/**",
      },
    ],
  },
```
