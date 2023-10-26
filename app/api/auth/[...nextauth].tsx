import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:"244932958858-256g9iukggsg8u2ojiu9n910m50n6aam.apps.googleusercontent.com",
      clientSecret:"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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  debug: true,
   callbacks: {
     async jwt({ token, account }:any) {
       // Persist the OAuth access_token to the token right after signin
       if (account) {
         token.accessToken = account.access_token
       }
       return token
     },
     async session({ session, token, user }:any) {
       // Send properties to the client, like an access_token from a provider.
       session.accessToken = token.accessToken
       return session
     }
   }
}

export default NextAuth(authOptions)
