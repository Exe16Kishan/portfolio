import { Trophy, Code } from 'lucide-react';

export default function Competitive() {
  const competitions = [
    {
      type: "Hackathon",
      name: "WebKaHackathon",
      date: "September 2024",
      description: "Developed a platform for booking event tickets."
    },
    {
      type: "Hackathon",
      name: "Gen AI Exchange Hackathon",
      date: "October 2024",
      description: "Created a Copilate using Gemini API"
    }
  ];

  const programmingProfiles = [
    {
      platform: "LeetCode",
      username: "_it_s_Kishan",
      stats: "20+ problems solved",
      link: "https://leetcode.com/u/_it_s_Kishan/"
    },
    {
      platform: "Codeforces",
      username: "Executionar_",
      stats: "Newbie (720+ rating)",
      link: "https://codeforces.com/profile/Executionar_"
    }
  ];

  return (
    <section id="competitive" className="py-16 px-5 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Competitive Programming & Hackathons</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-10"></div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Trophy className="mr-2 text-indigo-400" size={24} />
              Competitions
            </h3>
            <div className="space-y-4">
              {competitions.map((competition, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-indigo-600/20 text-indigo-400 text-xs px-2 py-1 rounded mb-2">
                        {competition.type}
                      </span>
                      <h4 className="font-semibold text-lg">{competition.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">{competition.description}</p>
                  <p className="text-gray-500 text-sm mt-2">{competition.date}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code className="mr-2 text-indigo-400" size={24} />
              Coding Profiles
            </h3>
            <div className="space-y-4">
              {programmingProfiles.map((profile, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg">{profile.platform}</h4>
                  <p className="text-gray-400">@{profile.username}</p>
                  <p className="text-gray-300 my-2">{profile.stats}</p>
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 text-sm inline-block mt-1"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}