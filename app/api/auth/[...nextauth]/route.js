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

// ✅ Create NextAuth handler
const handler = (req, res) => NextAuth(req, res, authOptions);

// ✅ Export only a default handler
export default handler;

// ✅ Mark the route as dynamic so Next.js doesn't pre-render
export const dynamic = "force-dynamic";
