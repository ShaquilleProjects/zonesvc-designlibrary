import React from 'react';
import './Badge.css';
import { useTheme } from '@zone-ui/theme-provider';

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
    'badge',
    className,
    `badge--${type}`,
    variant === 'outline' ? 'badge--outline' : '',
    `badge--${size}`,
    shape === 'pill' ? 'badge--pill' : '',
    shape === 'dot' ? 'badge--dot' : '',
    Icon ? 'badge--with-icon' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} role="status">
      {Icon && <Icon className="badge__icon" />}
      {children}
    </span>
  );
}
