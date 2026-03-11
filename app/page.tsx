'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Send, Phone, MapPin, Mail, X } from 'lucide-react';

import Navbar from '@/components/Navbar';

// --- Components ---

const Hero = () => (
  <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://res.cloudinary.com/daq51lz0x/image/upload/f_auto,q_auto/v1772671677/photo_21_2026-03-05_02-09-08_gghwvz.jpg"
        alt="Event background"
        fill
        className="object-cover opacity-80 brightness-[0.7] contrast-[1.1]"
        priority
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8 tracking-tight"
      >
        EVENT ART<br />
        <span className="text-4xl md:text-6xl font-light">МИСТЕЦТВО ОРГАНІЗАЦІЇ ПОДІЙ</span>
      </motion.h1>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-2 border-white px-12 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-lg mb-12"
      >
        ЗАМОВИТИ ПОДІЮ
      </motion.button>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl md:text-2xl font-medium tracking-wide opacity-90"
      >
        Реалізуємо будь-який захід під ключ
      </motion.p>
    </div>
  </section>
);

const Services = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);

  const services = [
    { 
      title: 'Весілля мрії', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669926/IMG_0863_xjcot3.mp4', 
      desc: 'Повний супровід від концепції до останнього танцю, організація під ключ.',
      details: 'Ми створюємо весілля, які відображають вашу унікальну історію кохання. Наші послуги включають: розробку концепції та стилістики, підбір ідеальної локації, координацію всіх підрядників, менеджмент бюджету та повний супровід у день свята. Ми дбаємо про кожну деталь, щоб ви могли просто насолоджуватися моментом.'
    },
    { 
      title: 'Той самий корпоратив', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669915/IMG_0867_yz3gc3.mp4', 
      desc: 'DJ або жива музика, ведучий, професійний звук і світло.',
      details: 'Корпоратив — це не просто вечірка, це інструмент для об’єднання команди. Ми організовуємо заходи будь-якого масштабу: від камерних тімбілдінгів до грандіозних гала-вечерь. Забезпечуємо професійний звук, світло, найкращих ведучих та артистів, а також розробляємо сценарії, що залучають кожного співробітника.'
    },
    { 
      title: 'Незабутня вечірка', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773189764/video_2026-03-11_02-37-14_xnzldv.mp4', 
      desc: 'LED-екрани, сцена, дим, холодні фонтани, спецефекти.',
      details: 'Хочете вечірку, про яку говоритимуть роками? Ми знаємо, як це зробити. Використовуємо передові технології: LED-екрани високої чіткості, професійні сценічні конструкції, лазерні шоу та різноманітні спецефекти (важкий дим, холодні вогні, конфеті). Ваша подія перетвориться на справжній перформанс.'
    },
    { 
      title: 'Результативна конференція', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772670818/6163252_Journalist_Audience_Sitting_Politician_By_Frame_Stock_Footage_Artlist_HD_siemnv.mp4', 
      desc: 'Організація кейтерингу, професійне обладнання, технічний продакшн, трансфер, підбір локації.',
      details: 'Професіоналізм у кожній деталі бізнес-події. Ми забезпечуємо повний технічний продакшн, синхронний переклад, онлайн-трансляції, реєстрацію учасників та логістику. Наш кейтеринг відповідає найвищим стандартам, а вибір локацій дозволяє провести захід будь-якого формату — від стратегічної сесії до міжнародного форуму.'
    },
    { 
      title: 'Приватні події', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669911/IMG_0861_va03gu.mp4', 
      desc: 'Сцена, шоу-програма, підбір локації, концепція та стиль події, декор та оформлення.',
      details: 'Дні народження, ювілеї, хрестини — ми робимо ваші сімейні свята особливими. Створюємо індивідуальні декорації, підбираємо артистів, які відповідають вашим смакам, та організовуємо шоу-програму, що здивує гостей. Кожна приватна подія з нами — це затишок, стиль та бездоганний сервіс.'
    },
    { 
      title: 'Захоплюючий фестиваль', 
      video: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772670829/6542667_Crowd_Hands_Party_Lights_By_Danil_Rudenko_Artlist_HD_mgazdv.mp4', 
      desc: 'Професійний звук, світлове шоу, фото та відеограф, анімація, координатори.',
      details: 'Масштабні події потребують масштабного підходу. Ми маємо досвід в організації фестивалів та концертів під відкритим небом та у великих залах. Забезпечуємо потужний звук, складні світлові інсталяції, роботу великої команди координаторів та безпеку учасників. Ми створюємо атмосферу драйву та єдності.'
    },
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Vertical Cards */}
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedService(s)}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 bg-zinc-900"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
                <source src={s.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-2">{s.title}</h3>
                <p className="text-sm md:text-base opacity-100 transition-opacity duration-300 max-w-xs font-medium">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Explanatory Text */}
        <div className="lg:sticky lg:top-32 space-y-12 h-fit">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
              Мистецтво <br />
              <span className="text-pink-500">в деталях</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-light">
              Кожна подія для нас — це чисте полотно, на якому ми створюємо шедевр. Ми не просто організовуємо заходи, ми проектуємо досвід, який залишається з вами назавжди.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/gallery">
              <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-xl">
                Дивитись галерею
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <h4 className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4">Естетика</h4>
              <p className="opacity-60 text-sm leading-relaxed">
                Від вибору локації до останньої квітки в декорі — ми дбаємо про візуальну досконалість.
              </p>
            </div>
            <div>
              <h4 className="text-pink-500 font-bold uppercase tracking-widest text-sm mb-4">Емоції</h4>
              <p className="opacity-60 text-sm leading-relaxed">
                Ми створюємо сценарії, які торкаються сердець та викликають щирі посмішки.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Media */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={selectedService.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none">
                  {selectedService.title}
                </h3>
                <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">
                  {selectedService.desc}
                </p>
                <p className="text-lg opacity-70 leading-relaxed font-light">
                  {selectedService.details}
                </p>
                <div className="pt-4">
                  <a 
                    href="#contacts" 
                    onClick={() => setSelectedService(null)}
                    className="inline-block bg-white text-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300"
                  >
                    Замовити
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              Про <span className="text-pink-500">нас</span>
            </h2>
            <div className="space-y-6 text-xl opacity-80 leading-relaxed font-light">
              <p>
                Ми — івент-агентство повного циклу, яке спеціалізується на організації:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>бізнес-заходів (конференції, форуми, презентації)</li>
                <li>корпоративних подій</li>
                <li>приватних свят</li>
                <li>концертів та фестивалів</li>
              </ul>
              <p>
                Кожен івент починається з чистого аркуша, який ми наповнюємо змістом, емоцією та ідеєю.
              </p>
            </div>
          </div>
          
          <div className="bg-zinc-900/50 p-10 rounded-[40px] border border-white/10 space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-pink-500">Наша команда забезпечує:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> розробку концепції
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> підбір локації
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> технічне забезпечення
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> організацію кейтерингу
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> декор та оформлення
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-pink-500 rounded-full" /> координацію заходу
              </li>
            </ul>
            <p className="pt-6 border-t border-white/10 italic opacity-60">
              Ми поєднуємо креативність із чітким менеджментом, щоб кожен захід був продуманим до деталей та реалізованим на високому рівні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 px-4 max-w-7xl mx-auto text-center">
    <p className="text-xl md:text-2xl font-medium mb-16 max-w-4xl mx-auto leading-relaxed">
      Організація подій - це 10% натхнення та 90% тяжкої праці. <br />
      Ми беремо всі труднощі організації будь-яких івентів на себе
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      <div className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5">
        <h4 className="text-3xl font-bold mb-4">Ви:</h4>
        <p className="text-lg opacity-80">Залишаєте заявку на консультацію</p>
      </div>
      <div className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5">
        <h4 className="text-3xl font-bold mb-4">Ми:</h4>
        <p className="text-lg opacity-80">Повністю розробляємо та організовуємо захід</p>
      </div>
      <div className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5">
        <h4 className="text-3xl font-bold mb-4">Ви:</h4>
        <p className="text-lg opacity-80">Отримуєте насолодження від святкового столу, декорацій та шоу-програми івенту</p>
      </div>
      
      {/* Arrow decoration */}
      <div className="hidden md:block absolute -bottom-12 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full">
        <div className="absolute right-0 -top-1.5 w-4 h-4 border-t-4 border-r-4 border-pink-500 rotate-45" />
      </div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="py-12 overflow-hidden bg-black border-y border-white/5">
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-12"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-glow-pink opacity-40">
          EVENT ART
        </span>
      ))}
    </motion.div>
  </div>
);

