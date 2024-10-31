import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Nodemailer from 'next-auth/providers/nodemailer';
import { pool } from '@/lib/postgres';
import PostgresAdapter from '@auth/pg-adapter';
import { clearStaleTokens } from '@/lib/auth/clearStaleTokensServerAction';
import { setName } from '@/lib/auth/setNameServerAction';
import  locale  from '@/i18n';

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    adapter: PostgresAdapter(pool),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        Nodemailer({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    pages: {
        signIn:`/${locale}/auth/sign-in/`,
        verifyRequest: `/${locale}/auth/auth-success`,
        error:`/${locale}/auth/auth-error`,
    },
    callbacks: {
        async jwt({ token, user, session, trigger }) {
            if (trigger === 'update' && session?.name !== token.name) {
                token.name = session.name;
                try {
                    await setName(token.name || 'default name');
                } catch (error) {
                    console.error('Failed to set user name:', error);
                }
            }
            if (user) {
                await clearStaleTokens();
                return {
                    ...token,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token }) {
            // console.log('session callback', { session, token });
            console.log('session, token Succees')
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                },
            };
        },
    },
});
