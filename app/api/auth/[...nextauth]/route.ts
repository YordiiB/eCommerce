// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import prisma from "@/utils/db";
// import { NextAuthOptions } from "next-auth";

// // Define auth options
// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any) {
//         const user = await prisma.user.findFirst({
//           where: { email: credentials.email },
//         });

//         if (user && user.password) {
//           const isPasswordCorrect = await bcrypt.compare(
//             credentials.password,
//             user.password
//           );
//           if (isPasswordCorrect) {
//             const { password, ...safeUser } = user;
//             return safeUser;
//           }
//         }

//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ account }) {
//       return account?.provider === "credentials";
//     },
//   },
// };

// // ✅ Now export GET and POST
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// ✅ No re-definition of authOptions
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
