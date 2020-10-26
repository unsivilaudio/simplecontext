import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class PageContent extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkMode } = this.context;

        let styles = {
            backgroundColor: '#e3e8ef',
            height: '100vh',
            width: '100vw',
        };

        isDarkMode
            ? (styles.backgroundColor = '#201a1f')
            : (styles.backgroundColor = '#e3e8ef');
        return <div style={styles}>{this.props.children}</div>;
    }
}

export default PageContent;
