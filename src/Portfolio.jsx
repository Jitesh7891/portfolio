import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileAlt, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiCodechef , SiCodeforces } from "react-icons/si";
import Skills from './Skills';
import Achievements from './Achievements';
import Projects from './Projects';
import MobileMenu from './MobileMenu';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when scrolled down 300px
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-200">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-gray-800 shadow-md z-50 shadow-red-900/20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="font-bold text-xl text-mycolor">Jitesh Shewaramani</div>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`font-medium hover:text-mycolor transition-colors ${
                  activeSection === section ? 'text-mycolor border-b-2 border-mycolor' : 'text-gray-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <MobileMenu/>
          </div>
        </div>
      </header>

      {/* Home/Hero Section */}
      <section id="home" className="pt-32 pb-16 bg-gradient-to-r from-red-900 via-violet-800 to-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Jitesh Shewaramani</h1>
          <h2 className="text-2xl font-medium mb-8">Web Developer & Competitive Programmer</h2>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://www.github.com/Jitesh7891" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-mycolor p-3 rounded-full hover:bg-gray-700 transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/jitesh-shewaramani-2b9391257" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-mycolor p-3 rounded-full hover:bg-gray-700 transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://www.leetcode.com/Jitesh5431/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-mycolor p-3 rounded-full hover:bg-gray-700 transition-colors">
              <SiLeetcode className="text-xl" />
            </a>
            <a href="https://www.codechef.com/users/jitesh67" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-mycolor p-3 rounded-full hover:bg-gray-700 transition-colors">
              <SiCodechef className="text-xl" />
            </a>
            <a href="https://codeforces.com/profile/jitesh66" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-mycolor p-3 rounded-full hover:bg-gray-700 transition-colors">
              <SiCodeforces className="text-xl" />
            </a>
          </div>
          <a href="#about" className="inline-block bg-red-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors shadow-red-500/50">Learn More About Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-red-700 rounded-full w-64 h-64 mx-auto overflow-hidden shadow-lg shadow-red-600/20">
                {/* Placeholder for profile image */}
                {/* <div className="h-full w-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white text-6xl font-bold">JS</div> */}
                <img src="/images/me.jpeg" alt="Jitesh Shewaramani" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">IT Engineering Student & Web Developer</h3>
              <p className="text-gray-300 mb-4">
                I'm a B.Tech student in Information Technology at Indian Institute of Information Technology, Bhopal with a passion for web development and competitive programming. I enjoy building responsive, user-friendly web applications and solving algorithmic challenges.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in modern web technologies and data structures & algorithms, I'm constantly looking to learn and grow as a developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700 py-2 px-4 rounded-full">
                  <span className="font-medium text-mycolor">Email:</span> jiteshshewaramani3@gmail.com
                </div>
                <div className="bg-gray-700 py-2 px-4 rounded-full">
                  <span className="font-medium text-mycolor">Phone:</span> +91 7223932733
                </div>
                <div className="bg-gray-700 py-2 px-4 rounded-full">
                  <span className="font-medium text-mycolor">Education:</span> B.Tech IT (2022-2026)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills/>
      {/* <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-red-900/10 hover:shadow-red-900/20">
              <h3 className="text-xl font-semibold mb-4 text-mycolor">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'C++', 'C', 'Python', 'HTML', 'CSS', 'TypeScript'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-red-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-red-900/10 hover:shadow-red-900/20">
              <h3 className="text-xl font-semibold mb-4 text-mycolor">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Express.js', 'Node.js', 'NestJS'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-red-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-red-900/10 hover:shadow-red-900/20">
              <h3 className="text-xl font-semibold mb-4 text-mycolor">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['Material-UI', 'Redux', 'React Router', 'Bootstrap', 'Tailwind CSS', 'React-Query'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-red-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-red-900/10 hover:shadow-red-900/20">
              <h3 className="text-xl font-semibold mb-4 text-mycolor">Others</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'SQL', 'Git', 'GitHub', 'VS Code', 'Firebase', 'JWT', 'socket.io'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-red-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-red-500">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-500 transform -translate-x-1/2"></div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12 shadow-red-900/10 hover:shadow-red-900/20">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-mycolor">Co-Coordinator</h3>
                  <span className="bg-red-900/50 text-red-500 text-sm px-3 py-1 rounded-full">Sep 2024 - Present</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Axios, IIIT BHOPAL</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Spearheaded 5+ programming events, fostering stronger developer culture and increasing engagement by 300%</li>
                </ul>
              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-red-500">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-500 transform -translate-x-1/2"></div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-12 shadow-red-900/10 hover:shadow-red-900/20">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-mycolor">Web Developer</h3>
                  <span className="bg-red-900/50 text-red-500 text-sm px-3 py-1 rounded-full">Sep 2023 - Sep 2024</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-4">CODAME, IIIT BHOPAL</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Strengthened engagement with lazy loading, caching and advanced optimizations to boost performance by 15%</li>
                  <li>Collaborated with 3 other team members to implement responsive designs and advanced optimization strategies</li>
                  <li>Engineered 5+ components utilizing 5+ React hooks to ensure smooth and engaging front-end experience</li>
                </ul>
                <div className="mt-4">
                  <span className="text-sm text-gray-400">Technologies: Next.js, JavaScript, TailwindCSS, Express.js</span>
                </div>
              </div>
            </div>
            {/* <div className="relative pl-8 border-l-2 border-red-500">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-500 transform -translate-x-1/2"></div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-red-900/10 hover:shadow-red-900/20">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-mycolor">Teaching Assistant</h3>
                  <span className="bg-red-900/50 text-red-500 text-sm px-3 py-1 rounded-full">Jul 2023 - Dec 2023</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Effective Communication and Soft Skills, IIIT Bhopal</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Aided the faculty in teaching, preparing course materials, and conducting assessments of 100+ students</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
     <Projects/>

     {/* Achievements */}
      <Achievements/>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor">Contact Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center shadow-red-900/10 hover:shadow-red-900/20">
              <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-2xl text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">jiteshshewaramani3@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center shadow-red-900/10 hover:shadow-red-900/20">
              <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-2xl text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-300">+91 7223932733</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center shadow-red-900/10 hover:shadow-red-900/20">
              <div className="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFileAlt className="text-2xl text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Resume</h3>
              <a href="https://drive.google.com/file/d/1IDwYMN1tTFXxaph3OICtZg2uzi2zureC/view?usp=drive_link" target="_blank" className="text-mycolor hover:text-red-500 transition-colors">Link</a>
            </div>
          </div>

          {/* <div className="max-w-2xl mx-auto mt-12 bg-gray-800 p-8 rounded-lg shadow-md shadow-red-900/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div> 
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Jitesh Shewaramani. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed right-4 bottom-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}