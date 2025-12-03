import React, { useMemo } from 'react';
import './StaggerText.css';

interface StaggerTextProps {
  text: string;
  className?: string;
}

const StaggerText: React.FC<StaggerTextProps> = ({ text, className = '' }) => {
  const offsetIncrement = 0.02; // Transition offset increment in seconds

  const characters = useMemo(() => {
    return text.split('').map((char, index) => ({
      char,
      delay: index * offsetIncrement,
    }));
  }, [text]);

  return (
    <span className={`stagger-text-wrapper ${className}`} aria-label={text}>
      {characters.map((item, index) => (
        <span 
          key={index} 
          className="stagger-text-char"
          style={{ 
            transitionDelay: `${item.delay}s`,
          }}
        >
          {item.char}
        </span>
      ))}
    </span>
  );
};

export default StaggerText;
