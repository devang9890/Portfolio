import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaSass
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiFirebase, SiMongodb, SiMysql, SiNextdotjs, SiOracle, SiSpring, SiTailwindcss } from 'react-icons/si';
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: <FaBootstrap className="text-[#7952b3]" />, label: 'Bootstrap' },
  { icon: <SiC className="text-[#A8B9CC]" />, label: 'C' },
  { icon: <SiCplusplus className="text-[#00599C]" />, label: 'C++' },
  { icon: <FaCss3Alt className="text-[#1572b6]" />, label: 'CSS3' },
  { icon: <SiExpress className="text-[#000000]" />, label: 'Express' },
  { icon: <SiFirebase className="text-[#FFCA28]" />, label: 'Firebase' },
  { icon: <FaGitAlt className="text-[#f34f29]" />, label: 'Git' },
  { icon: <FaHtml5 className="text-[#e34c26]" />, label: 'HTML5' },
  { icon: <FaJava className="text-[#007396]" />, label: 'Java' },
  { icon: <FaJs className="text-[#f7df1e]" />, label: 'JavaScript' },
  { icon: <SiMongodb className="text-[#47A248]" />, label: 'MongoDB' },
  { icon: <span className="text-[#CC2927] text-3xl">🗄️</span>, label: 'MSSQL' },
  { icon: <SiMysql className="text-[#4479A1]" />, label: 'MySQL' },
  { icon: <SiNextdotjs className="text-[#000000]" />, label: 'Next.js' },
  { icon: <FaNodeJs className="text-[#339933]" />, label: 'Node.js' },
  { icon: <SiOracle className="text-[#F80000]" />, label: 'Oracle' },
  { icon: <FaReact className="text-[#61dafb]" />, label: 'React' },
  { icon: <FaSass className="text-[#cc6699]" />, label: 'Sass' },
  { icon: <SiSpring className="text-[#6DB33F]" />, label: 'Spring' },
  { icon: <SiTailwindcss className="text-[#38bdf8]" />, label: 'Tailwind' },
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
        <h3 className="text-2xl font-bold text-white mb-4 mt-10">Languages and Tools:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.label}
              ref={el => (cardRefs.current[idx] = el)}
              className="glass-card p-6 text-center flex flex-col items-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="text-white mt-1">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 