import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const sweety = localFont({
  src: '../public/fonts/Sweety.ttf',
  variable: '--font-sweety-local',
  display: 'swap',
});

const desire = localFont({
  src: '../public/fonts/Desire.otf',
  variable: '--font-desire-local',
  display: 'swap',
});

const vani = localFont({
  src: '../public/fonts/Vani.ttf',
  variable: '--font-vani-local',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nita-nails.vercel.app'),
  title: 'Nita Nails',
  description:
    'Nita Nails - Professzionális műköröm szalon Hódmezővásárhelyen. Széles körű szolgáltatások, egyedi dizájn és kiváló minőség várja vendégeinket. Foglalj időpontot még ma!',
  openGraph: {
    title: 'Nita Nails',
    description:
      'Nita Nails - Professzionális műköröm szalon Hódmezővásárhelyen. Széles körű szolgáltatások, egyedi dizájn és kiváló minőség várja vendégeinket. Foglalj időpontot még ma!',
    url: 'https://nita-nails.vercel.app',
    siteName: 'Nita Nails',
    images: [
      {
        url: '/nita_nails.jpg',
        width: 1200,
        height: 630,
        alt: 'Nita Nails',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nita Nails',
    description:
      'Nita Nails - Professzionális műköröm szalon Hódmezővásárhelyen. Széles körű szolgáltatások, egyedi dizájn és kiváló minőség várja vendégeinket. Foglalj időpontot még ma!',
    images: [
      {
        url: '/nita_nails.jpg',
        alt: 'Nita Nails',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='hu' className='h-full antialiased'>
      <head>
        <meta name='apple-mobile-web-app-title' content='NitaNails' />
      </head>
      <body
        className={`${sweety.variable} ${desire.variable} ${vani.variable} bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
