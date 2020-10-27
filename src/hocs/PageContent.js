import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const PageContent = props => {
    const { isDarkMode } = useContext(ThemeContext);

    let styles = {
        backgroundColor: '#e3e8ef',
        height: '100vh',
        width: '100vw',
    };

    if (isDarkMode) styles.backgroundColor = '#201a1f';
    else styles.backgroundColor = '#e3e8ef';
    return <div style={styles}>{props.children}</div>;
};

export default PageContent;
