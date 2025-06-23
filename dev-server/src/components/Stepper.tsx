import React, { useState } from 'react';
import styles from './Stepper.css';
import { useTheme } from "/theme-provider';

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
    styles.stepper,
    className,
    styles[`stepper--${orientation}`],
    rounded ? styles['stepper--rounded'] : '',
    shadow ? styles['stepper--shadow'] : '',
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
          className={`${styles.stepper__step} ${
            styles[`stepper__step--${size}`]
          } ${
            index === activeStep ? styles['stepper__step--active'] : ''
          } ${
            step.status === 'completed'
              ? styles['stepper__step--completed']
              : ''
          } ${
            step.status === 'error' ? styles['stepper__step--error'] : ''
          } ${
            step.status === 'warning' ? styles['stepper__step--warning'] : ''
          } ${
            step.status === 'info' ? styles['stepper__step--info'] : ''
          } ${
            step.status === 'secondary' ? styles['stepper__step--secondary'] : ''
          } ${
            step.disabled ? styles['stepper__step--disabled'] : ''
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
          <div className={styles.stepper__step__number}>{index + 1}</div>
          <div>
            <div className={styles.stepper__step__title}>{step.title}</div>
            {step.description && (
              <div className={styles.stepper__step__description}>
                {step.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
