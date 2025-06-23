import React, { useState } from 'react';
import styles from './Modal.css';
import { useTheme } from '../../theme-provider';
import { Button } from "@zone-ui/button";"
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  centered?: boolean;
  withOverlay?: boolean;
  withAnimation?: boolean;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  size = 'medium',
  centered = false,
  withOverlay = true,
  withAnimation = true,
  className = '',
}: ModalProps) {
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
      className={`${styles.modal} ${className} ${withAnimation ? styles['modal--with-animation'] : ''} ${
        isOpen && withAnimation ? styles['modal--show'] : ''
      } ${size === 'small' ? styles['modal--small'] : ''} ${size === 'large' ? styles['modal--large'] : ''} ${
        size === 'fullscreen' ? styles['modal--fullscreen'] : ''
      } ${centered ? styles['modal--centered'] : ''}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2 id="modal-title" className={styles.modal__title}>
            {title}
          </h2>
          <button
            type="button"
            className={styles.modal__close}
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
        <div className={styles.modal__body}>{children}</div>
        {actions ? (
          <div className={styles.modal__footer}>
            <div className={styles.modal__actions}>{actions}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
