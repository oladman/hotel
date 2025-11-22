// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"; // replace with your provider(s)
import CredentialsProvider from "next-auth/providers/credentials"; // optional
import { authOptions as importedAuthOptions } from "../../../../auth"; // optional, if you have auth.js

// Use imported authOptions if you have them, otherwise define here
export const authOptions = importedAuthOptions || {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        // Your login logic here
        // Example:
        if (credentials.email === "test@test.com" && credentials.password === "1234") {
          return { id: 1, name: "Test User", email: "test@test.com" };
        }
        return null;
      },
    }),
  ],
  // Optional: session, callbacks, pages, etc.
};

// Create the NextAuth handler
const handler = NextAuth(authOptions);

// ✅ Export handler for App Router
export { handler as GET, handler as POST };

// ✅ Prevent build-time pre-rendering
export const dynamic = "force-dynamic";
