import './_App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import React from 'react';

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
