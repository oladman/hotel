export const publicRoutes = [
  "/", // Home route
  "/api/country", // Country API route
  "/api/country/*", // Wildcard to match dynamic segments like /api/country/[id]
];

export const authRoutes = ["/login", "/register" , "/error"];

export const apiAuthPrefix = ["/api/auth"];

export const DEFAULT_LOGIN_REDIRECT = "/settings";
