import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-lg font-medium text-indigo-400">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Kishan Kumar</span>
            <span className="text-indigo-400 block mt-2">Software Developer</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            A passionate software developer specialized in web development with a keen interest in building 
            innovative solutions that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors border border-gray-700"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="w-64 h-64 lg:w-80 lg:h-80 relative mx-auto">
            <div className="absolute inset-0 rounded-full bg-indigo-600/20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              {/* Replace with your actual image */}
              <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-500">
                <img src="/github.jpg" alt="kishan"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-indigo-400" />
      </a>
    </section>
  );
}