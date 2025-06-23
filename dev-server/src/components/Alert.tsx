import React from 'react';
import styles from './Alert.css';
import { useTheme } from "/theme-provider';
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
      className={`${styles.alert} ${className} ${styles[`alert--${type}`]} ${
        Icon ? styles['alert--with-icon'] : ''
      } ${dismissable ? styles['alert--dismissable'] : ''} ${
        fullWidth ? styles['alert--full-width'] : ''
      } ${rounded ? styles['alert--rounded'] : ''} ${
        outlined ? styles['alert--outlined'] : ''
      }`}
      role="alert"
    >
      {Icon && <Icon className={styles.alert__icon} />}
      <div className={styles.alert__content}>
        {title && <div className={styles.alert__title}>{title}</div>}
        {description && <div className={styles.alert__description}>{description}</div>}
      </div>
      {dismissable && (
        <button
          type="button"
          className={styles.alert__close}
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
      )}
    </div>
  );
}
