import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "SYSTEM", href: "#hero" },
  { label: "LEDGER", href: "#experience" },
  { label: "STACK", href: "#skills" },
  { label: "GATEWAY", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/30" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-mono text-xs tracking-[0.3em] text-primary"
        >
          AR://
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border/30 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block font-mono text-sm tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
