import React, { useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: <FaEnvelope className="text-[#ea4335]" />, label: 'Email', href: 'mailto:devang9890@gmail.com' },
  { icon: <FaLinkedin className="text-[#0077b5]" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devang-singh-258476284/' },
  { icon: <FaGithub className="text-[#333] dark:text-white" />, label: 'GitHub', href: 'https://github.com/devang9890' },
  { icon: <FaTwitter className="text-[#1da1f2]" />, label: 'Twitter', href: 'https://x.com/devang9890' },
  { icon: <FaInstagram className="text-[#e1306c]" />, label: 'Instagram', href: 'https://www.instagram.com/dhruvv9544/' },
];

const ContactSection = () => {
  const sectionRef = useRef();
  const iconRefs = useRef([]);

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
      iconRefs.current,
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-[#0a0a0a] min-h-screen py-24 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent">Get In Touch</h2>
        <p className="text-white/80 mb-10">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
        <div className="glass-card p-8 mb-10">
          <form className="grid gap-6 mt-2">
            <input type="text" placeholder="Your Name" required className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white text-base focus:outline-none focus:border-[#4ecdc4]" />
            <input type="email" placeholder="Your Email" required className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white text-base focus:outline-none focus:border-[#4ecdc4]" />
            <input type="text" placeholder="Subject" required className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white text-base focus:outline-none focus:border-[#4ecdc4]" />
            <textarea placeholder="Your Message" required className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white text-base min-h-[120px] resize-vertical focus:outline-none focus:border-[#4ecdc4]" />
            <button type="submit" className="btn-primary px-8 py-3 rounded-full">Send Message</button>
          </form>
        </div>
        <div className="flex justify-center gap-6 mt-12">
          {socials.map((social, idx) => (
            <a
              key={social.label}
              href={social.href}
              title={social.label}
              ref={el => (iconRefs.current[idx] = el)}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-2xl hover:bg-white/20 hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 