import './globals.css'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dmitry | Portfolio',
  description: 'Generated by Dmitry',
}

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'ru'}];
}

export default async function RootLayout({ children, params: {locale}}) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
