import React, { useState, useRef, useEffect, forwardRef, ForwardedRef, useImperativeHandle } from 'react';
import './Select.css';
import { useTheme } from '@zone-ui/theme-provider';
import { Button } from '../../button/src/Button';
import { ChevronDown } from 'lucide-react';

export interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export interface SelectRef {
  focus: () => void;
}

export const Select = forwardRef(({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className = '',
  ...props
}: SelectProps, ref: ForwardedRef<SelectRef>) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = handleClickOutside;
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div
      ref={containerRef}
      className={`select ${className}`}
      {...props}
    >
      {label && (
        <label className={`select__label`}>{label}</label>
      )}
      
      <div
        className={`select__trigger${isOpen ? ' select__trigger--open' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        ref={inputRef}
      >
        <div className={`select__value`}>
          {selectedOption ? selectedOption.label : (
            <span className={`select__placeholder`}>{placeholder}</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="small"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <ChevronDown className={`select__icon`} />
        </Button>
      </div>

      {isOpen && (
        <div className={`select__menu`}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`select__option ${
                option.disabled ? 'select__option.disabled' : ''
              } ${
                option.value === value ? 'select__option.selected' : ''
              }`}
              onClick={() => {
                if (!option.disabled) {
                  onChange?.(option.value);
                  setIsOpen(false);
                }
              }}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && <div className={`select__error`}>{error}</div>}
    </div>
  );
});

Select.displayName = 'Select';
