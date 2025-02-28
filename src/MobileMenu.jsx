import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
  
  // Social links
  const socialLinks = [
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" }
  ];
  
  return (
    <>
      {/* Header with hamburger menu */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <a href="#" className="text-2xl font-bold text-mycolor">
              Dev<span className="text-white">Portfolio</span>
            </a>
            
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
            
            {/* Mobile menu toggle button - clearly visible on mobile */}
            <button 
              className="md:hidden flex items-center justify-center text-white bg-red-800 hover:bg-red-700 p-2 rounded-md transition-colors focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? 
                <FaTimes className="h-5 w-5 text-white" /> : 
                <FaBars className="h-5 w-5 text-white" />
              }
              <span className="ml-2 text-sm font-medium">{isOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 py-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-white hover:text-mycolor text-2xl transition-all
                          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{ 
                  transitionDelay: isOpen ? `${(navItems.length + index) * 75}ms` : '0ms',
                  transition: 'all 400ms ease'
                }}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Bottom glowing border */}
          <div className={`w-full h-0.5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 opacity-0 transition-opacity duration-1000 ${isOpen ? 'opacity-80' : ''}`}></div>
        </div>
      </div>
      
      {/* Fixed floating menu button moved to top instead of bottom */}
      <button 
        className={`md:hidden fixed top-6 right-6 bg-red-700 text-white p-3 rounded-full shadow-lg z-30 transform transition-all duration-300 ${
          scrolled && !isOpen ? 'translate-y-0 opacity-100' : 'translate-y-(-16) opacity-0'
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