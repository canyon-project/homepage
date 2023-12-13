import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import AppNav from '@/components/app/nav';
import AppFooter from '@/components/app/footer';

// import { cn } from "../@/lib/utils"

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
      <AppNav />
        {children}
      <AppFooter/>
      </body>
    </html>
  );
}
