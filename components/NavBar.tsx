"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      
      {/* Main Navbar Capsule */}
      <nav className="flex items-center justify-between bg-white/0 backdrop-blur-lg shadow-lg rounded-full px-6 py-3 w-full max-w-4xl border border-white/50 relative z-50">
        
        {/* Logo */}
        <div className="text-lg font-medium tracking-tight text-gray-900">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Kabillan T A 
          </Link>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 text-sm font-medium transition-all rounded-full ${
                  isActive
                    ? "bg-gray-300 text-gray-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-4 flex justify-center">
            <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-4 flex flex-col gap-2 transition-all animate-in fade-in slide-in-from-top-5">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 text-sm font-medium transition-all rounded-xl ${
                        isActive
                            ? "bg-gray-100 text-gray-900" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                        {item.name}
                    </Link>
                    );
                })}
            </div>
        </div>
      )}
    </div>
  );
}