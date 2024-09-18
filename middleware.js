import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const { pathname } = nextUrl;

  console.log('The URL:', pathname);

  // Check if the route starts with any of the public routes
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // Check if it's an API auth route
  const isApiAuthRoute = apiAuthPrefix.some(route => pathname.startsWith(route));

  // Check if it's an auth route (like /login or /register)
  const isAuthRoute = authRoutes.includes(pathname);

  // Check if the route is the /settings page (protected route)
  const isSettingsRoute = pathname === '/settings';
  
  

  // Handle API Auth Routes
  if (isApiAuthRoute) {
    return null;  // Allow API auth routes
  }

  // Handle Auth Routes (e.g., /login, /register)
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;  // Allow access to login or register if not logged in
  }

  

  // Handle Public Routes (e.g., /api/country/[id])
  if (isPublicRoute && !isSettingsRoute) {
    return null;  // Allow access to public routes
  }

  // Protect the /settings route
  if ( !isLoggedIn && isSettingsRoute ) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  // Redirect to login if the user is not logged in and trying to access a protected route
  if (!isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;  // Allow access if logged in
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // Match all requests that are not static files or _next routes
    '/',  // Root path
    '/api/country/:path*',  // Match all /api/country/[id] routes, including dynamic IDs
    '/settings', // Ensure /settings is matched by middleware
    '/(api|trpc)(.*)',  // General API and TRPC route matching
  ],
};
