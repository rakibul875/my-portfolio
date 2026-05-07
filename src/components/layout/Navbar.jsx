"use client";

import { Terminal } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONNECT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#121214]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(138,43,226,0.15)] transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-20">
        <Link href="#overview" className="flex items-center gap-3 group">
          <Terminal className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
          <span className="text-lg lg:text-xl font-black tracking-widest text-white border-l-2 border-primary pl-3 font-inter tracking-tighter uppercase">
            [DEV_ARCHITECT]
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-code-label text-[11px] lg:text-xs text-on-surface-variant hover:text-primary transition-colors tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="small">HIRE_ME</Button>
        </div>
        <div className="md:hidden">
          <Button variant="small">HIRE</Button>
        </div>
      </div>
    </header>
  );
}
