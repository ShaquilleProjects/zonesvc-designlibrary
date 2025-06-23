import React from 'react';
import styles from './Skeleton.css';
import { useTheme } from "/theme-provider';

interface SkeletonProps {
  type?: 'text' | 'circle' | 'rounded' | 'full' | 'small' | 'medium' | 'large' | 'avatar' | 'avatar-large' | 'avatar-xlarge' | 'list' | 'grid';
  count?: number;
  className?: string;
  delay?: boolean;
  speed?: 'slow' | 'fast';
}

export function Skeleton({
  type = 'text',
  count = 1,
  className = '',
  delay,
  speed,
}: SkeletonProps) {
  const theme = useTheme();

  const classes = [
    styles.skeleton,
    className,
    styles[`skeleton--${type}`],
    delay ? styles['skeleton--delay'] : '',
    speed === 'slow' ? styles['skeleton--slow'] : '',
    speed === 'fast' ? styles['skeleton--fast'] : '',
  ].filter(Boolean).join(' ');

  const renderSkeleton = () => {
    if (type === 'list') {
      return (
        <div className={styles['skeleton--list']}>
          <div className={styles['skeleton--list-image']} />
          <div className={styles['skeleton--list-item']}>
            <div className={styles['skeleton--text']} />
            <div className={styles['skeleton--text']} />
            <div className={styles['skeleton--text']} />
          </div>
        </div>
      );
    }

    if (type === 'grid') {
      return (
        <div className={styles['skeleton--grid']}>
          {[...Array(count)].map((_, i) => (
            <div key={i} className={styles['skeleton--grid-item']} />
          ))}
        </div>
      );
    }

    return <div className={classes} />;
  };

  return renderSkeleton();
}
