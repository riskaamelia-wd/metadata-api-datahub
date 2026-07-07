import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metadata API',
  description: 'Katalog endpoint API metadata dan data',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
