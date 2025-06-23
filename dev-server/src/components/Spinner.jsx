import React from 'react';
import styles from './Spinner.css';
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
    styles.spinner,
    className,
    styles[`spinner--${justify}`],
    rounded ? styles['spinner--rounded'] : '',
    shadow ? styles['spinner--shadow'] : '',
    borderless ? styles['spinner--borderless'] : '',
    simple ? styles['spinner--simple'] : '',
    inline ? styles['spinner--inline'] : '',
    centered ? styles['spinner--centered'] : '',
    fullScreen ? styles['spinner--full-screen'] : '',
    styles[`spinner--${size}`],
    styles[`spinner--${type}`],
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status">
      <div className={styles.spinner__spinner} />
      {text && <span className={styles.spinner__text}>{text}</span>}
    </div>
  );
}
