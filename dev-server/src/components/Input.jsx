import React, { forwardRef, ForwardedRef, useImperativeHandle, useState } from 'react';
import styles from './Input.css';
import { useTheme } from '@zone-ui/theme-provider';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: string;
  className?: string;
}

export interface InputRef {
  focus: () => void;
}

export const Input = forwardRef(({
  label,
  prefix,
  suffix,
  error,
  className = '',
  ...props
}: InputProps, ref: ForwardedRef<InputRef>) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  useImperativeHandle(ref, () => ({
    focus: () => {
      const input = document.querySelector(`.${styles.input__input}`);
      input?.focus();
    },
  }));

  return (
    <div className={`${styles.input} ${className}`}>
      {label && (
        <label className={styles.input__label}>{label}</label>
      )}
      <div className={styles.input__wrapper}>
        {prefix && <span className={styles.input__prefix}>{prefix}</span>}
        <input
          className={styles.input__input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {suffix && <span className={styles.input__suffix}>{suffix}</span>}
      </div>
      {error && <div className={styles.input__error}>{error}</div>}
    </div>
  );
});

Input.displayName = 'Input';
