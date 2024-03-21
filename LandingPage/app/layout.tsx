import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import StyledJsxRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alpilogi',
  description: 'La solution digitale pour faciliter les soins à domicile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="gs">
      <body className={inter.className}>
        <Providers>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </Providers>
      </body>
    </html>
  );
}
