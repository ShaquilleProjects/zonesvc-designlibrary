import React from 'react';
import styles from './Switch.css';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  rounded?: boolean;
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export function Switch({
  label,
  error,
  className,
  size = 'medium',
  disabled = false,
  required = false,
  ariaDescribedBy,
  style,
  ...props
}: SwitchProps) {
  const classes = [
    styles.switch,
    className,
    styles[`switch--${size}`],
  ].filter(Boolean).join(' ');

  return (
    <label
      className={classes}
      style={style}
      aria-live="polite"
      aria-errormessage={error ? ariaDescribedBy : undefined}
    >
      <input
        type="checkbox"
        className={styles.switch__input}
        checked={props.checked}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
      {label && (
        <span className={styles.switch__label}>{label}</span>
      )}
      <span className={styles.switch__control}>
        <span className={styles.switch__thumb} />
      </span>
      {error && (
        <div className={styles.switch__error} id={ariaDescribedBy}>
          {error}
        </div>
      )}
    </label>
  );
}
