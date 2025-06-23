import React, { createContext, useContext, ReactNode } from 'react';

// Create a basic theme object
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    text: string;
    background: string;
    border: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
  transition: string;
  cssVariables: {
    [key: string]: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#667085',
    danger: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    info: '#3b82f6',
    text: '#1f2937',
    background: '#ffffff',
    border: '#e5e8eb',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  borderRadius: '0.375rem',
  transition: 'all 0.2s ease-in-out',
  cssVariables: {
    'zui-space-unit': '0.25rem',
    'zui-font-family': 'system-ui, -apple-system, sans-serif',
    'zui-font-size-base': '1rem',
    'zui-line-height': '1.5',
    'zui-secondary': '#667085'
  }
};

// Create a ThemeContext
export const ThemeContext = createContext<typeof theme>(theme);

// Create a ThemeProvider component
export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

// Create a useTheme hook
export function useTheme() {
  return useContext(ThemeContext);
}
