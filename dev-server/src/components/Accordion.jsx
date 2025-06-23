import React, { useState } from 'react';
import styles from './Accordion.css';
import { useTheme } from '@zone-ui/theme-provider';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

export function AccordionItem({
  title,
  children,
  expanded = false,
  onToggle,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(expanded);
  const theme = useTheme();

  const toggle = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <div className={styles.accordion__item}>
      <div
        className={`${styles.accordion__header} ${isOpen ? styles['accordion__header--active'] : ''}`}
        onClick={toggle}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <h3 className={styles.accordion__header-title}>{title}</h3>
        <ChevronDown className={styles.accordion__header-icon} />
      </div>
      <div
        className={styles.accordion__content}
        style={{
          maxHeight: isOpen ? 'none' : '0',
        }}
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.accordion__content-inner}>{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  className?: string;
  flush?: boolean;
  rounded?: boolean;
  bordered?: boolean;
  shadow?: boolean;
  compact?: boolean;
}

export function Accordion({
  children,
  multiple = false,
  className = '',
  flush,
  rounded,
  bordered,
  shadow,
  compact,
}: AccordionProps) {
  const classes = [
    styles.accordion,
    className,
    multiple ? styles['accordion--multiple'] : '',
    flush ? styles['accordion--flush'] : '',
    rounded ? styles['accordion--rounded'] : '',
    bordered ? styles['accordion--bordered'] : '',
    shadow ? styles['accordion--shadow'] : '',
    compact ? styles['accordion--compact'] : '',
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}
