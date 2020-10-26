import React from 'react';
import Form from './Form';
import NavBar from './ui/NavBar';
import PageContent from '../hocs/PageContent';
import ThemeProvider from '../contexts/ThemeContext';
import LanguageProvider from '../contexts/LanguageContext';

const App = props => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <PageContent>
                    <NavBar />
                    <Form />
                </PageContent>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;
