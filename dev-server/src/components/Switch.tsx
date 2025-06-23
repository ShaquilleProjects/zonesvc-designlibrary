import React from 'react';
import styles from './Switch.css';
import { useTheme } from "/theme-provider';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  variant?: 'filled' | 'outline';
  rounded?: boolean;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export function Switch({
  label,
  error,
  className = '',
  size = 'medium',
  type = 'primary',
  variant = 'filled',
  rounded = false,
  disabled = false,
  required = false,
  ariaLabel,
  ariaDescribedBy,
  ...props
}: SwitchProps) {
  const theme = useTheme();

  const classes = [
    styles.switch,
    className,
    styles[`switch--${size}`],
    styles[`switch--${type}`],
    styles[`switch--${variant}`],
    rounded ? styles['switch--rounded'] : '',
  ].filter(Boolean).join(' ');

  return (
    <label
      className={classes}
      aria-live="polite"
      aria-errormessage={error ? ariaDescribedBy : undefined}
    >
      <input
        type="checkbox"
        className={styles.switch__input}
        aria-label={ariaLabel}
        aria-invalid={error ? 'true' : 'false'}
        aria-required={required}
        {...props}
      />
      <span className={styles.switch__control}>
        <span className={styles.switch__handle} />
      </span>
      {label && <span className={styles.switch__label}>{label}</span>}
      {error && (
        <div className={styles.switch__error} id={ariaDescribedBy}>
          {error}
        </div>
      )}
    </label>
  );
}
