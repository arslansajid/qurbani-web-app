import React from 'react';
import './App.css';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { theme } from './app_utils/MuiTheme';
import RouterRoutes from './app_utils/Routes';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <RouterRoutes></RouterRoutes>
            </StylesProvider>
        </MuiThemeProvider>
    );
};

export default App;
