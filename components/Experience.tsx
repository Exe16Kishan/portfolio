import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
  {
    title: "Full Stack Developer",
    company: "BrandTangent",
    period: "May 2025 - Present",
    location: "Remote, India",
    description: [
      "Architected and deployed 10+ production-grade enterprise features using Next.js, Node.js, and PostgreSQL",
      "Optimized high-traffic REST APIs handling 10K+ requests/day, reducing latency by 40% and increasing throughput by 25%",
      "Refactored monolithic backend into a microservices architecture, improving system reliability by 35%",
      "Implemented Redis caching strategy that reduced database queries by 60% and improved API response time"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "SkillBridge",
    period: "Nov 2024 - Apr 2025",
    location: "Remote, India",
    description: [
      "Engineered 20+ reusable React components with TypeScript, reducing frontend development time by 30%",
      "Optimized 15+ backend endpoints through query tuning and database indexing, improving response time by 45%",
      "Scaled infrastructure to support 2,000+ concurrent users, increasing daily active engagement by 60%",
      "Enhanced SSR implementation and caching strategy to achieve sub-1.2 second page load times"
    ]
  }
]


  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Experience</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700 hidden md:block"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 bg-indigo-600 rounded-full items-center justify-center md:flex hidden ">
                    <Briefcase size={16} className="text-white" />
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex items-center text-indigo-400 text-sm mt-2 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                    <p className="text-gray-400 mb-4">{exp.location}</p>
                    
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
