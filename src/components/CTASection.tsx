import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ArrowRight, Rocket, Users } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger, Observer);

const CTASection = () => {
  const ctaRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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

  return (
    <section ref={ctaRef} className="py-20 md:py-32 bg-white text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-decoration absolute top-10 -right-10 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl"></div>
        <div className="bg-decoration absolute bottom-10 -left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="cta-title font-heading text-4xl md:text-6xl font-medium mb-8">
            Ready to Start Your{' '}
            <span className="text-blue-600">Trip?</span>
          </h2>
          
          <p ref={subtitleRef} className="cta-subtitle font-body text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Book travel experiences across India, or share your local expertise with visitors.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="cta-card bg-white rounded-lg p-8 text-center border border-gray-100 shadow-lg">
            <div className="mb-6 text-accent-green flex justify-center">
              <Rocket size={40} weight="regular" />
            </div>
            <h3 className="font-heading text-2xl font-medium mb-4">
              Start Exploring
            </h3>
            <p className="font-body text-gray-600 mb-8 leading-relaxed">
              Discover hidden gems, unique workshops, and authentic adventures across India with local experts as your guide.
            </p>
            <button className="btn-primary group inline-flex items-center gap-2">
              Browse Experiences
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="cta-card bg-white rounded-lg p-8 text-center border border-gray-100 shadow-lg">
            <div className="mb-6 text-blue-400 flex justify-center">
              <Users size={40} weight="regular" />
            </div>
            <h3 className="font-heading text-2xl font-medium mb-4">
              Share Your Expertise
            </h3>
            <p className="font-body text-gray-600 mb-8 leading-relaxed">
              Turn your local knowledge into income by hosting travelers and sharing the authentic side of your region.
            </p>
            <button className="btn-outline group inline-flex items-center gap-2">
              Become a Host
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CTASection;