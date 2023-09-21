import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

const provider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
});

export const authOptions: NextAuthOptions = {
  providers: [provider],
  secret: process.env.NEXT_AUTH_SECRET,
  debug: true,
};
