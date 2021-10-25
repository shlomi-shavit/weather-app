import React from 'react';
import classes from './index.module.scss';
import logo from '../../images/weather-logo.png';

const Header = () => {

    return (
        <header>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>
            Weather app
        </header>
    )
};

export default Header;