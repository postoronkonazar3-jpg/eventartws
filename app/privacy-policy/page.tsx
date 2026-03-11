'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="text-pink-500" size={40} />
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">
              Політика <span className="text-pink-500">конфіденційності</span>
            </h1>
          </div>

          <div className="space-y-8 text-lg opacity-80 font-light leading-relaxed prose prose-invert max-w-none">
            <p>
              Ваша конфіденційність важлива для нас. У цій Політиці конфіденційності пояснюється, як EVENT ART збирає, використовує та захищає вашу інформацію, коли ви відвідуєте наш веб-сайт.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Збір інформації</h2>
              <p>
                Ми збираємо інформацію, яку ви надаєте нам безпосередньо через форму зворотного зв&apos;язку, включаючи ваше ім&apos;я, номер телефону та деталі вашого запиту щодо організації події.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Використання інформації</h2>
              <p>
                Надана вами інформація використовується виключно для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Зв&apos;язку з вами для надання консультацій;</li>
                <li>Обробки ваших замовлень на організацію заходів;</li>
                <li>Покращення якості наших послуг та веб-сайту.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Захист даних</h2>
              <p>
                Ми впроваджуємо різноманітні заходи безпеки для збереження вашої особистої інформації. Ваші дані не передаються третім особам, за винятком випадків, передбачених законодавством України або необхідних для виконання вашого замовлення (наприклад, передача даних підрядникам за вашою згодою).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Ваші права</h2>
              <p>
                Ви маєте право в будь-який час запитати доступ до ваших персональних даних, змінити їх або вимагати видалення з нашої бази. Для цього зв&apos;яжіться з нами за контактами, вказаними на сайті.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Зміни в політиці</h2>
              <p>
                Ми залишаємо за собою право оновлювати цю Політику конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці.
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
