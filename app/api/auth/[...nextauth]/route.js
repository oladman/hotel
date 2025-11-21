import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // example
// import other providers or options
import { authOptions } from "../../../../auth"; // your auth config

export const GET = (req) => NextAuth(req, authOptions);
export const POST = (req) => NextAuth(req, authOptions);
