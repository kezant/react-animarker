import React from 'react';
import { useOnFound } from 'hookez';

interface AnimarkerProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  textColor?: string;
  transition?: 'ease' | 'ease-out' | 'ease-in-out' | 'linear' | string;
  duration?: number;
  className?: string;
  ref?: React.RefObject<HTMLElement> | null;
}

export const Animarker = React.memo(
  ({
    children,
    bgColor = 'white',
    color = 'yellow',
    duration = 1,
    transition = 'ease',
    className,
    textColor = 'inherit',
    ref = null,
  }: AnimarkerProps) => {
    const tagRef = ref ?? React.createRef<HTMLElement>();
    const isFound = useOnFound(tagRef);

    return (
      <mark
        data-done={isFound}
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `linear-gradient(90deg, ${bgColor} 50%, ${color} 0)`,
          backgroundSize: '200%',
          backgroundPosition: isFound ? '-100%' : 0,
          transition: `all ${duration}s ${transition}`,
          color: textColor,
        }}
        className={className}
        ref={tagRef}
      >
        {children}
      </mark>
    );
  },
);
