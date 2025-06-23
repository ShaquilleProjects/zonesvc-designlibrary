import React from 'react';
import styles from './Divider.css';
import { useTheme } from '@zone-ui/theme-provider';

interface DividerProps {
  children?: React.ReactNode;
  vertical?: boolean;
  dashed?: boolean;
  dotted?: boolean;
  thick?: boolean;
  thin?: boolean;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  noLine?: boolean;
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
}

export function Divider({
  children,
  vertical = false,
  dashed = false,
  dotted = false,
  thick = false,
  thin = false,
  type,
  noLine = false,
  justify = 'center',
  className = '',
}: DividerProps) {
  const theme = useTheme();

  const classes = [
    styles.divider,
    className,
    vertical ? styles['divider--vertical'] : '',
    dashed ? styles['divider--dashed'] : '',
    dotted ? styles['divider--dotted'] : '',
    thick ? styles['divider--thick'] : '',
    thin ? styles['divider--thin'] : '',
    type ? styles[`divider--${type}`] : '',
    noLine ? styles['divider--no-line'] : '',
    styles[`divider--${justify}`],
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="separator">
      <div className={styles.divider__line} />
      {children && (
        <div className={styles.divider__content}>{children}</div>
      )}
      <div className={styles.divider__line} />
    </div>
  );
}
