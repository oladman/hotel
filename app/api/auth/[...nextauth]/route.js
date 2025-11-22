import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// Define auth options
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
        // Example login logic
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
  // Add callbacks, session, pages, etc. here if needed
};

// NextAuth v5 App Router: export GET and POST directly
export const GET = async (req) => {
  const res = NextAuth(req, authOptions);
  return res;
};

export const POST = async (req) => {
  const res = NextAuth(req, authOptions);
  return res;
};

// Force dynamic to prevent build-time pre-render
export const dynamic = "force-dynamic";
