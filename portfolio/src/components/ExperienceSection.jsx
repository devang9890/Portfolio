import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    duration: '2022 - Present',
    description: 'Led a team of 5 developers in building scalable web applications using React, Node.js, and AWS.'
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    duration: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using modern web technologies.'
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency',
    duration: '2018 - 2020',
    description: 'Specialized in creating responsive web applications with React and Vue.js.'
  },
  {
    title: 'Junior Developer',
    company: 'CodeStudio',
    duration: '2017 - 2018',
    description: 'Worked on various web projects using HTML, CSS, JavaScript, and PHP.'
  },
];

const ExperienceSection = () => {
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
    <section id="experience" ref={sectionRef} className="bg-[#0a0a0a] min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-[#4ecdc4] mb-1">{exp.title}</h3>
              <div className="text-[#ff6b6b] mb-1">{exp.company}</div>
              <div className="text-white/60 mb-2">{exp.duration}</div>
              <p className="text-white/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 