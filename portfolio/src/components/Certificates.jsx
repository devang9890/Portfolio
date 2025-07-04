import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'React Developer Certification',
    issuer: 'Coursera',
    date: 'June 2023',
    description: 'Completed an in-depth course on React.js, covering hooks, state management, and building scalable web apps.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://coursera.org/certificate/react-dev',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    description: 'Gained foundational knowledge of AWS cloud concepts, services, and security best practices.',
    image: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'January 2022',
    description: 'Learned to build responsive websites using HTML, CSS, and modern design principles.',
    image: 'https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg',
    link: 'https://freecodecamp.org/certification/responsive-web-design',
  },
];

const Certificates = () => {
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
    <section id="certificates" ref={sectionRef} className="bg-[#18181b] min-h-[60vh] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#45b7d1] bg-clip-text text-transparent">Certificates</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, idx) => {
            const Card = cert.link ? 'a' : 'div';
            return (
              <Card
                key={idx}
                href={cert.link}
                target={cert.link ? '_blank' : undefined}
                rel={cert.link ? 'noopener noreferrer' : undefined}
                ref={el => (cardRefs.current[idx] = el)}
                className="glass-card p-6 flex flex-col gap-2 shadow-lg transition hover:scale-[1.025] hover:shadow-2xl cursor-pointer"
              >
                {cert.image && (
                  <img src={cert.image} alt={cert.title} className="w-14 h-14 object-contain mb-2 rounded-lg border border-white/20 bg-white/10" />
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg font-bold text-[#4ecdc4]">{cert.title}</span>
                  <span className="text-xs text-white/60">{cert.date}</span>
                </div>
                <div className="text-sm text-white/80 mb-1">Issued by <span className="font-semibold text-[#ff6b6b]">{cert.issuer}</span></div>
                <div className="text-white/90 text-sm">{cert.description}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 