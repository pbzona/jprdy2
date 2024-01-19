import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'jprdy!',
  description: 'A Jeopardy! scoreboard for playing along at home',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="jprdy"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
