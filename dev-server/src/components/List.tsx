import React from 'react';
import styles from './List.css';
import { useTheme } from "/theme-provider';

interface ListProps {
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
  horizontal?: boolean;
  inline?: boolean;
  flush?: boolean;
  borderless?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  onClick?: () => void;
}

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType;
  thumbnail?: React.ReactNode;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  hoverable?: boolean;
}

export function List({
  children,
  className = '',
  vertical = true,
  horizontal = false,
  inline = false,
  flush = false,
  borderless = false,
  rounded = false,
  shadow = false,
  hoverable = false,
  striped = false,
  onClick,
}: ListProps) {
  const theme = useTheme();

  const classes = [
    styles.list,
    className,
    vertical ? styles['list--vertical'] : '',
    horizontal ? styles['list--horizontal'] : '',
    inline ? styles['list--inline'] : '',
    flush ? styles['list--flush'] : '',
    borderless ? styles['list--borderless'] : '',
    rounded ? styles['list--rounded'] : '',
    shadow ? styles['list--shadow'] : '',
    hoverable ? styles['list--hoverable'] : '',
    striped ? styles['list--striped'] : '',
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
    >
      {children}
    </div>
  );
}

export function ListItem({
  children,
  className = '',
  icon: Icon,
  thumbnail,
  title,
  description,
  actions,
  active = false,
  disabled = false,
  selected = false,
  onClick,
  hoverable = false,
}: ListItemProps) {
  const theme = useTheme();

  const classes = [
    styles.list__item,
    className,
    icon ? styles['list__item--icon'] : '',
    thumbnail ? styles['list__item--thumbnail'] : '',
    active ? styles['list__item--active'] : '',
    disabled ? styles['list__item--disabled'] : '',
    selected ? styles['list__item--selected'] : '',
    hoverable ? styles['list__item--hoverable'] : '',
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled) {
      onClick?.();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        onClick?.();
      }
    }
  };

  return (
    <div
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
    >
      {icon && <Icon size={20} />}
      {thumbnail && (
        <div className={styles.list__thumbnail}>{thumbnail}</div>
      )}
      {title || description ? (
        <div className={styles.list__content}>
          {title && <div className={styles.list__title}>{title}</div>}
          {description && (
            <div className={styles.list__description}>{description}</div>
          )}
        </div>
      ) : (
        children
      )}
      {actions && (
        <div className={styles.list__actions}>{actions}</div>
      )}
    </div>
  );
}
