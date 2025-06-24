import React, { useState } from 'react';
import './Stepper.css';
import { useTheme } from '@zone-ui/theme-provider';

interface Step {
  title: string;
  description?: string;
  icon?: React.ComponentType;
  status?: 'active' | 'completed' | 'error' | 'warning' | 'info' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

interface StepperProps {
  steps: Step[];
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
  size?: 'small' | 'medium' | 'large';
  onChange?: (step: number) => void;
}

export function Stepper({
  steps,
  activeStep = 0,
  orientation = 'horizontal',
  className = '',
  rounded = false,
  shadow = false,
  size = 'medium',
  onChange,
}: StepperProps) {
  const theme = useTheme();

  const classes = [
    'stepper',
    className,
    `stepper--${orientation}`,
    rounded ? 'stepper--rounded' : '',
    shadow ? 'stepper--shadow' : '',
  ].filter(Boolean).join(' ');

  const handleStepClick = (index: number) => {
    if (steps[index].disabled) return;
    onChange?.(index);
  };

  return (
    <div className={classes} role="navigation" aria-label="Stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${'stepper__step'} ${
            `stepper__step--${size}`
          } ${
            index === activeStep ? 'stepper__step--active' : ''
          } ${
            step.status === 'completed'
              ? 'stepper__step--completed'
              : ''
          } ${
            step.status === 'error' ? 'stepper__step--error' : ''
          } ${
            step.status === 'warning' ? 'stepper__step--warning' : ''
          } ${
            step.status === 'info' ? 'stepper__step--info' : ''
          } ${
            step.status === 'secondary' ? 'stepper__step--secondary' : ''
          } ${
            step.disabled ? 'stepper__step--disabled' : ''
          }`}
          onClick={() => handleStepClick(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleStepClick(index);
            }
          }}
          role="tab"
          tabIndex={step.disabled ? -1 : 0}
          aria-selected={index === activeStep}
          aria-disabled={step.disabled}
        >
          <div className={`stepper__step__number`}>{index + 1}</div>
          <div>
            <div className={`stepper__step__title`}>{step.title}</div>
            {step.description && (
              <div className={`stepper__step__description`}>
                {step.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
