import React, { useState } from 'react';
import './Modal.css';
import { useTheme } from '@zone-ui/theme-provider';
import { Button } from '../../button/src/Button';
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
      className={`modal ${className} ${withAnimation ? 'modal--with-animation' : ''} ${
        isOpen && withAnimation ? 'modal--show' : ''
      } ${size === 'small' ? 'modal--small' : ''} ${size === 'large' ? 'modal--large' : ''} ${
        size === 'fullscreen' ? 'modal--fullscreen' : ''
      } ${centered ? 'modal--centered' : ''}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="modal__content">
        <div className="modal__header">
          <h2 id="modal-title" className="modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
        <div className="modal__body">{children}</div>
        {actions ? (
          <div className="modal__footer">
            <div className="modal__actions">{actions}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
