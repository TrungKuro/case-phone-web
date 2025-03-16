export const ROUTES = {
  HOME: "/",

  CONFIGURE_UPLOAD: "/configure/upload",
  CONFIGURE_DESIGN: "/configure/design?id=", // `/configure/design?id=${configId}`
  CONFIGURE_PREVIEW: "/configure/preview?id=", // `/configure/preview?id=${configId}`

  // Inside Page Configure
  STEP_UPLOAD: "/upload",
  STEP_DESIGN: "/design",
  STEP_PREVIEW: "/preview",

  AUTH_LOGOUT: "/api/auth/logout",
  AUTH_LOGIN: "/api/auth/login",
  AUTH_REGISTER: "/api/auth/register",

  NONE: "#",

  // SETTINGS: "/settings",
  // PROFILE: "/profile",
  // DASHBOARD: "/dashboard",
} as const;
