# About Project

## Sử dụng Package Manager `pnpm`

- Lệnh khởi tạo dự án với [Next.js](https://nextjs.org/docs/app/api-reference/cli/create-next-app) - `pnpm dlx create-next-app@latest`

- Lệnh chạy dự án - `pnpm run dev`

## Các Package sử dụng

### 1. [shadcn/ui](https://ui.shadcn.com/)

- Lệnh cài đặt gói - `pnpm dlx shadcn@latest init`

- Lệnh cài đặt thêm gói [Component Button](https://ui.shadcn.com/docs/components/button) - `pnpm dlx shadcn@latest add button`

- Cách thêm [Theme](https://ui.shadcn.com/themes) - copy và paste đoạn code vào file `globals.css` vị trí `@layer base`

- Chú ý, riêng với `Tailwind V4` (bản mới nhất), đây là cách thêm [Theme](https://ui.shadcn.com/docs/tailwind-v4) vào dự án
  - Move `:root` and `.dark` out of the `@layer base`
  - Wrap the color values in `hsl()`

### 2. [Lucide](https://lucide.dev/)

- Lệnh cài đặt gói - `pnpm install lucide-react`

## Các Service sử dụng

### 1. [Kinde](https://kinde.com/)

- Các bước chuẩn bị:
  - Step 1: Thiết đặt Business
  - Step 2: Thiết đặt Applications (My NextJS App | Back-end web)

- Lệnh cài đặt gói - `pnpm install @kinde-oss/kinde-auth-nextjs`

- Cập nhập `Environment Vars` - tạo file `.env` đặt vào vị trí *"root"* của dự án

- Tạo `API Endpoints` - tạo file theo đường dẫn `src/app/api/auth/[kindeAuth]/route.js`

- Sử dụng theo hướng dẫn của [Kinde Docs](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/)

#####

Test tạo Branch bằng Git