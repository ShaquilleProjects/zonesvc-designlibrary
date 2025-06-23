import React, { useState, useRef, useEffect } from 'react';
import styles from './Slider.css';
import { useTheme } from "/theme-provider';

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  onChange?: (value: number) => void;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  label,
  onChange,
  className = '',
  error,
  disabled = false,
}: SliderProps) {
  const theme = useTheme();
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    const position = ((value - min) / (max - min)) * 100;
    setThumbPosition(position);
  }, [value, min, max]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;
    const newValue = Math.round((position / 100) * (max - min) / step) * step + min;

    onChange?.(newValue);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;
    const newValue = Math.round((position / 100) * (max - min) / step) * step + min;

    onChange?.(newValue);
  };

  return (
    <div className={`${styles.slider} ${className}`}>
      {label && <div className={styles.slider__label}>{label}</div>}
      <div
        className={styles.slider__track}
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => {} /* Prevent mouseup from triggering change */}
      >
        <div className={styles.slider__progress} style={{ width: `${thumbPosition}%` }} />
        <div
          className={styles.slider__thumb}
          style={{ left: `${thumbPosition}%` }}
        />
      </div>
      <div className={styles.slider__value}>{value}</div>
      {error && <div className={styles.slider__error}>{error}</div>}
    </div>
  );
}
