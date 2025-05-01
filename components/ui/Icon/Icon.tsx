import React from 'react';
import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = 16,
  className = '',
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
};
