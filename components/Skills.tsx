export default function Skills() {
    const skillCategories = [
      {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
      },
      {
        category: "Frontend Development",
        skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
      },
      {
        category: "Backend Development",
        skills: ["Node.js", "Express", "Django"]
      },
      {
        category: "Database",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
      },
      {
        category: "DevOps & Tools",
        skills: ["Git", "Docker", "CI/CD", "Agile Methodologies"]
      }
    ];
  
    return (
      <section id="skills" className="py-16 px-5 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }