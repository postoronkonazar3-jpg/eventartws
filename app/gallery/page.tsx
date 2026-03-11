'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const mediaItems = [
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669926/IMG_0863_xjcot3.mp4', span: 'md:col-span-2 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669908/photo_20_2026-03-05_02-09-08_p70wcv.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190532/video_2026-03-11_02-37-57-_2__cq1zzq.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669915/IMG_0867_yz3gc3.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669906/photo_19_2026-03-05_02-09-08_ozlze1.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773189764/video_2026-03-11_02-37-14_xnzldv.mp4', span: 'md:col-span-2 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669911/IMG_0861_va03gu.mp4', span: 'md:col-span-2 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190532/video_2026-03-11_02-37-57-_6__kfpyfs.mp4', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669904/photo_18_2026-03-05_02-09-08_oyrrj7.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190532/video_2026-03-11_02-37-57-_8__ilfpup.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669903/IMG_0860_z4ewhf.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190534/video_2026-03-11_02-37-57-_7__aqsabx.mp4', span: 'md:col-span-2 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669903/photo_16_2026-03-05_02-09-08_l4hgnn.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669903/photo_17_2026-03-05_02-09-08_qb56pn.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190615/IMG_6697_pgedqt.mp4', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669902/photo_15_2026-03-05_02-09-08_kmgzgb.jpg', span: 'md:col-span-2 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190860/IMG_4830_s82j8p.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669902/photo_14_2026-03-05_02-09-08_ub0lir.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669902/photo_13_2026-03-05_02-09-08_kkicfa.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190858/IMG_4834_stigdm.mp4', span: 'md:col-span-2 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669902/photo_12_2026-03-05_02-09-08_ffev18.jpg', span: 'md:col-span-1 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669901/photo_11_2026-03-05_02-09-08_abbdi1.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1773190854/IMG_6629_bshtuu.mp4', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669901/photo_8_2026-03-05_02-09-07_pe5ulr.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669901/photo_9_2026-03-05_02-09-08_kqscdq.jpg', span: 'md:col-span-2 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669901/photo_10_2026-03-05_02-09-08_qwbm2u.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669900/photo_7_2026-03-05_02-09-07_d0kyfh.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669900/photo_6_2026-03-05_02-09-07_i2luty.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669900/photo_5_2026-03-05_02-09-07_erdo9i.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669899/photo_4_2026-03-05_02-09-07_tftu5r.jpg', span: 'md:col-span-2 md:row-span-2' },
  { type: 'video', src: 'https://res.cloudinary.com/daq51lz0x/video/upload/v1772669898/IMG_0868_iket6x.mp4', span: 'md:col-span-1 md:row-span-2' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669898/photo_3_2026-03-05_02-09-07_gjtxmo.jpg', span: 'md:col-span-1 md:row-span-1' },
  { type: 'image', src: 'https://res.cloudinary.com/daq51lz0x/image/upload/v1772669897/photo_2_2026-03-05_02-09-07_gwbz53.jpg', span: 'md:col-span-1 md:row-span-1' },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section for Gallery */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
              <ArrowLeft size={20} /> На головну
            </Link>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.8]">
              Наша <br />
              <span className="text-pink-500">Галерея</span>
            </h1>
          </div>
          <p className="max-w-md text-xl opacity-60 font-light leading-relaxed">
            Кожна фотографія та відео — це окрема історія, наповнена емоціями, стилем та нашою пристрастю до ідеальних подій.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 ${item.span}`}
            >
              {item.type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={`Gallery item ${index}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
          <Link href="/cookie-policy" className="hover:opacity-100">Coockie policy</Link>
          <span>© All rights reserved 2026</span>
          <Link href="/privacy-policy" className="hover:opacity-100">Privacy policy</Link>
        </div>
      </footer>
    </main>
  );
}
