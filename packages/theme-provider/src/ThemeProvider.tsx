import React, { createContext, useContext } from 'react';

interface ThemeContextType {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      danger: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      lineHeight: number;
    };
    spacing: {
      unit: string;
    };
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = {
    colors: {
      primary: '#0070f3',
      secondary: '#667085',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    spacing: {
      unit: '0.25rem',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <style>{`
        :root {
          /* Colors */
          --zui-primary: ${theme.colors.primary};
          --zui-secondary: ${theme.colors.secondary};
          --zui-success: ${theme.colors.success};
          --zui-warning: ${theme.colors.warning};
          --zui-danger: ${theme.colors.danger};

          /* Typography */
          --zui-font-family: ${theme.typography.fontFamily};
          --zui-font-size-base: ${theme.typography.fontSize};
          --zui-line-height: ${theme.typography.lineHeight};

          /* Spacing */
          --zui-space-unit: ${theme.spacing.unit};
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
}
