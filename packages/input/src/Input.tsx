import { forwardRef, ForwardedRef, useImperativeHandle, useRef } from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
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
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
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
          ref={inputRef}
          className={styles.input__input}
          {...props}
        />
      </div>
      {suffix && <span className={styles.input__suffix}>{suffix}</span>}
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
