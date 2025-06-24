import React from 'react';
import './Alert.css';
import { useTheme } from '@zone-ui/theme-provider';
import { X } from 'lucide-react';

interface AlertProps {
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  description?: string;
  icon?: React.ComponentType;
  dismissable?: boolean;
  onClose?: () => void;
  fullWidth?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  className?: string;
}

export function Alert({
  type,
  title,
  description,
  icon: Icon,
  dismissable,
  onClose,
  fullWidth,
  rounded,
  outlined,
  className = '',
}: AlertProps) {
  const theme = useTheme();

  return (
    <div
      className={`alert ${className} alert--${type} ${Icon ? 'alert--with-icon' : ''} ${dismissable ? 'alert--dismissable' : ''} ${fullWidth ? 'alert--full-width' : ''} ${rounded ? 'alert--rounded' : ''} ${outlined ? 'alert--outlined' : ''}`}
      role="alert"
    >
      {Icon && <Icon className="alert__icon" />}
      <div className="alert__content">
        {title && <div className="alert__title">{title}</div>}
        {description && <div className="alert__description">{description}</div>}
      </div>
      {dismissable && (
        <button
          type="button"
          className="alert__close"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
      )}
    </div>
  );
}
