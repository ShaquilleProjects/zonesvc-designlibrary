import React from 'react';
import './Button.css';
import { useTheme } from "../../packages/theme-provider/src/ThemeProvider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
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
    'button',
    `button--${variant}`,
    size !== 'medium' && `button--${size}`,
    loading && 'button--loading',
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
        <span className="button--loading" />
      )}
    </button>
  );
}
