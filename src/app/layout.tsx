import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
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
        {/* Google Tag Manager - load during browser idle time */}
        <Script
          id='google-tag-manager'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W7BCS5LN');
            `,
          }}
        />

        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-W7BCS5LN'
            height='0'
            width='0'
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          />
        </noscript>

        {children}

        <Toaster />
      </body>
    </html>
  );
}
