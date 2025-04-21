import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
          title: "Bookmark",
          description: "A streamlined web application built with Next.js and Node.js that helps users organize and access their favorite websites. Features include custom categorization, quick search, and secure user authentication to protect personal collections.",
          technologies: ["Next.js", "Node.js"],
          github: "https://github.com/Exe16Kishan/personal-Bookmark",
          live: "https://personal-bookmark-three.vercel.app/",
          image: "/project1.png"
        },
        {
          title: "Porsche Landing Page",
          description: "An elegant landing page showcasing Porsche's premium watch collection. The page features smooth animations and responsive design that adapts seamlessly across devices, highlighting the luxury aesthetic of the brand.",
          technologies: ["JavaScript"],
          github: "https://github.com/Exe16Kishan/Porsche_landing_Page",
          live: "https://porschelandingpage.vercel.app",
          image: "/project2.png"
        },
        {
          title: "Food Share",
          description: "A community-focused platform connecting restaurants and individuals with surplus food to people in need. Built with Next.js, Tailwind, and a PostgreSQL database, this mobile-responsive application simplifies the process of sharing excess food and reducing waste.",
          technologies: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
          github: "https://github.com/Exe16Kishan/foodWeb",
          live: "https://foodshare-two.vercel.app/",
          image: "/project3.png"
        }
      ]

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img src={project.image} alt="project" />
              </div>
              <div className="p-6 mt-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}