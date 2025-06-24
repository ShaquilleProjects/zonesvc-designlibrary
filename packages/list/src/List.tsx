import React from 'react';
import './List.css';
import { useTheme } from '@zone-ui/theme-provider';

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
    'list',
    className,
    vertical ? 'list--vertical' : '',
    horizontal ? 'list--horizontal' : '',
    inline ? 'list--inline' : '',
    flush ? 'list--flush' : '',
    borderless ? 'list--borderless' : '',
    rounded ? 'list--rounded' : '',
    shadow ? 'list--shadow' : '',
    hoverable ? 'list--hoverable' : '',
    striped ? 'list--striped' : '',
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
    'list__item',
    className,
    Icon ? 'list__item--icon' : '',
    thumbnail ? 'list__item--thumbnail' : '',
    active ? 'list__item--active' : '',
    disabled ? 'list__item--disabled' : '',
    selected ? 'list__item--selected' : '',
    hoverable ? 'list__item--hoverable' : '',
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
      {Icon && <Icon />}
      {thumbnail && (
        <div className="list__thumbnail">{thumbnail}</div>
      )}
      {title || description ? (
        <div className="list__content">
          {title && <div className="list__title">{title}</div>}
          {description && (
            <div className="list__description">{description}</div>
          )}
        </div>
      ) : (
        children
      )}
      {actions && (
        <div className="list__actions">{actions}</div>
      )}
    </div>
  );
}
