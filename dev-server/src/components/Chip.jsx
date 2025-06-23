import React from 'react';
import styles from './Chip.css';
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
    styles.chip,
    className,
    styles[`chip--${type}`],
    variant === 'outline' ? styles['chip--outline'] : '',
    styles[`chip--${size}`],
    onClick ? styles['chip--clickable'] : '',
    selected ? styles['chip--selected'] : '',
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
      {Icon && <Icon className={styles.chip__icon} />}
      <span>{children}</span>
      {onClose && (
        <button
          type="button"
          className={styles.chip__close}
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
