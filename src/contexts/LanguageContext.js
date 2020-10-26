import React from 'react';

export const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
    state = { language: 'french' };

    handleChangeLanguage = val => {
        this.setState({ language: val });
    };

    render() {
        return (
            <LanguageContext.Provider
                value={{
                    ...this.state,
                    changeLanguage: this.handleChangeLanguage,
                }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;

export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
);
