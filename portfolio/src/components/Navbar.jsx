import React from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg z-100 shadow-lg py-7 px-0">
    <div className="flex justify-between items-center w-full px-8">
      <div className="text-2xl font-extrabold bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent select-none">
        Devang Singh
      </div>
      <ul className="hidden md:flex gap-12 list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} className="text-white/80 font-medium hover:text-white transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar; 