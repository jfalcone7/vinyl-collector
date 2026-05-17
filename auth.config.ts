import type { NextAuthOptions } from 'next-auth';
 
export const authConfig = {
    providers: [],
    pages: {
        signIn: '/login',
    },
} satisfies NextAuthOptions;