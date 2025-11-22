// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// Define authOptions here (do NOT export it)
const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        // Your login logic
        if (credentials.email === "test@test.com" && credentials.password === "1234") {
          return { id: 1, name: "Test User", email: "test@test.com" };
        }
        return null;
      },
    }),
  ],
  // Optional: callbacks, session, pages, etc.
};

// Create NextAuth handler
const handler = NextAuth(authOptions);

// ✅ Export only valid route handler fields
export { handler as GET, handler as POST };

// ✅ Force dynamic to prevent build-time pre-render
export const dynamic = "force-dynamic";
