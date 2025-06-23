import React from 'react';
import styles from './Button.css?inline';
import { useTheme } from '@zone-ui/theme-provider';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'large';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const theme = useTheme();

  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    size !== 'medium' && styles[`button--${size}`],
    loading && styles['button--loading'],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={props.disabled || loading}
      {...props}
    >
      {children}
      {loading && (
        <span className={styles['button--loading']} />
      )}
    </button>
  );
}
