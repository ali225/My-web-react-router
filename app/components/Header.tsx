import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-slate-950/90 shadow z-50 backdrop-blur" aria-label="Main Navigation">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfolio
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive(link.path)
                  ? 'text-blue-500 font-semibold border-b-2 border-blue-500'
                  : 'text-slate-100'
              }`}
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          id="nav-toggle"
          className="md:hidden text-2xl text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Open navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`md:hidden flex-col gap-4 bg-slate-950 px-6 pb-4 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive(link.path)
                ? 'text-blue-500 font-semibold border-b-2 border-blue-500'
                : 'text-slate-100'
            }`}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 