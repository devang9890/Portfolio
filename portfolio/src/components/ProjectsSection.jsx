import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: '🚀',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    icon: '📱',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.',
    tags: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    icon: '🎨',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with stunning animations and interactive elements built with vanilla JavaScript and GSAP.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI Chat Interface',
    description: 'An intelligent chat interface with natural language processing, real-time responses, and conversation history management.',
    tags: ['React', 'Python', 'OpenAI', 'WebSocket'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="glass-card overflow-hidden"
            >
              <div className="h-40 flex items-center justify-center text-5xl bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4ecdc4]">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-[#ff6b6b]/20 text-[#ff6b6b] px-3 py-1 rounded-full text-xs border border-[#ff6b6b]/30">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.map(link => (
                    <a key={link.label} href={link.href} className="text-[#4ecdc4] font-medium hover:text-[#ff6b6b] transition" target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 