import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manivis',
  description:
    'Manipueira — soluções sustentáveis para tratamento e reaproveitamento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
