import React from 'react';
import { Button } from '@ui/Button';
import Image from 'next/image';

export const ContentCard: React.FC = () => {
  return (
    <div 
      style={{
        width: '345px',
        height: '500px',
        borderRadius: '12px',
        padding: '24px',
        background: 'linear-gradient(to bottom, #F7F8FA, #ECEFF4)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto', /* Center the card */
        position: 'relative',
      }}
    >
      {/* Images container */}
      <div style={{ position: 'relative', width: '100%', height: '320px', marginBottom: '20px' }}>
        {/* Box image */}
        <div style={{ position: 'absolute', width: '100%', height: '320px', display: 'flex', justifyContent: 'center', top: '0px' }}>
          <Image 
            src="/images/box.png" 
            alt="Box" 
            width={320} 
            height={320} 
            style={{ 
              width: '320px', 
              height: '320px', 
              objectFit: 'contain',
              filter: 'blur(0.5px)'
            }} 
          />
        </div>
        
        {/* Hand image */}
        <div style={{ 
          position: 'absolute', 
          left: '94px', 
          top: '-4px',
          zIndex: 2
        }}>
          <Image 
            src="/images/hand.png" 
            alt="Hand" 
            width={251} 
            height={251} 
            priority
          />
        </div>
        
        {/* Tube image */}
        <div style={{ 
          position: 'absolute', 
          left: '177px', 
          top: '83.5px',
          zIndex: 9999,
          opacity: 1
        }}>
          <Image 
            src="/images/tube.png" 
            alt="Tube" 
            width={11} 
            height={37.5} 
            style={{ 
              filter: 'blur(1px)'
            }}
          />
        </div>
      </div>
      
      <h2 style={{
        fontFamily: "var(--font-tiempos-text), Arial, sans-serif",
        fontSize: '28px',
        fontWeight: 400,
        lineHeight: '36px',
        letterSpacing: '-0.01em',
        textAlign: 'center',
        color: '#000000',
        margin: '0 auto',
        marginBottom: '8px',
        width: '297px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Test your gut health from home
      </h2>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        marginTop: '24px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary">
            Shop tests
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="secondary">
            Start with a gut quiz
          </Button>
        </div>
      </div>
    </div>
  );
};
