import React, { useRef, useState, useEffect } from 'react';
import './Tooltip.css';
import { useTheme } from '@zone-ui/theme-provider';

interface TooltipProps {
  children: React.ReactElement;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  theme?: 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'danger';
  delay?: number;
  animation?: 'fade' | 'slide';
  className?: string;
}

export function Tooltip({
  children,
  content,
  position = 'top',
  theme = 'dark',
  delay = 200,
  animation = 'fade',
  className = '',
}: TooltipProps) {
  const themeContext = useTheme();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!tooltipRef.current || !triggerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();

      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      let top = rect.top + window.scrollY;
      let left = rect.left + window.scrollX;

      // Adjust position based on viewport boundaries
      switch (position) {
        case 'top':
          top -= tooltipRef.current.offsetHeight + 10;
          break;
        case 'bottom':
          top += rect.height + 10;
          break;
        case 'left':
          left -= tooltipRef.current.offsetWidth + 10;
          break;
        case 'right':
          left += rect.width + 10;
          break;
      }

      // Ensure tooltip stays within viewport
      if (top < 0) {
        top = 0;
      }
      if (left < 0) {
        left = 0;
      }
      if (top + tooltipRef.current.offsetHeight > viewport.height) {
        top = viewport.height - tooltipRef.current.offsetHeight;
      }
      if (left + tooltipRef.current.offsetWidth > viewport.width) {
        left = viewport.width - tooltipRef.current.offsetWidth;
      }

      setPositionStyle({ top, left });
    };

    const handleMouseEnter = () => {
      if (delay > 0) {
        setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const triggerElement = triggerRef.current;
    if (triggerElement) {
      triggerElement.addEventListener('mousemove', handleMouseMove);
      triggerElement.addEventListener('mouseenter', handleMouseEnter);
      triggerElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        triggerElement.removeEventListener('mousemove', handleMouseMove);
        triggerElement.removeEventListener('mouseenter', handleMouseEnter);
        triggerElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [position, delay]);

  const clonedChild = React.cloneElement(children, {
    ref: triggerRef,
  });

  return (
    <>
      {clonedChild}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`tooltip ${className} tooltip--${position} tooltip--${theme} tooltip--${animation} tooltip--show`}
          style={positionStyle}
          role="tooltip"
        >
          <div className="tooltip__content">{content}</div>
          <div className="tooltip__arrow" />
        </div>
      )}
    </>
  );
}