import { sendToTelegram } from './actions';

const ContactSection = () => {
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null, message: string | null }>({ type: null, message: null });
  const [isPending, setIsPending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus({ type: null, message: null });

    const formData = new FormData(e.currentTarget);
    const result = await sendToTelegram(formData);

    if (result.success) {
      setStatus({ type: 'success', message: 'Дякуємо! Ми зв’яжемось з вами найближчим часом.' });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: 'error', message: result.error || 'Щось пішло не так.' });
    }
    setIsPending(false);
  };

  return (
    <section id="contacts" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Більше, ніж свято. Більше, ніж шоу. <br />
          Давайте створимо магію разом — <br />
          залиште контакти, і ми покажемо, як.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <h3 className="text-4xl font-bold uppercase tracking-tighter">ГОТОВІ ДО НЕЗАБУТНІХ СПОГАДІВ?</h3>
          
          <div className="flex gap-6">
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-pink-500 hover:text-white transition-colors">
              <Instagram size={28} />
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-pink-500 hover:text-white transition-colors">
              <Send size={28} />
            </a>
          </div>
          
          <div className="space-y-6 text-xl">
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500" />
              <span>М. Київ, вул Хрещатик 9</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-pink-500" />
              <span>+380972385685</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-pink-500" />
              <span>atmevents@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-[40px] text-black shadow-2xl">
          <h4 className="text-2xl font-bold text-center mb-8">Залишіть свої контакти і ми з вами зв&apos;яжемось</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              name="name"
              type="text" 
              placeholder="Ваше ім'я" 
              className="w-full bg-zinc-100 p-4 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <input 
              name="phone"
              type="tel" 
              required
              placeholder="Номер телефону *" 
              className="w-full bg-zinc-100 p-4 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <textarea 
              name="message"
              placeholder="Про яку подію ви мрієте?" 
              rows={3}
              className="w-full bg-zinc-100 p-4 rounded-2xl border-none focus:ring-2 focus:ring-pink-500 outline-none resize-none"
            />
            
            {status.message && (
              <p className={`text-sm font-bold text-center ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}

            <button 
              disabled={isPending}
              className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors mt-4 disabled:opacity-50"
            >
              {isPending ? 'Відправляємо...' : 'Замовити подію'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
      <Link href="/cookie-policy" className="hover:opacity-100">Coockie policy</Link>
      <span>© All rights reserved 2026</span>
      <Link href="/privacy-policy" className="hover:opacity-100">Privacy policy</Link>
    </div>
  </footer>
);

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Process />
      <Marquee />
      <ContactSection />
      <Marquee />
      <Footer />
    </main>
  );
}
