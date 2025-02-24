import React from 'react';
import '../../styles/MusicPlayingAnimation.css';

interface PlayingProps {
  height?: string;
  width?: string;
  number?: number;
	color?: string;
	className?: string;
}

const MusicPlayingAnimation = ({ height = "20px", width = "13px", number = 3, color = "#1ED760", className='' }: PlayingProps) => {
  return (
    <div className={`playing ${className}`} style={{ height, width }}>
      {Array.from({ length: number }).map((_, index) => (
        <span key={index} className="bar" style={{ backgroundColor: color, animationDelay: `${-index * 1.5}s` }} />
      ))}
    </div>
  );
};

export default MusicPlayingAnimation;