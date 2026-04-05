import React from 'react';

export const NeonBackground = () => {
  return (
    <div className="neon-bg">
      <div 
        className="neon-orb bg-primary w-[600px] h-[600px] -top-20 -left-20" 
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="neon-orb bg-secondary w-[500px] h-[500px] top-1/2 -right-20" 
        style={{ animationDelay: '-5s' }}
      />
      <div 
        className="neon-orb bg-accent w-[400px] h-[400px] -bottom-20 left-1/3" 
        style={{ animationDelay: '-10s' }}
      />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
};
