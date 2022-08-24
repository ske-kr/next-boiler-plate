import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

const options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Kakao({
      clientId: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
  ],
};

// @ts-ignore
const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
