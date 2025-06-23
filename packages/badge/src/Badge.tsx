import React from 'react';
import styles from './Badge.css';
import { useTheme } from '../../theme-provider';

interface BadgeProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  variant?: 'filled' | 'outline';
  size?: 'small' | 'medium' | 'large';
  shape?: 'default' | 'pill' | 'dot';
  icon?: React.ComponentType;
  className?: string;
}

export function Badge({
  children,
  type = 'secondary',
  variant = 'filled',
  size = 'medium',
  shape = 'default',
  icon: Icon,
  className = '',
}: BadgeProps & React.HTMLAttributes<HTMLSpanElement>) {
  const theme = useTheme();

  const classes = [
    styles.badge,
    className,
    styles[`badge--${type}`],
    variant === 'outline' ? styles['badge--outline'] : '',
    styles[`badge--${size}`],
    shape === 'pill' ? styles['badge--pill'] : '',
    shape === 'dot' ? styles['badge--dot'] : '',
    Icon ? styles['badge--with-icon'] : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} role="status">
      {Icon && <Icon className={styles.badge__icon} />}
      {children}
    </span>
  );
}
