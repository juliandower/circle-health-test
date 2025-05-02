import React from 'react';

export const BetaBanner: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      margin: '0 auto',
      marginTop: '16px', 
      whiteSpace: 'nowrap', 
    }}>
      {/* BETA pill label */}
      <div style={{
        width: '42px',
        height: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2px 6px 2px 5px',
      }}>
        <span style={{
          fontFamily: 'var(--font-be-vietnam-pro)',
          fontWeight: 600,
          fontSize: '11px',
          lineHeight: '12px',
          letterSpacing: '0.02em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
        }}>
          Beta
        </span>
      </div>
      
      {/* Text message */}
      <span style={{
        fontFamily: 'var(--font-be-vietnam-pro)',
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '16px',
        letterSpacing: '0',
        color: '#6F7070',
      }}>
        Circle AI can make mistakes. Check important info.
      </span>
    </div>
  );
};
