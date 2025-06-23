import React from 'react';
import styles from './Radio.css';
import { useTheme } from "/theme-provider';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

export function Radio({
  label,
  error,
  className = '',
  ...props
}: RadioProps) {
  const theme = useTheme();

  return (
    <label className={`${styles.radio} ${className}`}>
      <input
        type="radio"
        className={styles.radio__input}
        {...props}
      />
      <span className={styles.radio__control} />
      <span className={styles.radio__label}>{label}</span>
      {error && <div className={styles.radio__error}>{error}</div>}
    </label>
  );
}
