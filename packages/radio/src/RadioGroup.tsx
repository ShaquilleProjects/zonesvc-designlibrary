import React, { useState } from 'react';
import { Radio } from './Radio';

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export const RadioGroup = ({
  name,
  value,
  onChange,
  options,
  className = '',
}: RadioGroupProps) => {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className={`radio-group ${className}`}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={handleChange}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
};
