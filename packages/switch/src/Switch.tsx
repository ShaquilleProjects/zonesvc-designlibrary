import React from 'react';
import './Switch.css';

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
    'switch',
    className,
    `switch--${size}`,
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
        className="switch__input"
        checked={props.checked}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
      {label && (
        <span className="switch__label">
          {label}
        </span>
      )}
      <span className="switch__control">
        <span className="switch__thumb" />
      </span>
      {error && (
        <div className="switch__error" id={ariaDescribedBy}>
          {error}
        </div>
      )}
    </label>
  );
}
