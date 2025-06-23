import React from 'react';
import styles from './Breadcrumb.css';
import { useTheme } from '@zone-ui/theme-provider';

interface BreadcrumbItem {
  title: string;
  href?: string;
  icon?: React.ComponentType;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  centered?: boolean;
  right?: boolean;
  icon?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  compact?: boolean;
  separator?: string;
}

export function Breadcrumb({
  items,
  className = '',
  centered = false,
  right = false,
  icon = false,
  rounded = false,
  shadow = false,
  compact = false,
  separator = '/',
}: BreadcrumbProps) {
  const theme = useTheme();

  const classes = [
    styles.breadcrumb,
    className,
    centered ? styles['breadcrumb--centered'] : '',
    right ? styles['breadcrumb--right'] : '',
    icon ? styles['breadcrumb--icon'] : '',
    rounded ? styles['breadcrumb--rounded'] : '',
    shadow ? styles['breadcrumb--shadow'] : '',
    compact ? styles['breadcrumb--compact'] : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className={styles.breadcrumb__item}>
          {item.icon && <item.icon size={16} />}
          {item.href ? (
            <a
              href={item.href}
              className={`${styles.breadcrumb__link} ${
                item.current ? styles.breadcrumb__current : ''
              }`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.title}
            </a>
          ) : (
            <span
              className={`${styles.breadcrumb__link} ${
                item.current ? styles.breadcrumb__current : ''
              }`}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.title}
            </span>
          )}
          {index < items.length - 1 && (
            <span className={styles.breadcrumb__separator}>{separator}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
