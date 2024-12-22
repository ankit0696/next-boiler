import NextAuth, {AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import * as process from "node:process";

const providers = [];

if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
    providers.push(
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    );
}

if (process.env.GOOGLE_ID && process.env.GOOGLE_SECRET) {
    providers.push(
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    );
}

if (process.env.APPLE_ID && process.env.APPLE_SECRET) {
    providers.push(
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        })
    );
}

const authOptions: AuthOptions = {
    providers,
};

const authHandler = NextAuth(authOptions);
export {authHandler as GET, authHandler as POST};