import React from 'react';

interface LightBulbProps {
  isOn: boolean;
  brightness: number;
  color: string;
}

export function LightBulb({ isOn, brightness, color }: LightBulbProps) {
  const opacity = isOn ? brightness / 100 : 0;
  
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{
          backgroundColor: color,
          opacity,
          boxShadow: isOn ? `0 0 60px ${color}` : 'none'
        }}
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-full h-full p-4"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21h6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}