import { Award, X } from 'lucide-react';
import { useState } from 'react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "December 2024",
      image: "/nptel.png"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "December 2024",
      image: "/webdev.png"
    }
  ];
  
  const courses = [
    {
      title: "Generative AI",
      platform: "Coursera",
      date: "April 2024",
      image: "/gen.png"
    },
    {
      title: "Data Structures and Algorithms",
      platform: "Coursera",
      date: "February 2023",
      image: "/dsa.png"
    },
  ];

  const openModal = (imageUrl:any) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <section id="certifications" className="py-16 px-5 bg-gray-800/50">
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
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => cert.image && openModal(cert.image)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {cert.image && (
                        <div className="flex-shrink-0">
                          <img 
                            src={cert.image} 
                            alt={`${cert.title} certificate`} 
                            className="w-full md:w-32 h-20 object-cover rounded"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                        <p className="text-gray-400">{cert.issuer}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-500 text-sm">{cert.date}</span>
                          {cert.image && (
                            <span className="text-indigo-400 text-sm">Click to view</span>
                          )}
                        </div>
                      </div>
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
                  <div 
                    key={index} 
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => course.image && openModal(course.image)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {course.image && (
                        <div className="flex-shrink-0">
                          <img 
                            src={course.image} 
                            alt={`${course.title} course`} 
                            className="w-full md:w-32 h-20 object-cover rounded"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <h4 className="font-semibold text-lg">{course.title}</h4>
                        <p className="text-gray-400">{course.platform}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-500 text-sm">{course.date}</span>
                          {course.image && (
                            <span className="text-indigo-400 text-sm">Click to view</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-indigo-300 focus:outline-none"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <div className="bg-gray-900 p-4 rounded-lg">
              <img 
                src={selectedImage} 
                alt="Certificate full view" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}