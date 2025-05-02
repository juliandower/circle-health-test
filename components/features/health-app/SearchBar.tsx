import React, { useState } from 'react';

interface SearchBarProps {
  onFocusChange?: (isFocused: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onFocusChange }) => {
  // Add a unique class to target the input for styling
  const searchInputClass = 'search-input-black-placeholder';
  
  // Add a style block to the head of the document when the component mounts
  React.useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      .${searchInputClass}::placeholder {
        color: black !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
  
  return (
    <div style={{ paddingTop: '59px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {/* Gradient shadow positioned below the search bar */}
        <div 
          style={{
            position: 'absolute',
            width: '337px',
            height: '36px',
            borderRadius: '48px',
            background: 'linear-gradient(90deg, #FEC400 0%, #B8C12E 50%, #73BD5C 100%)',
            filter: 'blur(10px)',
            top: '14px',  /* Positioned lower to be mostly visible at the bottom */
            left: 'calc(50% - 337px/2)',
            zIndex: -1,
          }}
        />
        
        <div style={{ position: 'relative', width: '361px' }}>
          {/* Arc icon on the left */}
          <div style={{ 
            position: 'absolute', 
            left: '16px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
          }}>
            <img src="/icons/arc.svg" alt="Profile" width="24" height="24" />
          </div>

          <input
            type="text"
            placeholder="How can we help?"
            onFocus={() => onFocusChange && onFocusChange(true)}
            onBlur={() => onFocusChange && onFocusChange(false)}
            className={`${searchInputClass}`}
            style={{
              width: '100%',
              height: '56px',
              padding: '16px 20px 16px 52px', /* 16px left edge + 24px icon width + 12px spacing = 52px */ 
              gap: '12px',
              borderWidth: '0.5px',
              borderRadius: '48px',
              boxSizing: 'border-box',
              display: 'block',
              boxShadow: '0px 24px 40px 0px rgba(0, 0, 0, 0.04), -16px 20px 16px -20px rgba(254, 196, 0, 0.2)',
              borderColor: 'rgba(0, 0, 0, 0.1)',
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'white',
              fontFamily: 'var(--font-be-vietnam-pro)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.01em',
              color: '#000000',
              outline: 'none' /* Remove the blue outline */
            }}
          />

          {/* Mic icon on the right */}
          <div style={{ 
            position: 'absolute', 
            right: '20px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
          }}>
            <img src="/icons/mic.svg" alt="Microphone" width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
};
