import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Switch,
    withStyles,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ThemeContext } from '../../contexts/ThemeContext';

import Styles from '../../styles/NavBarStyles';
import { withLanguageContext } from '../../contexts/LanguageContext';

const content = {
    english: {
        search: 'Search',
        flag: '🇺🇸',
    },
    french: {
        search: 'Chercher',
        flag: '🇫🇷',
    },
    spanish: {
        search: 'Buscar',
        flag: '🇪🇸',
    },
};

class NavBar extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const { classes } = this.props;
        const { language } = this.props.languageContext;

        return (
            <div className={classes.root}>
                <AppBar
                    position='static'
                    color={isDarkMode ? 'default' : 'primary'}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color='inherit'>
                            <span>{content[language].flag}</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant='h6'
                            color='inherit'>
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.row} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase
                                placeholder={`${content[language].search}...`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const app = withStyles(Styles, { withTheme: true })(NavBar);

export default withLanguageContext(app);
