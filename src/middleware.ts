import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware để bảo vệ các routes yêu cầu authentication
 *
 * Routes public (không yêu cầu đăng nhập):
 * - / (homepage)
 * - /configure/* (toàn bộ flow configuration)
 * - /auth-callback (callback sau khi login)
 * - /api/auth/* (Kinde auth routes)
 * - /api/uploadthing (upload file)
 * - /api/webhooks (Stripe webhooks)
 *
 * Routes protected (yêu cầu đăng nhập):
 * - /dashboard (admin dashboard)
 * - /thank-you (order confirmation)
 */
export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Danh sách các routes YÊU CẦU authentication
  const protectedPaths = ["/dashboard", "/thank-you"];

  // Kiểm tra nếu đường dẫn hiện tại YÊU CẦU authentication
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path),
  );

  // Nếu là protected path, yêu cầu authentication
  if (isProtectedPath) {
    return withAuth(req);
  }

  // Tất cả các routes khác đều public, cho phép truy cập
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes - handled separately)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.webp$).*)",
  ],
};
