import React, { useState } from 'react';
import styles from './Tabs.css';
import { useTheme } from '@zone-ui/theme-provider';

interface TabProps {
  title: string;
  icon?: React.ComponentType;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
  centered?: boolean;
  justified?: boolean;
  rounded?: boolean;
  pill?: boolean;
  icon?: boolean;
  initialActiveTab?: string;
}

export function Tab({ title, icon: Icon, children }: TabProps) {
  return (
    <div>
      <div className={styles.tabs__item}>
        {Icon && <Icon size={20} />}
        <span>{title}</span>
      </div>
      <div className={styles.tabs__content}>{children}</div>
    </div>
  );
}

export function Tabs({
  children,
  className = '',
  vertical = false,
  centered = false,
  justified = false,
  rounded = false,
  pill = false,
  icon = false,
  initialActiveTab,
}: TabsProps) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(initialActiveTab || '0');

  const classes = [
    styles.tabs,
    className,
    vertical ? styles['tabs--vertical'] : '',
    centered ? styles['tabs--centered'] : '',
    justified ? styles['tabs--justified'] : '',
    rounded ? styles['tabs--rounded'] : '',
    pill ? styles['tabs--pill'] : '',
    icon ? styles['tabs--icon'] : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} role="tablist">
      <div className={styles.tabs__list}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;

          const isActive = activeTab === String(index);
          const tabTitle = child.props.title;
          const tabIcon = child.props.icon;

          return (
            <div
              key={index}
              className={`${styles.tabs__item} ${isActive ? styles['tabs__item--active'] : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-content-${index}`}
              onClick={() => setActiveTab(String(index))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveTab(String(index));
                }
              }}
              tabIndex={0}
            >
              {tabIcon && <tabIcon size={20} />}
              <span>{tabTitle}</span>
            </div>
          );
        })}
      </div>

      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const isActive = activeTab === String(index);
        const tabContent = child.props.children;

        return (
          <div
            key={index}
            id={`tab-content-${index}`}
            className={styles.tabs__content}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={!isActive}
          >
            {tabContent}
          </div>
        );
      })}
    </div>
  );
}
