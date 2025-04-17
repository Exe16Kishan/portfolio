"use client"
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, BookOpen, Download, Calendar, Award, ChevronRight, MessageSquare, X, Menu } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description: "Scalable e-commerce solution with advanced analytics and multi-currency support.",
      tech: "Next.js, MongoDB, Stripe, Redux",
      link: "#",
      category: "fullstack",
      featured: true
    },
    {
      title: "Travel Journal Application",
      description: "Mobile-first app with offline functionality and social sharing capabilities.",
      tech: "React Native, Firebase, Google Maps API",
      link: "#",
      category: "mobile"
    },
    {
      title: "AI Content Generator",
      description: "NLP-powered tool for creating SEO-optimized marketing materials.",
      tech: "Python, TensorFlow, FastAPI, React",
      link: "#",
      category: "ai",
      featured: true
    },
    {
      title: "Financial Dashboard",
      description: "Real-time visualization platform for stock market data and portfolio management.",
      tech: "Vue.js, D3.js, Node.js, PostgreSQL",
      link: "#",
      category: "frontend"
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant platform for patient records and appointment scheduling.",
      tech: "Angular, Express, MongoDB, Socket.io",
      link: "#",
      category: "fullstack"
    },
    {
      title: "Smart Home IoT Hub",
      description: "Central control system for connected home devices with automation rules.",
      tech: "React, Node.js, MQTT, WebSockets",
      link: "#",
      category: "iot"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Vue.js", "Angular"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "GraphQL", "Java Spring"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL", "Elasticsearch"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Monitoring"] },
    { category: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Design Systems"] },
    { category: "Testing", items: ["Jest", "Cypress", "RTL", "Mocha", "Selenium", "TDD"] }
  ];

  const experience = [
    {
      company: "TechGlobal Solutions",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led development of enterprise SaaS applications. Implemented performance optimizations resulting in 40% faster page loads."
    },
    {
      company: "DataViz Systems",
      position: "Full Stack Developer",
      period: "2019 - 2022",
      description: "Architected and built data visualization tools used by Fortune 500 clients. Mentored junior developers and established code standards."
    },
    {
      company: "MobileFirst Agency",
      position: "Frontend Developer",
      period: "2017 - 2019",
      description: "Developed responsive web applications and PWAs. Collaborated closely with design team to implement pixel-perfect UIs."
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google Professional Cloud Developer", issuer: "Google Cloud", year: "2022" },
    { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", year: "2021" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const filterProjects = (category:any) => {
    setActiveTab(category);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-400">Alex Chen <span className="hidden md:inline text-gray-400 font-normal">| Full Stack Developer</span></div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
            <button className="md:hidden text-gray-400" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4 px-6 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="hover:text-indigo-400 transition" onClick={toggleMobileMenu}>About</a>
              <a href="#experience" className="hover:text-indigo-400 transition" onClick={toggleMobileMenu}>Experience</a>
              <a href="#skills" className="hover:text-indigo-400 transition" onClick={toggleMobileMenu}>Skills</a>
              <a href="#projects" className="hover:text-indigo-400 transition" onClick={toggleMobileMenu}>Projects</a>
              <a href="#contact" className="hover:text-indigo-400 transition" onClick={toggleMobileMenu}>Contact</a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 flex flex-col items-start">
            <div className="bg-indigo-900 bg-opacity-30 px-4 py-2 rounded-full text-indigo-300 text-sm font-medium mb-6">
              Available for new opportunities
            </div>
            <h1 className="text-5xl font-bold mb-4">Alex Chen</h1>
            <h2 className="text-3xl mb-6 text-indigo-300">Full Stack Developer & System Architect</h2>
            <p className="text-lg mb-8 text-gray-300 max-w-xl">
              I specialize in building high-performance web applications and scalable system architectures that deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition font-medium flex items-center">
                <MessageSquare size={18} className="mr-2" /> Get in Touch
              </a>
              <a href="#" className="px-6 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-900 hover:bg-opacity-30 rounded-md transition font-medium flex items-center">
                <Download size={18} className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-indigo-600 bg-opacity-10 border-2 border-indigo-500 border-opacity-30 flex items-center justify-center shadow-lg shadow-indigo-900/20">
              <User size={100} className="text-indigo-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <User className="text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  With over 8 years of experience in software development, I specialize in building scalable web applications and distributed systems 
                  that solve complex business problems. My expertise spans the entire development lifecycle from concept to deployment.
                </p>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  I hold a Master's degree in Computer Science from Stanford University and have worked with clients ranging from early-stage 
                  startups to Fortune 500 companies across healthcare, fintech, and e-commerce sectors.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-indigo-300">My Approach</h3>
                  <p className="text-gray-300">
                    I believe in writing clean, maintainable code with a focus on performance and security. My development philosophy 
                    combines technical excellence with user-centered design thinking.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-gray-400">San Francisco, CA</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="font-semibold mb-1">Languages</div>
                    <div className="text-gray-400">English, Mandarin</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="font-semibold mb-1">Availability</div>
                    <div className="text-gray-400">Full-time, Contract</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="font-semibold mb-1">Remote</div>
                    <div className="text-gray-400">Yes, Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Calendar className="text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-300">{job.position}</h3>
                    <h4 className="text-lg text-gray-300">{job.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 bg-gray-800 py-1 px-4 rounded-full text-sm text-gray-300">
                    {job.period}
                  </div>
                </div>
                <p className="text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-8">
              <Award className="text-indigo-400 mr-4" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-300 mb-1">{cert.name}</h4>
                  <div className="text-sm text-gray-400">{cert.issuer} • {cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Code className="text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div className="flex items-center mb-4 md:mb-0">
              <Briefcase className="text-indigo-400 mr-4" />
              <h2 className="text-3xl font-bold">Portfolio Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => filterProjects('all')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => filterProjects('frontend')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                Frontend
              </button>
              <button 
                onClick={() => filterProjects('fullstack')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'fullstack' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                Full Stack
              </button>
              <button 
                onClick={() => filterProjects('mobile')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                Mobile
              </button>
              <button 
                onClick={() => filterProjects('ai')} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                AI/ML
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 ${project.featured ? 'border border-indigo-500 border-opacity-30' : ''}`}
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                  <BookOpen size={64} className="text-indigo-400 opacity-50" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-indigo-600 text-xs font-medium py-1 px-2 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="bg-gray-800 rounded-md p-3 mb-4">
                    <p className="text-sm text-indigo-300">{project.tech}</p>
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
                    View Project <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - More Compact */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-10">
            <Mail className="text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>
          <div className="max-w-2xl mx-auto grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-indigo-400 mr-3" size={18} />
                  <a href="mailto:alex@example.com" className="text-gray-300 hover:text-indigo-300">alex@example.com</a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-indigo-400 mr-3" size={18} />
                  <a href="#" className="text-gray-300 hover:text-indigo-300">linkedin.com/in/alexchen</a>
                </div>
                <div className="flex items-center">
                  <Github className="text-indigo-400 mr-3" size={18} />
                  <a href="#" className="text-gray-300 hover:text-indigo-300">Github.com/alexchen-dev</a>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  Available for freelance projects and full-time positions. 
                  Currently based in San Francisco, CA.
                </p>
              </div>
            </div>
            <div className="md:col-span-3 bg-gray-800 p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <textarea rows={3} placeholder="Message" className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md transition font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Alex Chen. All rights reserved.
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mr-4">Built with Next.js & Tailwind CSS</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}