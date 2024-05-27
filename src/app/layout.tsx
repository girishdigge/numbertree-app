import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Numbertree',
  description:
    'Numbertree is an infrastructure consulting engineering & audit services firm. We are committed to delivering exceptional and cutting-edge solutions to today’s business problems.',
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
