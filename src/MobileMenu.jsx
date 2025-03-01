import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };
  
  // Close menu when clicking a link
  const handleLinkClick = (sectionId) => {
    document.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <>
      {/* Header with hamburger menu */}
      <header className={`fixed top-1 w-full z-40 transition-all duration-300 shadow-lg`}>
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">

            
            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-mycolor transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
        
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-60 transform transition-transform duration-300 ease-in-out h-[100vh] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        {/* Menu content with animation */}
        <div className="flex flex-col h-full">
          {/* Top spacing */}
          <div className="h-20"></div>
          
          {/* Navigation links */}
          <nav className="flex flex-col items-center justify-center flex-grow py-8">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xl py-4 text-white hover:text-mycolor transition-all relative overflow-hidden group
                           ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 400ms ease, transform 300ms ease, color 200ms ease'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mycolor-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          

          
          {/* Bottom glowing border */}
          <div className={`w-full h-0.5 bg-gradient-to-r from-mycolor-700 via-mycolor-500 to-mycolor-700 opacity-0 transition-opacity duration-1000 ${isOpen ? 'opacity-80' : ''}`}></div>
        </div>
      </div>
      
      {/* Fixed floating menu button moved to top instead of bottom */}
      <button 
        className={`md:hidden fixed top-2 right-3 bg-mycolor-700 text-white p-3 rounded-full shadow-lg z-30 transform transition-all duration-300 ${
          !isOpen ? 'translate-y-0 opacity-100' : 'translate-y-(-16) opacity-0'
        }`}
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <FaBars className="h-5 w-5" />
      </button>
    </>
  );
};

export default MobileMenu;
