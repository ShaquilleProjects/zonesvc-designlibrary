import React from 'react';
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): {
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
//# sourceMappingURL=ThemeProvider.d.ts.map