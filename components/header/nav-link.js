'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <div
      className={`lg:mx-3 md:mx-1 lg:text-sm md:text-xs ${
        path.startsWith(href) ? `font-semibold` : `font-normal text-gray-400`
      } hover:text-white cursor-pointer`}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
}
