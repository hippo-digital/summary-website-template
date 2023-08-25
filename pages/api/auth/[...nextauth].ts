import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const { password } = credentials as { password: string }
        //logic here
        if (password !== process.env.SECRET_PASSWORD) {
          throw new Error("Invalid password")
        }


        return { id: "1234", name: "John Doe", email: "john@gmail.com" }
      },
    }),
  ],
}

export default NextAuth(authOptions)
