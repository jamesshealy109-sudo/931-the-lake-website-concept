import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://931thelakefm.com'),
  title: '93.1 The Lake | All-Time Favorites for Columbia',
  description: 'Listen live to 93.1 The Lake — Columbia’s all-time favorites and home for local personalities, community stories, events, and contests.',
  openGraph: {
    title: '93.1 The Lake | Your Favorites. Your Lake.',
    description: 'Columbia’s all-time favorites, local personalities, community stories, events, and contests.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '93.1 The Lake — Your Favorites. Your Lake.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '93.1 The Lake | Your Favorites. Your Lake.',
    description: 'Columbia’s all-time favorites, local personalities, community stories, events, and contests.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
