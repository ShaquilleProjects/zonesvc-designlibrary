import React from 'react';
import './Spinner.css';
import { useTheme } from '@zone-ui/theme-provider';

interface SpinnerProps {
  text?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  justify?: 'center' | 'start' | 'end';
  rounded?: boolean;
  shadow?: boolean;
  borderless?: boolean;
  simple?: boolean;
  inline?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
}

export function Spinner({
  text,
  type = 'primary',
  size = 'medium',
  className = '',
  justify = 'center',
  rounded = false,
  shadow = false,
  borderless = false,
  simple = false,
  inline = false,
  centered = false,
  fullScreen = false,
}: SpinnerProps) {
  const theme = useTheme();

  const classes = [
    'spinner',
    className,
    `spinner--${justify}`,
    rounded ? 'spinner--rounded' : '',
    shadow ? 'spinner--shadow' : '',
    borderless ? 'spinner--borderless' : '',
    simple ? 'spinner--simple' : '',
    inline ? 'spinner--inline' : '',
    centered ? 'spinner--centered' : '',
    fullScreen ? 'spinner--full-screen' : '',
    `spinner--${size}`,
    `spinner--${type}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status">
      <div className="spinner__spinner" />
      {text && <span className="spinner__text">{text}</span>}
    </div>
  );
}
