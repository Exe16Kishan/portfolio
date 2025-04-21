"use client";
import { useState, useEffect } from 'react';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Competitive from '@/components/Competitive';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Competitive />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
