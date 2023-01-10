import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../utils/dbConnection";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "example@bmsce.ac.in" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const client = await dbConnect()

                console.log(credentials.email);
                const users = client.db().collection("users")
                const user = await users.findOne({ email: credentials.email })

                if (!user) {
                    client.close()
                    throw new Error('No user Found!')
                }
                if (user.password != credentials.password) {
                    client.close()
                    throw new Error('Wrong Password')
                }
                const answer = user
                console.log(answer);
                client.close()
                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/student-login"
    }
}

export default NextAuth(authOptions)