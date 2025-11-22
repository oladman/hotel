import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === "test@test.com" &&
          credentials.password === "1234"
        ) {
          return { id: 1, name: "Test User", email: "test@test.com" };
        }
        return null;
      },
    }),
  ],
};

// Wrap NextAuth in a function that returns a Response
async function nextAuthHandler(req) {
  const res = await NextAuth(req, authOptions);
  // Convert NextAuthResult to NextResponse for App Router
  return new NextResponse(JSON.stringify(res), { status: 200 });
}

// ✅ Named exports for GET & POST
export const GET = nextAuthHandler;
export const POST = nextAuthHandler;

// ✅ Prevent build-time pre-render
export const dynamic = "force-dynamic";
