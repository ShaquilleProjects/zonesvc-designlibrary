import React, { useState } from 'react';
import './Drawer.css';
import { useTheme } from '@zone-ui/theme-provider';
import { Button } from '@zone-ui/button';
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
      className={`drawer__overlay drawer__overlay--show`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      tabIndex={-1}
    >
      <div
        className={`drawer ${className} drawer--${position} ${isOpen ? 'drawer--show' : ''} ${size === 'small' ? 'drawer--small' : ''} ${size === 'large' ? 'drawer--large' : ''} ${size === 'fullscreen' ? 'drawer--fullscreen' : ''} ${customWidth ? 'drawer--custom-width' : ''}`}
        style={{ width: customWidth }}
        role="region"
      >
        <div className="drawer__header">
          <h2 id="drawer-title" className="drawer__title">
            {title}
          </h2>
          <button
            type="button"
            className="drawer__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
        <div className="drawer__content">{children}</div>
        {actions ? (
          <div className="drawer__footer">
            <div className="drawer__actions">{actions}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
