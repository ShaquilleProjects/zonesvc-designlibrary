import React, { useState } from 'react';
import styles from './Navbar.css';
import { useTheme } from "/theme-provider';
import { Button } from "/button';
import { Search, User } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface UserMenuItem {
  label: string;
  onClick: () => void;
}

interface NavbarProps {
  brand: string;
  navItems: NavItem[];
  userMenuItems: UserMenuItem[];
  onSearch?: (query: string) => void;
  className?: string;
}

export function Navbar({
  brand,
  navItems,
  userMenuItems,
  onSearch,
  className = '',
}: NavbarProps) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleUserMenuClickOutside = (event: MouseEvent) => {
    if (!event.target) return;

    const userMenu = document.querySelector(`.${styles.navbar__userMenu}`);
    if (userMenu && !userMenu.contains(event.target as Node)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = handleUserMenuClickOutside;
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.navbar__brand}>{brand}</div>
      
      <div className={styles.navbar__nav}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.navbar__navItem} ${item.active ? styles['navbar__navItem--active'] : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className={styles.navbar__actions}>
        <div className={styles.navbar__search}>
          <input
            type="text"
            className={styles.navbar__searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Search className={styles.navbar__searchIcon} />
        </div>

        <div className={styles.navbar__userMenu}>
          <button
            className={styles.navbar__userMenuButton}
            onClick={handleUserMenuToggle}
          >
            <User />
          </button>
          {isUserMenuOpen && (
            <div className={styles.navbar__userMenuContent}>
              {userMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.navbar__userMenuItem}
                  onClick={item.onClick}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
