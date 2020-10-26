import React, { Component } from 'react';

export const ThemeContext = React.createContext();

class ThemeProvider extends Component {
    state = { isDarkMode: false };

    toggleDarkMode = () => {
        this.setState(prev => {
            return { ...prev, isDarkMode: !prev.isDarkMode };
        });
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{ ...this.state, toggleTheme: this.toggleDarkMode }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
