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
  keywords: ['організація подій київ', 'весілля під ключ', 'корпоратив київ', 'івент агентство', 'event art kyiv'],
  openGraph: {
    title: 'EVENT ART | Мистецтво організації подій',
    description: 'Реалізуємо будь-який івент під ключ у Києві. Від весілля мрії до масштабних фестивалів.',
    url: 'https://event-art.com.ua', // Replace with your final domain
    siteName: 'EVENT ART',
    locale: 'uk_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
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
