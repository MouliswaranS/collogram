// Intialize the NextAuth.js client
// https://next-auth.js.org/getting-started/client
// npm install next-auth --save

import nextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "client id not set",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "secret not set",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default nextAuth(authOptions);
