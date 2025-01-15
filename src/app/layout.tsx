import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Maulana Yusuf Bahri - Portfolio</title>
        <meta name="description" content="Tech Lead & Mobile Apps Specialist Portfolio" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
