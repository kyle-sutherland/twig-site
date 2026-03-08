"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useLang } from "../context/LanguageContext";

type NavItem = {
  name: string;
  nameFr?: string;
  route: string;
};

const navItems: NavItem[] = [
  {
    name: "HOME",
    route: "/",
  },
  {
    name: "CONTACT",
    route: "/contact",
  },
  {
    name: "THE STICK (BLOG)",
    route: "/the-stick",
  },
  {
    name: "INDIGENOUS SOLIDARITY",
    route: "/indigenous",
  },
  {
    name: "KNOW YOUR RIGHTS",
    route: "/rights",
  },
  {
    name: "ZINES!",
    route: "/zines",
  },
  {
    name: "SUPPORT US",
    nameFr: "NOUS SOUTENIR",
    route: "/support",
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isHomePage = pathname === "/";
  const { lang, toggle } = useLang();

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navColorClass = !isHomePage || isScrolled
    ? "bg-black/90 backdrop-blur-md text-white"
    : "bg-transparent text-gray-950";

  return (
    <nav className={`heading fixed top-0 w-full z-50 transition-all duration-300 ${navColorClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center py-4">

          {/* Desktop nav links — centered, visible at lg+ */}
          <div className="hidden lg:flex lg:gap-8 xl:gap-16">
            {navItems.map((item) => (
              <Link key={item.route} href={item.route} className="transition-colors">
                {lang === "fr" && item.nameFr ? item.nameFr : item.name}
              </Link>
            ))}
          </div>

          {/* Mobile controls — hamburger + toggle, visible below lg */}
          <div className="lg:hidden flex items-center gap-4 ml-auto">
            <button
              onClick={toggle}
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <button
              ref={buttonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Desktop language toggle — top right corner, independent of nav links */}
      <div className="hidden lg:flex absolute top-0 right-6 h-full items-center gap-2">
        <button
          onClick={toggle}
          className={lang === "en" ? "font-bold underline" : "opacity-60"}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="opacity-30">|</span>
        <button
          onClick={toggle}
          className={lang === "fr" ? "font-bold underline" : "opacity-60"}
          aria-label="Switch to French"
        >
          FR
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden px-4 py-2 space-y-4 bg-gray-900/90 text-white"
        >
          {navItems.map((item) => (
            <Link key={item.route} href={item.route} className="block transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
