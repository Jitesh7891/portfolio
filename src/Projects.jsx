import React from 'react';
import { FaGithub, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Visionera",
      description: "AI-powered SaaS platform for intelligent image transformation and search using Cloudinary AI and Google tagging.",
      tech: ['Next.js', 'TypeScript', 'Cloudinary AI', 'Stripe', 'Clerk', 'TailwindCSS', 'MongoDB'],
      points: [
        "Built dynamic SaaS platform with secure Clerk auth and Stripe webhooks for seamless payments",
        "Reduced backend load by 30% through input debouncing and optimized API call handling",
        "Boosted data fetching speed by 25% with cached MongoDB connections and server-side pagination"
      ],
      githubLink: "https://github.com/Jitesh7891/visionera",
      liveLink: "https://visionera.vercel.app",
      gradient: "from-mycolor-900 to-mycolor-800"
    },

    {
      title: "ChicCart",
      description: "E-commerce store with responsive layouts, optimized performance, and integrated Stripe payments.",
      tech: ['React', 'Firebase', 'Express.js', 'Node.js', 'Stripe', 'TailwindCSS'],
      points: [
        "Enhanced responsiveness with interactive layouts and improved performance by 25%",
        "Integrated Stripe Payments, enabled secure transactions, indigouced checkout time by 30%",
        "Leveraged Firebase to optimize data fetching speed, indigouced load times by 20%"
      ],
      githubLink: "https://github.com/Jitesh7891/chiccart",
      liveLink: "https://chiccart.onrender.com",
      gradient: "from-mycolor-900 to-mycolor-800"
    },
    {
      title: "SocialTea",
      description: "Social media platform with user authentication, customizable profiles, features like post sharing,likes, and real-time chat.",
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'socket.io', 'JWT'],
      points: [
        "Developed a Social Media App with immersive UI design and real-time chat with socket.io",
        "Enacted lazy loading and advanced optimization techniques to improve performance by 20%",
        "Implemented secure user authentication, using JWT and bcrypt.js for password hashing"
      ],
      githubLink: "https://github.com/Jitesh7891/socialtea",
      liveLink: "https://socialtea.onrender.com",
      gradient: "from-mycolor-800 to-mycolor-900"
    },
    {
      title: "CryptoVerse",
      description: "Cryptocurrency platform providing comprehensive information on top 100 cryptocurrencies.",
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Chart.js'],
      points: [
        "Created a hub for cryptocurrency aficionados with information on top 100 cryptocurrencies",
        "Utilized Chart.js to visualize cryptocurrency price changes over various time periods",
        "Integrated Cryptocurrency API for real-time data and market information"
      ],

      githubLink: "https://github.com/Jitesh7891/cryptoverse",
      liveLink: "https://cryptoverse-0ai7.onrender.com/",
      gradient: "from-mycolor-800 to-mycolor-900"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">Academic Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group perspective-1000 relative hover:z-10"
            >
              {/* Card container with 3D effect */}
              <div className="relative preserve-3d duration-500 group-hover:rotate-y-10 group-hover:rotate-x-10 group-hover:scale-105">
                {/* Card content */}
                <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 relative shadow-mycolor-900/10 group-hover:shadow-none">
                  {/* Header gradient */}
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    {/* Dynamic particles on hover (decorative) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-mycolor-200 animate-ping opacity-75"></div>
                      <div className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-mycolor-300 animate-ping opacity-50 animation-delay-300"></div>
                      <div className="absolute top-2/4 left-1/2 w-2 h-2 rounded-full bg-mycolor-100 animate-ping opacity-75 animation-delay-700"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white relative z-10 transform transition-transform duration-500 group-hover:scale-110">{project.title}</h3>
                  </div>

                  <div className="p-6">
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-mycolor-500 px-2 py-1 rounded text-xs transform transition-all duration-300 group-hover:bg-gray-600 group-hover:text-mycolor-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 text-sm">
                      {project.points.map((point, i) => (
                        <li key={i} className="transition-all duration-300 group-hover:translate-x-1 opacity-90 group-hover:opacity-100">{point}</li>
                      ))}
                    </ul>

                    <div className="flex space-x-4">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mycolor hover:text-mycolor-500 transition-colors flex items-center relative overflow-hidden group-hover:font-medium"
                        >
                          <FaGithub className="mr-1" />
                          <span>GitHub</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mycolor-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      )}

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mycolor hover:text-mycolor-500 transition-colors flex items-center relative overflow-hidden group-hover:font-medium"
                        >
                          <FaCode className="mr-1" />
                          <span>Live Demo</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mycolor-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;