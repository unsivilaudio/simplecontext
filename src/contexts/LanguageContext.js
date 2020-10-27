import React, { useState } from 'react';

export const LanguageContext = React.createContext();

export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
);

const LanguageProvider = props => {
    const [language, setLanguage] = useState('english');

    const changeLanguage = val => {
        setLanguage(val);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
            }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
