import React, { useMemo } from 'react';
import './StaggerButton.css';

interface StaggerButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const StaggerButton: React.FC<StaggerButtonProps> = ({ text, className = '', onClick }) => {
  const offsetIncrement = 0.02; // Transition offset increment in seconds

  const characters = useMemo(() => {
    return text.split('').map((char, index) => ({
      char,
      delay: index * offsetIncrement,
      isSpace: char === ' '
    }));
  }, [text]);

  return (
    <a 
      href="#" 
      className={`btn-animate-chars ${className}`} 
      aria-label={text}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <div className="btn-animate-chars__bg"></div>
      <span className="btn-animate-chars__text" data-button-animate-chars>
        {characters.map((item, index) => (
          <span 
            key={index} 
            style={{ 
              transitionDelay: `${item.delay}s`,
              whiteSpace: item.isSpace ? 'pre' : 'normal'
            }}
          >
            {item.char}
          </span>
        ))}
      </span>
    </a>
  );
};

export default StaggerButton;
