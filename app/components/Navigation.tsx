"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

type NavItem = {
  name: string;
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
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md text-white"
          : "bg-transparent text-gray-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-items-center py-4">
          <div className="mx-auto hidden md:flex md:space-x-8 lg:space-x-16 xl:space-x-24">
            {navItems.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                className="transition-colors"
              >
                {item.name.valueOf()}
              </Link>
            ))}
          </div>
          <button
            ref={buttonRef}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className={"md:hidden px-4 py-2 space-y-4 bg-gray-900/90 text-white"}
        >
          {navItems.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="block transition-colors"
            >
              {item.name.valueOf()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
