import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
}) => {
  // Pure inline styles since Tailwind isn't working properly
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '36px',
    height: '36px',
    fontFamily: 'var(--font-be-vietnam-pro)',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s, color 0.2s',
    padding: variant === 'primary' ? '8px 16px' : '0',
    backgroundColor: variant === 'primary' ? '#0071E3' : 'transparent',
    color: variant === 'primary' ? '#FFFFFF' : '#0071E3',
  };

  return (
    <button
      onClick={onClick}
      style={baseStyles}
      className={className}
    >
      {variant === 'secondary' && children === 'Start with a gut quiz' ? (
        <>
          {children} <span style={{ marginLeft: '4px' }}>›</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
