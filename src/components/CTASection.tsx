import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

const CTASection = () => {
  const ctaRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background decoration animations
      gsap.set(".bg-decoration", { 
        rotation: 0,
        scale: 0.8,
        opacity: 0.3
      });

      // Main timeline for the entire section
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      mainTl
        .from(".cta-title", { 
          opacity: 0, 
          y: 80, 
          duration: 0.5,
          ease: "power3.out"
        })
        .from(".cta-subtitle", { 
          opacity: 0, 
          y: 50, 
          duration: 0.4,
          ease: "power2.out"
        }, "-=0.3")
        .from(".cta-card", { 
          opacity: 0, 
          y: 100, 
          scale: 0.9,
          duration: 0.4,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }, "-=0.2")
        .from(".cta-contact", { 
          opacity: 0, 
          y: 40, 
          duration: 0.3,
          ease: "power2.out"
        }, "-=0.1");

      // Background decorations animation
      gsap.to(".bg-decoration", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });


      // Observer for interactive card animations
      Observer.create({
        target: cardsRef.current,
        type: "pointer",
        onHover: () => {
          gsap.to(".cta-card:hover", {
            scale: 1.05,
            y: -10,
            duration: 0.15,
            ease: "power2.out"
          });
        },
        onHoverEnd: () => {
          gsap.to(".cta-card", {
            scale: 1,
            y: 0,
            duration: 0.15,
            ease: "power2.out"
          });
        }
      });

      // Contact section reveal
      ScrollTrigger.create({
        trigger: contactRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.from(".contact-text", {
            opacity: 0,
            y: 30,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out"
          });
        }
      });

    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return null;
};

export default CTASection;