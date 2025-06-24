import React from 'react';
import './Skeleton.css';
import { useTheme } from '@zone-ui/theme-provider';

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
    'skeleton',
    className,
    `skeleton--${type}`,
    delay ? 'skeleton--delay' : '',
    speed === 'slow' ? 'skeleton--slow' : '',
    speed === 'fast' ? 'skeleton--fast' : '',
  ].filter(Boolean).join(' ');

  const renderSkeleton = () => {
    if (type === 'list') {
      return (
        <div className='skeleton--list'>
          <div className='skeleton--list-image' />
          <div className='skeleton--list-item'>
            <div className='skeleton--text' />
            <div className='skeleton--text' />
            <div className='skeleton--text' />
          </div>
        </div>
      );
    }

    if (type === 'grid') {
      return (
        <div className='skeleton--grid'>
          {[...Array(count)].map((_, i) => (
            <div key={i} className='skeleton--grid-item' />
          ))}
        </div>
      );
    }

    return <div className={classes} />;
  };

  return renderSkeleton();
}
