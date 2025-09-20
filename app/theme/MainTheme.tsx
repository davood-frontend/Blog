"use client"
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-dosis)',
        fontSize: 14,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        body1: { fontSize: '1.2rem', fontWeight: 400 },
        body2: { fontSize: '1rem', fontWeight: 400 },
        h1: { fontSize: '4rem', fontWeight: 400 },
        h2: { fontSize: '3.5rem', fontWeight: 400 },
        h3: { fontSize: '3rem', fontWeight: 400 },
        h4: { fontSize: '2.5rem', fontWeight: 400 },
        h5: { fontSize: '2rem', fontWeight: 400 },
        h6: { fontSize: '1.5rem', fontWeight: 400 },

    }
})

const MainTheme = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default MainTheme;