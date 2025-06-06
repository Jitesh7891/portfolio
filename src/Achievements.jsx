import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  // Animation effect for the continuous glow
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGlowIntensity(prev => (prev + 0.02) % 1);
    }, 50);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Calculate dynamic glow based on the animation cycle
  const getGlowStyle = (index) => {
    // Phase shift for each card to create a wave effect
    const phaseShift = index * 0.2;
    const adjustedIntensity = (glowIntensity + phaseShift) % 1;
    
    // Calculate glow opacity based on a sine wave
    const opacity = 0.4 + Math.sin(adjustedIntensity * Math.PI * 2) * 0.2;
    const spread = 5 + Math.sin(adjustedIntensity * Math.PI * 2) * 1;
    
    return {
      boxShadow: `0 0 ${spread}px ${spread}px rgba(59, 130, 246, ${opacity})`,
      transition: 'all 0.5s ease'
    };
  };
  
  // Achievement data
  const achievements = [
    {
      icon: "LC",
      title: "LeetCode Knight",
      description: "Attained a rating of 1850+ and earned the Knight badge on LeetCode, ranking in the top 5%"
    },
    {
      icon: "CF",
      title: "Codeforces Specialist",
      description: "Achieved a rating of 1600+ (Expert) on Codeforces, showcasing growth in algorithmic skills"
    },
    {
      icon: "CC",
      title: "CodeChef 4 Stars",
      description: "Reached a rating of 1800+ (4 stars) on CodeChef, demonstrating proficiency in competitive programming"
    },
    {
      icon: "#70",
      title: "Global Rank in CodeChef Contest",
      description: "Secured global rank 70 in Starters 166 Contest, CodeChef among thousands of participants"
    },
    {
      icon: "DSA",
      title: "Problem-Solving Expertise",
      description: "Solved over 900 DSA problems on LeetCode and a total of 1500+ problems on various coding platforms",
      fullWidth: true
    }
  ];
  
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-mycolor relative">
          <span className="relative z-10">Achievements</span>
          <span className={`absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-indigo-700/30 blur-lg rounded-lg transform scale-110 -z-10`}></span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-900 p-6 rounded-lg ${achievement.fullWidth ? 'md:col-span-2' : ''}`}
              style={getGlowStyle(index)}
            >
              <div className="relative z-10 flex">
                <div className="bg-indigo-700 h-16 w-16 rounded-lg flex items-center justify-center text-white text-xl font-bold mr-4 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;