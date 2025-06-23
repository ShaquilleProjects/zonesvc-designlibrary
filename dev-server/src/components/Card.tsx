import React from 'react';
import styles from './Card.css';
import { useTheme } from "/theme-provider';

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
    styles.card,
    className,
    elevated ? styles['card--elevated'] : '',
    bordered ? styles['card--bordered'] : '',
    rounded ? styles['card--rounded'] : '',
    fullWidth ? styles['card--full-width'] : '',
    compact ? styles['card--compact'] : '',
    hoverable ? styles['card--hoverable'] : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {hasHeader && (
        <div className={styles.card__header}>
          {image && overlay ? (
            <div className={styles.card__image-container}>
              <img src={image} alt="" className={styles.card__image} />
              <div className={styles.card__overlay}>
                <h3 className={styles.card__overlay-title}>{title}</h3>
                {subtitle && (
                  <p className={styles.card__overlay-subtitle}>{subtitle}</p>
                )}
              </div>
            </div>
          ) : (
            <>
              {image && <img src={image} alt="" className={styles.card__image} />}
              <h3 className={styles.card__title}>{title}</h3>
              {subtitle && (
                <p className={styles.card__subtitle}>{subtitle}</p>
              )}
            </>
          )}
        </div>
      )}

      <div className={styles.card__content}>{children}</div>

      {hasFooter && (
        <div className={styles.card__footer}>
          <div className={styles.card__actions}>{actions}</div>
        </div>
      )}
    </div>
  );
}
