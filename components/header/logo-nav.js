'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/images/logo.png';
import MobileNav from './mobile-nav';

export default function LogoNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleWindowSize(window);
    window.addEventListener('resize', handleWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  // handle window resize for navbar
  const handleWindowSize = (e) => {
    if (window.innerWidth > 768) {
      setOpen(false);
    } else if (window.innerWidth <= 768) {
      setOpen(true);
    }
  };

  return (
    <>
      <div className="flex">
        <div
          className="z-50 mr-3 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>
        <Link href="/browse">
          <Image
            src={Logo}
            width={110}
            height={110}
            alt="logo"
            className={`mx-auto md:mr-3`}
          />
        </Link>
      </div>
      <MobileNav open={open} />
    </>
  );
}
