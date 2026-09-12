import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Alfabetización IA, AI Act y RGPD para empresas | Spiralia',
  description:
    'Prepara a tu empresa ante las obligaciones del AI Act y el RGPD. Formación por perfiles para reducir conductas de riesgo y documentar medidas de alfabetización IA.',
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
