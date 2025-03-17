import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileAlt, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import Skills from './Skills';
import Achievements from './Achievements';
import Projects from './Projects';
import MobileMenu from './MobileMenu';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger hero animation after component mount
    setAnimateHero(true);

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

    // Animate elements when they come into view
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };

    window.addEventListener('scroll', handleScroll);
    observeElements();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900  bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzExMTgyNyI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgNDRsLTQwIDQwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFmMjkzNyIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNNTYgNDRsLTQwIDQwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFmMjkzNyIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNMTYgNDRsNDAgNDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMWYyOTM3IiBmaWxsPSJub25lIj48L3BhdGg+CjxwYXRoIGQ9Ik0tNCA0NGw0MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTM2IDI0bC00MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTU2IDI0bC00MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTE2IDI0bDQwIDQwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFmMjkzNyIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNLTQgMjRsNDAgNDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMWYyOTM3IiBmaWxsPSJub25lIj48L3BhdGg+CjxwYXRoIGQ9Ik0zNiA0bC00MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTU2IDRsLTQwIDQwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFmMjkzNyIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNMTYgNGw0MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTS00IDRsNDAgNDAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMWYyOTM3IiBmaWxsPSJub25lIj48L3BhdGg+CjxwYXRoIGQ9Ik0zNiAtMTZsLTQwIDQwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFmMjkzNyIgZmlsbD0ibm9uZSI+PC9wYXRoPgo8cGF0aCBkPSJNNTYgLTE2bC00MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTTE2IC0xNmw0MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPHBhdGggZD0iTS00IC0xNmw0MCA0MCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZjI5MzciIGZpbGw9Im5vbmUiPjwvcGF0aD4KPC9zdmc+')] min-h-screen font-sans text-gray-200">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-dark-light bg-opacity-95 backdrop-blur-sm shadow-md z-50 shadow-mycolor-900/10 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="font-bold text-xl text-mycolor">Jitesh Shewaramani</div>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`font-medium hover:text-mycolor transition-colors duration-300 relative ${
                  activeSection === section ? 'text-mycolor' : 'text-gray-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mycolor rounded-full transform origin-left transition-transform duration-300"></span>
                )}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <MobileMenu/>
          </div>
        </div>
      </header>

      {/* Home/Hero Section */}
      <section id="home" className={`pt-32 pb-16 bg-gradient-to-r from-mycolor-700 via-secondary to-mycolor-900 text-white relative overflow-hidden ${animateHero ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Abstract animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary-light opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className={`text-5xl font-bold mb-4 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
            Jitesh Shewaramani
          </h1>
          <h2 className={`text-2xl font-medium mb-8 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-300`}>
            Full-Stack Developer & Competitive Programmer
          </h2>
          <div className={`flex justify-center space-x-4 mb-12 transform ${animateHero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-500`}>
            <a href="https://www.github.com/Jitesh7891" target="_blank" rel="noopener noreferrer" className="bg-dark-lighter text-mycolor p-3 rounded-full hover:bg-dark-light transition-colors duration-300 hover:scale-110 transform">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/jitesh-shewaramani-2b9391257" target="_blank" rel="noopener noreferrer" className="bg-dark-lighter text-mycolor p-3 rounded-full hover:bg-dark-light transition-colors duration-300 hover:scale-110 transform">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://www.leetcode.com/Jitesh5431/" target="_blank" rel="noopener noreferrer" className="bg-dark-lighter text-mycolor p-3 rounded-full hover:bg-dark-light transition-colors duration-300 hover:scale-110 transform">
              <SiLeetcode className="text-xl" />
            </a>
            <a href="https://www.codechef.com/users/jitesh67" target="_blank" rel="noopener noreferrer" className="bg-dark-lighter text-mycolor p-3 rounded-full hover:bg-dark-light transition-colors duration-300 hover:scale-110 transform">
              <SiCodechef className="text-xl" />
            </a>
            <a href="https://codeforces.com/profile/jitesh66" target="_blank" rel="noopener noreferrer" className="bg-dark-lighter text-mycolor p-3 rounded-full hover:bg-dark-light transition-colors duration-300 hover:scale-110 transform">
              <SiCodeforces className="text-xl" />
            </a>
          </div>
          <a 
            href="#about" 
            className={`inline-block bg-mycolor text-white font-medium py-3 px-8 rounded-md shadow-lg hover:bg-mycolor-600`}
          >
            Learn More About Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-light relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzAgbDMwIC0zMCBNMzAgMzAgbC0zMCAzMCBNMzAgMzAgbDMwIDMwIE0zMCAzMCBsLTMwIC0zMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 lg:w-1/3 animate-on-scroll opacity-0 transform -translate-x-6 transition-all duration-700">
              <div className="bg-mycolor rounded-full w-64 h-64 mx-auto overflow-hidden shadow-lg shadow-mycolor-600/20 group transition-all duration-500 hover:shadow-mycolor-500/30 hover:scale-105 transform">
                <img src="/images/me.jpeg" alt="Jitesh Shewaramani" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 animate-on-scroll opacity-0 transform translate-x-6 transition-all duration-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">IT Engineering Student & Full-Stack Developer</h3>
              <p className="text-gray-300 mb-4">
                I'm a B.Tech student in Information Technology at Indian Institute of Information Technology, Bhopal with a passion for Full-Stack development and competitive programming. I enjoy building responsive, user-friendly Full-Stack applications and solving algorithmic challenges.
              </p>
              <p className="text-gray-300 mb-6">
                With a strong foundation in modern Full-Stack technologies and data structures & algorithms, I'm constantly looking to learn and grow as a developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-dark-lighter py-2 px-4 rounded-md transition-all duration-300 hover:bg-mycolor-900/20 hover:shadow-md">
                  <span className="font-medium text-mycolor">Email:</span> jiteshshewaramani3@gmail.com
                </div>
                <div className="bg-dark-lighter py-2 px-4 rounded-md transition-all duration-300 hover:bg-mycolor-900/20 hover:shadow-md">
                  <span className="font-medium text-mycolor">Phone:</span> +91 7223932733
                </div>
                <div className="bg-dark-lighter py-2 px-4 rounded-md transition-all duration-300 hover:bg-mycolor-900/20 hover:shadow-md">
                  <span className="font-medium text-mycolor">Education:</span> B.Tech IT (2022-2026)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills/>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-dark-light relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjQiPjwvY2lyY2xlPgo8L3N2Zz4=')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-mycolor animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-mycolor transform -translate-x-1/2 animate-pulse"></div>
              <div className="bg-dark p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 mb-12 shadow-mycolor-900/10 hover:shadow-mycolor-800/20 hover:translate-y-1 transform">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-mycolor">Co-Coordinator</h3>
                  <span className="bg-mycolor-900/30 text-mycolor-300 text-sm px-3 py-1 rounded-md">Sep 2024 - Present</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-4">Axios, IIIT BHOPAL</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Spearheaded 5+ programming events, fostering stronger developer culture and increasing engagement by 300%</li>
                </ul>
              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-mycolor animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700 delay-300">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-mycolor transform -translate-x-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="bg-dark p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 mb-12 shadow-mycolor-900/10 hover:shadow-mycolor-800/20 hover:translate-y-1 transform">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-mycolor">Full-Stack Developer</h3>
                  <span className="bg-mycolor-900/30 text-mycolor-300 text-sm px-3 py-1 rounded-md">Sep 2023 - Sep 2024</span>
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects/>

      {/* Achievements */}
      <Achievements/>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwIEw2MCA2MCBNMCA2MCBMNjAgMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-mycolor animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">Contact Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-dark-light p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 text-center shadow-mycolor-900/10 hover:shadow-mycolor-800/20 animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700 hover:-translate-y-2">
              <div className="w-16 h-16 bg-mycolor/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-mycolor/30">
                <FaEnvelope className="text-2xl text-mycolor" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">jiteshshewaramani3@gmail.com</p>
            </div>
            <div className="bg-dark-light p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 text-center shadow-mycolor-900/10 hover:shadow-mycolor-800/20 animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700 delay-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-mycolor/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-mycolor/30">
                <FaPhone className="text-2xl text-mycolor" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-300">+91 7223932733</p>
            </div>
            <div className="bg-dark-light p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 text-center shadow-mycolor-900/10 hover:shadow-mycolor-800/20 animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700 delay-400 hover:-translate-y-2">
              <div className="w-16 h-16 bg-mycolor/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-mycolor/30">
                <FaFileAlt className="text-2xl text-mycolor" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Resume</h3>
              <a href="https://drive.google.com/file/d/1IDwYMN1tTFXxaph3OICtZg2uzi2zureC/view?usp=drive_link" target="_blank" className="text-mycolor hover:text-mycolor-light transition-colors duration-300">Link</a>
            </div>
          </div>
        </div> 
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 relative">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+CjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwIEw0OCAwIEw0OCA0OCBMMCAwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjAyIj48L3BhdGg+CjwvdmFo+')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="border-t border-dark-lighter mt-8 pt-8 text-center text-gray-500">
            <p className="animate-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">&copy; 2025 Jitesh Shewaramani. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="z-50 fixed right-4 bottom-4 bg-mycolor text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-mycolor-dark animate-bounce hover:animate-none"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
      
      {/* Custom cursor effects - add to CSS in a separate file */}
      <style jsx>{`
        /* For the animation classes */
        .animate-on-scroll {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        
        /* Gradient animation */
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Apply to section backgrounds with gradients */
        #home {
          background-size: 200% 200%;
          animation: gradientAnimation 15s ease infinite;
        }
      `}</style>
    </div>
  );
};