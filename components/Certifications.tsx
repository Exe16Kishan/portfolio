import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "December 2024",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2024",
    }
  ];

  const courses = [
    {
      title: "Advanced React",
      platform: "Frontend Masters",
      date: "April 2024"
    },
    {
      title: "Data Structures and Algorithms",
      platform: "Coursera",
      date: "February 2023"
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Certifications & Courses</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 text-indigo-400" size={24} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg">{cert.title}</h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 text-indigo-400" size={24} />
              Courses
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg">{course.title}</h4>
                  <p className="text-gray-400">{course.platform}</p>
                  <p className="text-gray-500 text-sm mt-2">{course.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
