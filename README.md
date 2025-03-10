# About Project

## Sử dụng Package Manager `pnpm`

- Lệnh khởi tạo dự án với [Next.js](https://nextjs.org/docs/app/api-reference/cli/create-next-app) - `pnpm dlx create-next-app@latest`

- Lệnh chạy dự án - `pnpm run dev`

## Các Package sử dụng

### 1. [shadcn/ui](https://ui.shadcn.com/)

- Lệnh cài đặt gói - `pnpm dlx shadcn@latest init`

- Lệnh cài đặt các `Component`:

  - Lệnh cài đặt thêm gói [Component Button](https://ui.shadcn.com/docs/components/button) - `pnpm dlx shadcn@latest add button`
  - Lệnh cài đặt thêm gói [Component Progress](https://ui.shadcn.com/docs/components/progress) - `pnpm dlx shadcn@latest add progress`
  - Lệnh cài đặt thêm gói [Component Sonner](https://ui.shadcn.com/docs/components/sonner) - `pnpm dlx shadcn@latest add sonner`

- Chú ý ... _"The `toast` component is deprecated. Use the `sonner` component instead"_.

- Cách thêm [Theme](https://ui.shadcn.com/themes) - copy và paste đoạn code vào file `globals.css` vị trí `@layer base`

- Chú ý, riêng với `Tailwind V4` (bản mới nhất), đây là cách thêm [Theme](https://ui.shadcn.com/docs/tailwind-v4) vào dự án
  - Move `:root` and `.dark` out of the `@layer base`
  - Wrap the color values in `hsl()`

### 2. [Lucide](https://lucide.dev/)

- Lệnh cài đặt gói - `pnpm install lucide-react`

### 3. [Framer Motion](https://www.npmjs.com/package/framer-motion)

- Lệnh cài đặt gói - `pnpm install framer-motion`

### 4. [React Dropzone](https://www.npmjs.com/package/react-dropzone)

- Lệnh cài đặt gói - `pnpm install react-dropzone`

### 5. [Zod](https://www.npmjs.com/package/zod)

- Lệnh cài đặt gói - `pnpm install zod`

### 6. [Prisma](https://www.prisma.io/)

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

  - Đây là file quan trọng nhất, chứa cấu trúc Database của bạn.
  - Xem [Docs](https://www.prisma.io/docs/orm/prisma-schema/overview) cho Prisma Schema.
  - Cài [Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) cho Prisma Schema trên VSCode.

- File `.env`:

  - Đây là file chứa biến môi trường (được tạo nếu chưa có), để lưu giá trị `DATABASE_URL` của bạn → _"Set the DATABASE_URL in the .env file to point to your existing database."_

- <u>Step 3</u>:

  - Tạo file `src/db/index.ts`.
  - Đây là file chứa biến toàn cục `cachedPrisma` để lưu Prisma Client trong môi trường phát triển (development).

## Các Service sử dụng

### 1. [Kinde](https://kinde.com/)

- Các bước chuẩn bị:

  - Step 1: Thiết đặt Business (vd: `case-phone-dev`)
  - Step 2: Thiết đặt Applications (chọn `My NextJS App | Back-end web`)

- Lệnh cài đặt gói - `pnpm install @kinde-oss/kinde-auth-nextjs`

- Cập nhập `Environment Vars` - tạo file `.env` đặt vào vị trí _"root"_ của dự án

- Tạo `API Endpoints` - tạo file theo đường dẫn `src/app/api/auth/[kindeAuth]/route.js`

- Sử dụng theo hướng dẫn của [Kinde Docs](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/)

### 2. [Uploadthing](https://uploadthing.com/)

- Các bước chuẩn bị:

  - Step 1: Thiết đặt App (vd: `case-phone-web`)

- Lệnh cài đặt gói - `pnpm install uploadthing @uploadthing/react`

- Cập nhập `Environment Vars` - thêm `API Keys` (chọn `SDK v7+`) vào file `.env`

- Tạo một `FileRouter` - tạo file theo đường dẫn `app/api/uploadthing/core.ts`

- Tạo `API Route` để dùng `FileRouter` - tạo file theo đường dẫn `app/api/uploadthing/route.ts`

- Sử dụng theo hướng dẫn của [Uploadthing Docs](https://docs.uploadthing.com/getting-started/appdir) dành cho `Next.js App Router`

### 3. [Neon](https://neon.tech/)

- Các bước chuẩn bị:

  - Step 1: Thiết đặt Project (vd: `case-phone`)

- Cập nhập `Environment Vars` - lấy chuỗi `Connect to your Database` và thêm vào file `.env`

- Sử dụng theo hướng dẫn của [Neon Docs](https://neon.tech/docs/guides/nextjs) dành cho `Framework Next.js`
