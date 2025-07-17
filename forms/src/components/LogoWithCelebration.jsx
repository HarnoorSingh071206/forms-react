import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const LogoWithCelebration = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [logoRect, setLogoRect] = useState(null);
  const { width, height } = useWindowSize();

  const handleLogoClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLogoRect({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className='relative p-6 pb-4 flex justify-center items-center border-b border-orange-200'>
      <div 
        onClick={handleLogoClick}
        className='cursor-pointer active:scale-95 transition-transform'
        ref={(el) => el && !logoRect && setLogoRect(el.getBoundingClientRect())}
      >
        <img 
          src="https://cdn.freebiesupply.com/logos/large/2x/for-dummies-1-logo-svg-vector.svg" 
          className='w-40 transition-transform duration-200' 
          alt="Company Logo" 
        />
      </div>

      {showConfetti && logoRect && (
        <div className='absolute inset-0 overflow-hidden pointer-events-none' 
             style={{
               left: logoRect.x,
               top: logoRect.y,
               width: logoRect.width,
               height: logoRect.height
             }}>
          <Confetti
            width={logoRect.width}
            height={logoRect.height}
            recycle={false}
            numberOfPieces={100}
            gravity={0.2}
            initialVelocityY={3}
            confettiSource={{
              x: logoRect.width/3,
              y: 0,
              w: 10,
              h: 0
            }}
            style={{ position: 'absolute' }}
          />
        </div>
      )}
    </div>
  );
};

export default LogoWithCelebration;