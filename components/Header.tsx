"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume.pdf', download: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link 
            href="#home" 
            className="text-2xl font-bold text-indigo-400 tracking-tight hover:text-indigo-300 transition-colors"
          >
            Portfolio<span className="text-emerald-400">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                download={item.download}
                className={`text-sm font-medium hover:text-indigo-400 transition-colors ${
                  item.download ? 'bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg rounded-b-lg mx-4 mt-2">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                download={item.download}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-sm hover:bg-gray-700 ${
                  item.download ? 'text-indigo-400 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
