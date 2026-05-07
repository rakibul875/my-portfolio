"use client";

import { Grid, Code, Layers, AtSign } from "lucide-react";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [activeHash, setActiveHash] = useState("#overview");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#overview");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { name: "OVERVIEW", icon: <Grid className="w-6 h-6" />, href: "#overview" },
    { name: "SKILLS", icon: <Code className="w-6 h-6" />, href: "#skills" },
    { name: "PROJECTS", icon: <Layers className="w-6 h-6" />, href: "#projects" },
    { name: "CONNECT", icon: <AtSign className="w-6 h-6" />, href: "#contact" },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-[60] bg-[#050505]/90 backdrop-blur-3xl border-t border-white/10 md:hidden h-20 flex items-center justify-around px-4">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setActiveHash(item.href)}
          className={`flex flex-col items-center justify-center gap-1 transition-all px-4 py-2 rounded-xl ${
            activeHash === item.href || (activeHash === "" && item.href === "#overview")
              ? "bg-purple-600/20 text-purple-400"
              : "text-gray-500 hover:text-white"
          }`}
        >
          {item.icon}
          <span className="font-inter text-[10px] tracking-widest font-medium uppercase">
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
}
