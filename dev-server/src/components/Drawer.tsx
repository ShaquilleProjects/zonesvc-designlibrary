import React, { useState } from 'react';
import styles from './Drawer.css';
import { useTheme } from "/theme-provider';
import { Button } from "/button';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  customWidth?: string;
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  actions,
  position = 'right',
  size = 'medium',
  customWidth,
  className = '',
}: DrawerProps) {
  const theme = useTheme();

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.drawer__overlay} ${styles['drawer__overlay--show']}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      tabIndex={-1}
    >
      <div
        className={`${styles.drawer} ${className} ${styles[`drawer--${position}`]} ${
          isOpen ? styles['drawer--show'] : ''
        } ${size === 'small' ? styles['drawer--small'] : ''} ${size === 'large' ? styles['drawer--large'] : ''} ${
          size === 'fullscreen' ? styles['drawer--fullscreen'] : ''
        } ${customWidth ? styles['drawer--custom-width'] : ''}`}
        style={{ width: customWidth }}
        role="region"
      >
        <div className={styles.drawer__header}>
          <h2 id="drawer-title" className={styles.drawer__title}>
            {title}
          </h2>
          <button
            type="button"
            className={styles.drawer__close}
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
        <div className={styles.drawer__content}>{children}</div>
        {actions ? (
          <div className={styles.drawer__footer}>
            <div className={styles.drawer__actions}>{actions}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
