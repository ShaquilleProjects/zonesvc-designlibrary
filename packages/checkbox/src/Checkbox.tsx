import React from 'react';
import './Checkbox.css';
import { useTheme } from '@zone-ui/theme-provider';

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
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        {...props}
      />
      <span className="checkbox__control" />
      <span className="checkbox__label">{label}</span>
      {error && <div className="checkbox__error">{error}</div>}
    </label>
  );
}
