import React from 'react';

const Skills = () => {
  const categories = [
    {
      name: "Languages",
      skills: ["JavaScript", "C++", "C", "Python", "HTML", "CSS", "TypeScript"],
      color: "#e965f5"
    },
    {
      name: "Frameworks",
      skills: ["React", "Next", "Express", "Node"],
      color: "#FFEB3B"
    },
    {
      name: "Others",
      skills: ["Linux", "Docker", "MongoDB", "SQL", "Git", "GitHub", "VS Code", "Firebase", "Bootstrap", "Tailwind CSS"],
      color: "#68D391"
    }
  ];

  return (
    <section id="skills" className="w-full bg-gray-900 min-h-screen py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">Skills</h2>
      
      {categories.map((category, index) => (
        <div key={index} className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: category.color }}>{category.name}</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {category.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex flex-col items-center"
              >
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 p-4"
                  style={{ borderColor: category.color }}
                >
                  {/* Replace with actual image */}
                  <div className="text-gray-200 text-xs text-center h-full w-full">
                  <img 
                    src={`/images/${skill.toLowerCase()}.svg`} 
                    alt={`${skill} logo`}
                    className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>
                <span className="mt-2 text-gray-200 text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;