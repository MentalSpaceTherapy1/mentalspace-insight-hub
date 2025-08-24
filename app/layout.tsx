import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { CrisisBanner } from '@/components/CrisisBanner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://mentalspacetherapy.lovable.app'),
  robots: {
    index: process.env.NEXT_PUBLIC_ENV === 'prod',
    follow: process.env.NEXT_PUBLIC_ENV === 'prod',
    noarchive: process.env.NEXT_PUBLIC_ENV !== 'prod',
    nosnippet: process.env.NEXT_PUBLIC_ENV !== 'prod',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NEXT_PUBLIC_ENV !== 'prod' && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          {children}
          <CrisisBanner />
        </Providers>
      </body>
    </html>
  );
}