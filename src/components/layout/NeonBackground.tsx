import React from 'react';

export const NeonBackground = () => {
  return (
    <div className="neon-bg">
      <div 
        className="neon-orb bg-primary w-[500px] h-[500px] -top-20 -left-20" 
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="neon-orb bg-secondary w-[400px] h-[400px] top-1/2 -right-20" 
        style={{ animationDelay: '-5s' }}
      />
      <div 
        className="neon-orb bg-accent w-[300px] h-[300px] -bottom-20 left-1/3" 
        style={{ animationDelay: '-10s' }}
      />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
};
