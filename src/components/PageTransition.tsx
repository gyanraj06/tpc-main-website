import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = () => {
  const transitionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate grid blocks
  useEffect(() => {
    const adjustGrid = () => {
      const transition = transitionRef.current;
      if (!transition) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Determine columns based on screen width (matching CSS media queries)
      let columns = 8;
      if (width <= 479) columns = 4;
      else if (width <= 767) columns = 6;

      const blockSize = width / columns;
      const rows = Math.ceil(height / blockSize);
      const totalBlocks = columns * rows;

      // Update grid styles
      transition.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
      transition.style.gridTemplateRows = `repeat(${rows}, ${blockSize}px)`;

      // Clear and populate
      transition.innerHTML = '';
      for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('transition-block');
        transition.appendChild(block);
      }
    };

    adjustGrid();
    window.addEventListener('resize', adjustGrid);
    return () => window.removeEventListener('resize', adjustGrid);
  }, []);

  // Handle global link interception
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Check if it's an internal link
      const isInternal = href.startsWith('/') || href.startsWith(window.location.origin);
      const isAnchor = href.startsWith('#');
      const isNewTab = target.target === '_blank';
      const isPrevented = target.hasAttribute('data-transition-prevent');

      if (isInternal && !isAnchor && !isNewTab && !isPrevented && !isAnimating) {
        e.preventDefault();

        // Extract path
        const path = href.replace(window.location.origin, '');
        if (path === location.pathname) return;

        setIsAnimating(true);

        // Play exit animation (hide page)
        const transition = transitionRef.current;
        if (transition) {
          transition.style.display = 'grid';

          gsap.fromTo(
            '.transition-block',
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.01, // Fast individual block appearance
              stagger: {
                amount: 0.5,
                from: 'random'
              },
              onComplete: () => {
                navigate(path);
                setIsAnimating(false);
              }
            }
          );
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, location.pathname, isAnimating]);

  // Handle page load/route change animation (reveal page)
  useEffect(() => {
    const transition = transitionRef.current;
    if (!transition) return;

    // Ensure grid is visible initially
    transition.style.display = 'grid';

    // Animate blocks out
    const ctx = gsap.context(() => {
      gsap.to('.transition-block', {
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 0.75,
          from: 'random'
        },
        onComplete: () => {
          transition.style.display = 'none';
        }
      });
    }, transition);

    // Safety timeout to ensure overlay is hidden
    const timeout = setTimeout(() => {
      if (transition.style.display !== 'none') {
        transition.style.display = 'none';
      }
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };

  }, [location.pathname]); // Trigger on route change

  return (
    <div
      ref={transitionRef}
      className="transition-overlay"
      style={{ display: 'none' }} // Hidden by default, managed by GSAP
    />
  );
};

export default PageTransition;
