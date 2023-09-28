import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Sally Resch',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
