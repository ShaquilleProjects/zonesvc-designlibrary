import React from 'react';
import styles from './Checkbox.css';
import { useTheme } from "/theme-provider';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

export function Checkbox({
  label,
  error,
  className = '',
  ...props
}: CheckboxProps) {
  const theme = useTheme();

  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        className={styles.checkbox__input}
        {...props}
      />
      <span className={styles.checkbox__control} />
      <span className={styles.checkbox__label}>{label}</span>
      {error && <div className={styles.checkbox__error}>{error}</div>}
    </label>
  );
}
