'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`transition-colors ${
        isActive
          ? 'text-black font-medium'
          : 'text-muted hover:text-black'
      }`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="max-w-2xl mx-auto px-6 pt-8 flex items-center justify-between">
      <Link
        href="/"
        className="text-sm font-bold tracking-tight text-black hover:opacity-60 transition-opacity"
      >
        Can Erden
      </Link>
      <div className="flex items-center gap-5 text-xs">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <Link
          href="https://skills.joinhabitat.eu"
          target="_blank"
          className="ml-2 rounded-full border border-neutral-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted hover:text-black hover:border-black transition-colors"
        >
          Habitat Skills
        </Link>
      </div>
    </nav>
  );
}
