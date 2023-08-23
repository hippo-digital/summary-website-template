import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const isDevelopment = true;

const providers = [];

// When developing locally allow people to login without using Google Sign-on.
if (isDevelopment) {
    providers.push(
        CredentialsProvider({
            name: "development user",
            credentials: {},
            authorize: () => ({ id: "dev" }),
        })
    );
}

providers.push(
    GoogleProvider({
        // @ts-ignore
        clientId: process.env.GOOGLE_CLIENT_ID,
        // @ts-ignore
        clientSecret: process.env.GOOGLE_SECRET,
    })
);

export default NextAuth({ providers });
