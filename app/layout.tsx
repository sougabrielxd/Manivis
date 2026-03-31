import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manivis',
  description:
    'Da raiz ao resultado: inovação sustentável — gestão, tratamento e reaproveitamento da manipueira.',
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
