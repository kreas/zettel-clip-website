import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Bodoni_Moda, JetBrains_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

const cursorGothic = localFont({
  variable: '--font-sans',
  display: 'swap',
  src: [
    { path: '../../public/fonts/CursorGothic-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/CursorGothic-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/CursorGothic-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/CursorGothic-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const bodoniModa = Bodoni_Moda({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hemingway',
  description: 'A second brain, written plainly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cursorGothic.variable} ${jetbrainsMono.variable} ${bodoniModa.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
