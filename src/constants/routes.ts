export const ROUTES = {
  HOME: "/",

  AUTH_LOGOUT: "/api/auth/logout",
  AUTH_LOGIN: "/api/auth/login",
  AUTH_REGISTER: "/api/auth/register",

  CONFIGURE_UPLOAD: "/configure/upload",
  CONFIGURE_DESIGN: "/configure/design?id=", // + configuration.id
  CONFIGURE_PREVIEW: "/configure/preview?id=", // + configuration.id

  // Inside Page Configure
  STEP_UPLOAD: "/upload",
  STEP_DESIGN: "/design",
  STEP_PREVIEW: "/preview",

  THANK_YOU: "/thank-you?id=", // + order.id

  DASHBOARD: "/dashboard",

  NONE: "#",

  // SETTINGS: "/settings",
  // PROFILE: "/profile",
} as const;
