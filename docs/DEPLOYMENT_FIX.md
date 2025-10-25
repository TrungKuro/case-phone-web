# 🔧 Sửa Lỗi Authentication trên Production

## 📋 Tổng Quan Vấn Đề

**Triệu chứng:** Khi đã login nhưng bấm nút "Check out" vẫn hiện LoginModal.

**Nguyên nhân:** `useKindeBrowserClient()` không hoạt động đúng trên production do Next.js 15 App Router không hỗ trợ Kinde Client Hook trong Server Component tree.

## ✅ Giải Pháp Đã Áp Dụng

### 1. Loại Bỏ `KindeProvider` từ Client Component

**File:** `src/components/Providers.tsx`

- ❌ **Trước:** Sử dụng `<KindeProvider>` wrap toàn bộ app
- ✅ **Sau:** Chỉ giữ lại `QueryClientProvider`

**Lý do:** `KindeProvider` không cần thiết trong Next.js App Router vì authentication được xử lý qua Server Session.

### 2. Chuyển Authentication Logic sang Server-Side

**File:** `src/app/configure/preview/page.tsx`

```typescript
// ✅ Lấy user từ server-side session
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async ({ searchParams }: PageProps) => {
  // ... existing code ...

  // Lấy thông tin user từ server-side session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <DesignPreview configuration={configuration} user={user} />;
};
```

### 3. Cập Nhật DesignPreview Component

**File:** `src/app/configure/preview/DesignPreview.tsx`

- ❌ **Trước:** Sử dụng `const { user } = useKindeBrowserClient();`
- ✅ **Sau:** Nhận `user` từ props

```typescript
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface DesignPreviewProps {
  configuration: Configuration;
  user: KindeUser<Record<string, unknown>> | null;
}

const DesignPreview = ({ configuration, user }: DesignPreviewProps) => {
  // user bây giờ là prop, không phải từ hook
  // ... rest of code ...
};
```

## 🚀 Các Bước Deploy lên Vercel

### Bước 1: Kiểm Tra Biến Môi Trường

Đảm bảo bạn có **ĐẦY ĐỦ** các biến môi trường sau trên Vercel:

#### ✅ Các biến bạn ĐÃ CÓ:

```bash
KINDE_SITE_URL=https://case-phone-web.vercel.app
KINDE_POST_LOGOUT_REDIRECT_URL=https://case-phone-web.vercel.app
KINDE_POST_LOGIN_REDIRECT_URL=https://case-phone-web.vercel.app/auth-callback
KINDE_ISSUER_URL=https://casephone06dev03.kinde.com
NEXT_PUBLIC_SERVER_URL=https://case-phone-web.vercel.app
UPLOADTHING_URL=https://case-phone-web.vercel.app
ADMIN_EMAIL=
```

#### ⚠️ Các biến bạn CẦN KIỂM TRA/THÊM:

```bash
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
DATABASE_URL=<your_database_url>
UPLOADTHING_SECRET=<your_uploadthing_secret>
UPLOADTHING_APP_ID=<your_uploadthing_app_id>
STRIPE_SECRET_KEY=<your_stripe_secret>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_public_key>
RESEND_API_KEY=<your_resend_api_key>
```

### Bước 2: Cách Lấy KINDE_CLIENT_ID và KINDE_CLIENT_SECRET

1. Đăng nhập vào [Kinde Dashboard](https://app.kinde.com)
2. Chọn application của bạn (`casephone06dev03`)
3. Vào **Settings** → **Details** → **Keys**
4. Copy:
   - **Client ID** → `KINDE_CLIENT_ID`
   - **Client secret** → `KINDE_CLIENT_SECRET`

### Bước 3: Deploy lên Vercel

```bash
# Commit changes
git add .
git commit -m "fix: sửa lỗi authentication với server-side session"

# Push to repository
git push origin main
```

Vercel sẽ tự động deploy khi có thay đổi trên branch `main`.

### Bước 4: Kiểm Tra sau khi Deploy

1. ✅ Truy cập: `https://case-phone-web.vercel.app`
2. ✅ Upload một hình ảnh
3. ✅ Customize design
4. ✅ Đăng nhập qua Kinde
5. ✅ Vào trang Preview
6. ✅ Bấm nút "Check out"
7. ✅ **KHÔNG còn hiện LoginModal nếu đã login**

## 🔍 Cách Kiểm Tra Lỗi

### Nếu vẫn còn lỗi, check các điểm sau:

1. **Check Server Logs trên Vercel:**
   - Vào Vercel Dashboard → Project → Logs
   - Tìm lỗi liên quan đến authentication

2. **Check Browser Console:**

   ```javascript
   // Mở DevTools (F12) và chạy:
   console.log("User:", user);
   ```

3. **Check Kinde Dashboard:**
   - Vào **Settings** → **Applications** → **Allowed callback URLs**
   - Đảm bảo có: `https://case-phone-web.vercel.app/api/auth/kinde_callback`
   - Đảm bảo có: `https://case-phone-web.vercel.app/auth-callback`

4. **Check Cookies:**
   - Mở DevTools → Application → Cookies
   - Kiểm tra có cookie `kinde_token` hay không

## 📝 Tóm Tắt Thay Đổi

| File                                          | Thay Đổi                                                 |
| --------------------------------------------- | -------------------------------------------------------- |
| `src/components/Providers.tsx`                | Loại bỏ `KindeProvider`                                  |
| `src/app/configure/preview/page.tsx`          | Thêm `getKindeServerSession()` để lấy user               |
| `src/app/configure/preview/DesignPreview.tsx` | Thay `useKindeBrowserClient()` bằng nhận `user` từ props |

## 🎯 Kết Quả Mong Đợi

✅ User đã login → Bấm "Check out" → Chuyển đến trang thanh toán Stripe
❌ User chưa login → Bấm "Check out" → Hiện LoginModal

## 💡 Lưu Ý

- **Next.js 15 App Router** khuyến nghị sử dụng Server-Side Session cho authentication
- **Không nên** sử dụng `useKindeBrowserClient()` trong Server Component tree
- **Nên** truyền user data từ Server Component (page.tsx) xuống Client Component (DesignPreview.tsx) qua props

---

**Ngày tạo:** 2025-10-25  
**Người thực hiện:** AI Assistant  
**Status:** ✅ Ready for Production
