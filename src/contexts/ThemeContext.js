import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = props => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(current => !current);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
