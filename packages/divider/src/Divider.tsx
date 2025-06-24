import React from 'react';
import './Divider.css';
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
    'divider',
    className,
    vertical ? 'divider--vertical' : '',
    dashed ? 'divider--dashed' : '',
    dotted ? 'divider--dotted' : '',
    thick ? 'divider--thick' : '',
    thin ? 'divider--thin' : '',
    type ? `divider--${type}` : '',
    noLine ? 'divider--no-line' : '',
    `divider--${justify}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="separator">
      <div className="divider__line" />
      {children && (
        <div className="divider__content">{children}</div>
      )}
      <div className="divider__line" />
    </div>
  );
}
