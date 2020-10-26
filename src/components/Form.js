import React from 'react';
import {
    Avatar,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    Typography,
    MenuItem,
    Select,
    withStyles,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import { LanguageContext } from '../contexts/LanguageContext';
import Styles from '../styles/FormStyles';

const words = {
    english: {
        signin: 'Sign In',
        email: 'Email',
        password: 'Password',
        remember: 'Remember Me?',
    },
    french: {
        signin: 'Se Connecter',
        email: 'Adresse Electronique',
        password: 'Mot De Passe',
        remember: 'Souviens-toi De Moi?',
    },
    spanish: {
        signin: 'Registrarse',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        remember: 'Recuérdame?',
    },
};

class Form extends React.Component {
    static contextType = LanguageContext;

    render() {
        const { classes } = this.props;
        const { language, changeLanguage } = this.context;
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>
                        {words[language].signin}
                    </Typography>
                    <Select
                        value={language}
                        onChange={e => changeLanguage(e.target.value)}
                        className={classes.select}>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>
                                {words[language].email}
                            </InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>
                                {words[language].password}
                            </InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label={words[language].remember}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            className={classes.submit}>
                            {words[language].signin}
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(Styles, { withTheme: true })(Form);
