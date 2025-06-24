import { forwardRef, ForwardedRef, useImperativeHandle, useRef } from 'react';
import './Input.module.css';

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
  value,
  onChange,
  ...props
}: InputProps, ref: ForwardedRef<InputRef>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  const inputProps: any = {
    ref: inputRef,
    className: 'input__input',
    ...props,
  };
  if (value !== undefined) {
    inputProps.value = value;
    if (onChange) {
      inputProps.onChange = onChange;
    } else {
      inputProps.readOnly = true;
    }
  } else {
    inputProps.defaultValue = props.defaultValue;
  }

  return (
    <div className={`input ${className}`}>
      {label && (
        <label className="input__label">{label}</label>
      )}
      <div className="input__wrapper">
        {prefix && <span className="input__prefix">{prefix}</span>}
        <input {...inputProps} />
      </div>
      {suffix && <span className="input__suffix">{suffix}</span>}
      {error && <span className="input__error">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
