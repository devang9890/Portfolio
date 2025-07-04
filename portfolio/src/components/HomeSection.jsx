import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import profileImg from '../assets/profile.jpg';
import './HomeSection.css'; // We'll add custom CSS for neon glow

const HomeSection = () => {
  const cardRef = useRef();
  const imgRef = useRef();
  const textRefs = useRef([]);
  const btnRefs = useRef([]);

  useEffect(() => {
    // Entrance animations
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 80, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      btnRefs.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', delay: 1 }
    );
  }, []);

  // Parallax effect for profile image
  useEffect(() => {
    if (!imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // Button hover effect
  useEffect(() => {
    btnRefs.current.forEach((btn) => {
      if (!btn) return;
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.07, boxShadow: '0 8px 32px 0 rgba(255,107,107,0.25)', duration: 0.25 });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, boxShadow: '', duration: 0.25 });
      });
    });
    return () => {
      btnRefs.current.forEach((btn) => {
        if (!btn) return;
        btn.removeEventListener('mouseenter', () => {});
        btn.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Image hover effect
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const onEnter = () => gsap.to(img, { scale: 1.04, duration: 0.25 });
    const onLeave = () => gsap.to(img, { scale: 1, duration: 0.25 });
    img.addEventListener('mouseenter', onEnter);
    img.addEventListener('mouseleave', onLeave);
    return () => {
      img.removeEventListener('mouseenter', onEnter);
      img.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#18181b] overflow-hidden pt-24">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* Left Card */}
        <div
          ref={cardRef}
          className="glass-card backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 flex-1 min-w-[320px] max-w-xl"
        >
          <div ref={el => (textRefs.current[0] = el)} className="text-[#ff6b6b] text-lg font-bold mb-2 tracking-wider">HELLO!</div>
          <h1
            ref={el => (textRefs.current[1] = el)}
            className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight"
            style={{ color: '#00e6fb', textShadow: '0 0 8px #00e6fb, 0 0 24px #00e6fb80' }}
          >
            Devang here!!
          </h1>
          <div
            ref={el => (textRefs.current[2] = el)}
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: '#4ecdc4', textShadow: '0 0 8px #4ecdc4, 0 0 16px #4ecdc480' }}
          >
            Web Developer & Creative Coder
          </div>
          <p
            ref={el => (textRefs.current[3] = el)}
            className="mb-8 text-white/80 text-base md:text-lg"
          >
            I'm a B.Tech CSE student and passionate web developer skilled in MERN stack. Currently focused on mastering DSA and building real-world projects to enhance problem-solving and full-stack development skills.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              ref={el => (btnRefs.current[0] = el)}
              className="px-7 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#00e6fb] to-[#4ecdc4] shadow-lg hover:from-[#4ecdc4] hover:to-[#00e6fb] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00e6fb]"
            >
              View Work
            </a>
            <a
              href="#contact"
              ref={el => (btnRefs.current[1] = el)}
              className="px-7 py-2.5 rounded-full font-semibold text-[#ff6b6b] bg-white/20 border border-[#ff6b6b] shadow hover:bg-[#ff6b6b] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Right Card: Neon Glow Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div className="neon-glow rounded-2xl p-1 md:p-1.5">
            <img
              ref={imgRef}
              src={profileImg}
              alt="Devang Singh profile"
              className="w-[270px] h-[340px] object-cover rounded-2xl shadow-xl bg-[#23272f] border-2 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection; 