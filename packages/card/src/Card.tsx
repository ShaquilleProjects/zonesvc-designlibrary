import React from 'react';
import './Card.css';
import { useTheme } from '@zone-ui/theme-provider';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  actions?: React.ReactNode;
  className?: string;
  elevated?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  compact?: boolean;
  hoverable?: boolean;
}

export function Card({
  children,
  title,
  subtitle,
  image,
  overlay,
  actions,
  className = '',
  elevated,
  bordered,
  rounded,
  fullWidth,
  compact,
  hoverable,
}: CardProps) {
  const theme = useTheme();

  const hasHeader = title || subtitle || image;
  const hasFooter = actions;

  const classes = [
    'card',
    className,
    elevated ? 'card--elevated' : '',
    bordered ? 'card--bordered' : '',
    rounded ? 'card--rounded' : '',
    fullWidth ? 'card--full-width' : '',
    compact ? 'card--compact' : '',
    hoverable ? 'card--hoverable' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {hasHeader && (
        <div className="card__header">
          {image && overlay ? (
            <div className="card__image-container">
              <img src={image} alt="" className="card__image" />
              <div className="card__overlay">
                <h3 className="card__overlay-title">{title}</h3>
                {subtitle && (
                  <p className="card__overlay-subtitle">{subtitle}</p>
                )}
              </div>
            </div>
          ) : (
            <>
              {image && <img src={image} alt="" className="card__image" />}
              <h3 className="card__title">{title}</h3>
              {subtitle && (
                <p className="card__subtitle">{subtitle}</p>
              )}
            </>
          )}
        </div>
      )}

      <div className="card__content">{children}</div>

      {hasFooter && (
        <div className="card__footer">
          <div className="card__actions">{actions}</div>
        </div>
      )}
    </div>
  );
}
