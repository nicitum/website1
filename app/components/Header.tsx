"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Products", href: "products" },
  { name: "Services", href: "services" },
  { name: "Process", href: "process" },
  { name: "Contact", href: "contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Hide header when scrolling down
      } else {
        setShowHeader(true); // Show header when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      setIsOpen(false); // Close mobile menu first
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Small delay for smooth UX
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-100 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#003366]">
            Nicitum
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`} // Ensure it redirects correctly
                className="text-sm uppercase tracking-wider text-[#003366] hover:text-[#004488] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#003366]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.href)}
                className="block py-2 px-4 text-sm uppercase tracking-wider text-[#003366] hover:bg-[#003366] hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
