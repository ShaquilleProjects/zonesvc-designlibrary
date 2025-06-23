import React from 'react';
import styles from './Sidebar.css';
import { useTheme } from "/theme-provider';
import { Button } from "/button';
import { Home, Bell, User, Settings, Logout } from 'lucide-react';

interface NavItem {
  icon: React.ComponentType;
  label: string;
  href: string;
  active?: boolean;
}

interface FooterItem {
  icon: React.ComponentType;
  label: string;
  onClick: () => void;
}

interface SidebarProps {
  logo?: string;
  navItems?: NavItem[];
  footerItems?: FooterItem[];
  className?: string;
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export function Sidebar({
  logo,
  navItems,
  footerItems,
  className = '',
}: SidebarProps) {
  const theme = useTheme();

  return (
    <div className={`${styles.sidebar} ${className}`}>
      <div className={styles.sidebar__header}>
        <img src={logo} alt="Logo" className={styles.sidebar__logo} />
      </div>

      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.sidebar__navItem}>
              <a
                href={item.href}
                className={`${styles.sidebar__navLink} ${item.active ? styles['sidebar__navLink--active'] : ''}`}
              >
                <item.icon className={styles.sidebar__navIcon} />
                <span className={styles.sidebar__navLabel}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.sidebar__footer}>
        <div className={styles.sidebar__footerContent}>
          {footerItems.map((item, index) => (
            <div
              key={index}
              className={styles.sidebar__footerItem}
              onClick={item.onClick}
            >
              <item.icon className={styles.sidebar__footerIcon} />
              <span className={styles.sidebar__footerText}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
