import React, { useRef, useState, useEffect } from 'react';
import styles from './Tooltip.css';
import { useTheme } from '../../theme-provider';

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
  const [isVisible, setIsVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!tooltipRef.current) return;

      const rect = children.ref?.current?.getBoundingClientRect();
      if (!rect) return;

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

    children.ref?.current?.addEventListener('mousemove', handleMouseMove);
    children.ref?.current?.addEventListener('mouseenter', handleMouseEnter);
    children.ref?.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      children.ref?.current?.removeEventListener('mousemove', handleMouseMove);
      children.ref?.current?.removeEventListener('mouseenter', handleMouseEnter);
      children.ref?.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [children.ref, position, delay]);

  return (
    <>
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${className} ${styles[`tooltip--${position}`]} ${
            styles[`tooltip--${theme}`]
          } ${styles[`tooltip--${animation}`]} ${styles['tooltip--show']}`}
          style={positionStyle}
          role="tooltip"
        >
          <div className={styles.tooltip__content}>{content}</div>
          <div className={styles.tooltip__arrow} />
        </div>
      )}
    </>
  );
}
