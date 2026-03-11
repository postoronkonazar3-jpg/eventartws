'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <Link href="/" className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
            <ArrowLeft size={20} /> На головну
          </Link>
          
          <div className="flex items-center gap-4">
            <Cookie className="text-pink-500" size={40} />
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">
              Політика <span className="text-pink-500">Cookie</span>
            </h1>
          </div>

          <div className="space-y-8 text-lg opacity-80 font-light leading-relaxed prose prose-invert max-w-none">
            <p>
              Цей веб-сайт використовує файли cookie для покращення вашого досвіду користування. Нижче ви знайдете інформацію про те, що таке файли cookie, як ми їх використовуємо та як ви можете ними керувати.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Що таке файли Cookie?</h2>
              <p>
                Cookie — це невеликі текстові файли, які зберігаються у вашому браузері або на жорсткому диску вашого комп&apos;ютера чи мобільного пристрою, коли ви відвідуєте веб-сторінку або додаток.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Як ми використовуємо Cookie?</h2>
              <p>
                Ми використовуємо файли cookie для наступних цілей:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Технічні:</strong> Необхідні для правильної роботи сайту та навігації.</li>
                <li><strong>Аналітичні:</strong> Допомагають нам зрозуміти, як відвідувачі взаємодіють із сайтом, збираючи анонімну інформацію.</li>
                <li><strong>Функціональні:</strong> Дозволяють сайту запам&apos;ятовувати ваші налаштування (наприклад, мову).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Керування файлами Cookie</h2>
              <p>
                Більшість браузерів дозволяють відмовитися від прийняття файлів cookie або видалити їх. Методи для цього розрізняються залежно від браузера та його версії. Ви можете отримати актуальну інформацію про блокування та видалення файлів cookie за цими посиланнями:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Opera</li>
              </ul>
              <p className="mt-4 italic">
                Зверніть увагу, що блокування всіх файлів cookie може негативно вплинути на зручність використання багатьох веб-сайтів, включаючи наш.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Контакти</h2>
              <p>
                Якщо у вас виникли запитання щодо нашої політики використання файлів cookie, будь ласка, зв&apos;яжіться з нами через форму на головній сторінці.
              </p>
            </section>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
          <Link href="/cookie-policy" className="hover:opacity-100">Coockie policy</Link>
          <span>© All rights reserved 2026</span>
          <Link href="/privacy-policy" className="hover:opacity-100">Privacy policy</Link>
        </div>
      </footer>
    </main>
  );
}
