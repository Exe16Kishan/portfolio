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
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 relative">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      >
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
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
      </div>
    </main>
  );
}