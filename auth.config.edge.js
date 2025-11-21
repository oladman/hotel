// Edge-compatible auth config (no Node.js dependencies like bcryptjs)
// This is used by middleware.js which runs in Edge Runtime
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // Note: Credentials provider is excluded here because it requires bcryptjs
        // which is not compatible with Edge Runtime
    ],
}
