import React from 'react';
import './Chip.css';
import { useTheme } from '@zone-ui/theme-provider';
import { X } from 'lucide-react';

interface ChipProps {
  children: React.ReactNode;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  variant?: 'filled' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ComponentType;
  onClick?: () => void;
  onClose?: () => void;
  selected?: boolean;
  className?: string;
}

export function Chip({
  children,
  type = 'secondary',
  variant = 'filled',
  size = 'medium',
  icon: Icon,
  onClick,
  onClose,
  selected = false,
  className = '',
}: ChipProps) {
  const theme = useTheme();

  const classes = [
    'chip',
    className,
    `chip--${type}`,
    variant === 'outline' ? 'chip--outline' : '',
    `chip--${size}`,
    onClick ? 'chip--clickable' : '',
    selected ? 'chip--selected' : '',
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-selected={selected}
    >
      {Icon && <Icon className="chip__icon" />}
      <span>{children}</span>
      {onClose && (
        <button
          type="button"
          className="chip__close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Remove"
        >
          <X />
        </button>
      )}
    </div>
  );
}
