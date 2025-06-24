import React from 'react';
import './Progress.css';
import { useTheme } from '@zone-ui/theme-provider';

interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  striped?: boolean;
  animated?: boolean;
  className?: string;
  vertical?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  size?: 'small' | 'medium' | 'large';
  simple?: boolean;
}

export function Progress({
  value,
  max = 100,
  label,
  showPercentage = true,
  type = 'primary',
  striped = false,
  animated = false,
  className = '',
  vertical = false,
  rounded = false,
  shadow = false,
  size = 'medium',
  simple = false,
}: ProgressProps) {
  const theme = useTheme();
  const percentage = Math.round((value / max) * 100);

  const classes = [
    styles.progress,
    className,
    vertical ? styles['progress--vertical'] : styles['progress--horizontal'],
    rounded ? styles['progress--rounded'] : '',
    shadow ? styles['progress--shadow'] : '',
    size === 'small' ? styles['progress--small'] : '',
    size === 'large' ? styles['progress--large'] : '',
    simple ? styles['progress--simple'] : '',
  ].filter(Boolean).join(' ');

  const barClasses = [
    styles.progress__bar,
    vertical ? styles['progress--vertical'] : '',
    size === 'small' ? styles['progress--small'] : '',
    size === 'large' ? styles['progress--large'] : '',
  ].filter(Boolean).join(' ');

  const fillClasses = [
    styles.progress__fill,
    styles[`progress__fill--${type}`],
    striped ? styles['progress__fill--striped'] : '',
    animated ? styles['progress__fill--animated'] : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      {label && <span className={styles.progress__label}>{label}</span>}
      <div className={barClasses}>
        <div
          className={fillClasses}
          style={{
            width: vertical ? '100%' : `${percentage}%`,
            height: vertical ? `${percentage}%` : '100%',
          }}
        />
      </div>
      {showPercentage && (
        <span className={styles.progress__percentage}>{percentage}%</span>
      )}
    </div>
  );
}
