import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: '⚛️', label: 'React' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '🐍', label: 'Python' },
  { icon: '🎨', label: 'UI/UX' },
  { icon: '☁️', label: 'AWS' },
  { icon: '🔧', label: 'DevOps' },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent">About Me</h2>
        <p className="text-white/80 mb-6">I'm a passionate full-stack developer with experience in creating beautiful, functional, and user-centered digital experiences. I love solving complex problems and turning ideas into reality through code.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, idx) => (
            <div
              key={skill.label}
              ref={el => (cardRefs.current[idx] = el)}
              className="glass-card p-6 text-center"
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <div>{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 