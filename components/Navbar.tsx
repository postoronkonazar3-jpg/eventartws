'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2">
    <Link href="/" className="text-2xl font-display font-bold tracking-tighter">EVENT ART</Link>
    <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
      <Link href="/#services" className="hover:opacity-100 transition-opacity">послуги</Link>
      <Link href="/gallery" className="hover:opacity-100 transition-opacity">галерея</Link>
      <Link href="/#contacts" className="hover:opacity-100 transition-opacity">контактна інформація</Link>
    </div>
  </nav>
);

export default Navbar;
