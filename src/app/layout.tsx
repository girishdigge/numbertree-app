import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { GoogleTagManager } from '@next/third-parties/google';
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
      <GoogleTagManager gtmId='GTM-5RKC2K3M' />
      <body className={manrope.className}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5RKC2K3M'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
