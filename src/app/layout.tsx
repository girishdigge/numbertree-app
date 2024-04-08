import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Numbertree',
  description: 'Numbertree Assurance Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
