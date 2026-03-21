import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'EVENT ART | Організація подій у Києві | Весілля, Корпоративи, Вечірки',
  description: 'Професійна організація івентів під ключ у Києві. EVENT ART — це мистецтво створення незабутніх весіль, корпоративів та фестивалів. Залиште заявку на консультацію!',
  keywords: ['організація подій київ', 'весілля під ключ київ', 'корпоратив київ', 'івент агентство київ', 'event art kyiv', 'організація свят київ'],
  authors: [{ name: 'EVENT ART' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'EVENT ART | Мистецтво організації подій у Києві',
    description: 'Реалізуємо будь-який івент під ключ у Києві. Від весілля мрії до масштабних фестивалів.',
    url: 'https://event-art.com.ua',
    siteName: 'EVENT ART',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772671677/photo_21_2026-03-05_02-09-08_gghwvz.jpg',
        width: 1200,
        height: 630,
        alt: 'EVENT ART - Організація подій',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EVENT ART | Організація подій у Києві',
    description: 'Мистецтво створення незабутніх подій під ключ.',
    images: ['https://res.cloudinary.com/daq51lz0x/image/upload/v1772671677/photo_21_2026-03-05_02-09-08_gghwvz.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white font-sans selection:bg-pink-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
