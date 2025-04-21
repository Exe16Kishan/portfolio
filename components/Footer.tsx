import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Exe16Kishan' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/kishan-kumar-190785252/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/its_executioner' },
  ];

  return (
    <footer className="bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-indigo-400">
              Portfolio<span className="text-emerald-400">.</span>
            </Link>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}