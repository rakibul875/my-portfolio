"use client";

import { Terminal, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#overview", id: "overview" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "border-b border-primary/20 bg-[#121214]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(138,43,226,0.15)] py-2"
            : "border-b border-white/5 bg-transparent py-4"
          }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-16">
          <Link href="#overview" onClick={(e) => handleNavClick(e, "#overview")} className="flex items-center gap-3 group">
            <Terminal className="text-primary w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]" />
            <span className="text-lg lg:text-xl font-black tracking-widest text-white border-l-2 border-primary pl-3 font-inter tracking-tighter uppercase transition-shadow duration-300 group-hover:shadow-primary">
              [DEV_ARCHITECT]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-code-label text-[11px] lg:text-xs tracking-widest py-2 transition-all duration-300 ${activeSection === link.id
                    ? "text-primary drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]"
                    : "text-on-surface-variant hover:text-white"
                  }`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${activeSection === link.id ? "scale-x-100 shadow-[0_0_10px_rgba(138,43,226,0.8)]" : "scale-x-0"
                    }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="small">HIRE_ME</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative font-code-label text-lg tracking-widest py-2 transition-all duration-300 ${activeSection === link.id
                  ? "text-primary drop-shadow-[0_0_15px_rgba(138,43,226,0.8)] scale-110"
                  : "text-on-surface-variant hover:text-white"
                }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300 ${activeSection === link.id ? "w-full shadow-[0_0_10px_rgba(138,43,226,0.8)]" : "w-0"
                  }`}
              ></span>
            </Link>
          ))}
          <div className="mt-8">
            <Button variant="primary" className="px-10 py-4 text-sm" onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}>
              HIRE_ME
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
