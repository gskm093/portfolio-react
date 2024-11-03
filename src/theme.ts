// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0DB75F',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
        },
        h2: {
            fontSize: '2rem',
        },
        body1: {
            fontSize: '1rem',
            fontWeight:600
        }
    },
    spacing: 4, // Set global spacing unit if desired
});

export default theme;
