import React from 'react';
import { Link } from 'react-router-dom';

import { Button, IconButton, useMediaQuery, AppBar, Toolbar } from '@mui/material';
import { AccountCircle, Language, Menu } from '@mui/icons-material';

import HideOnScroll from '../HideOnScroll';

import styles from './style.module.css';

function HeaderComponent(props) {
  const tablet = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <HideOnScroll {...props}>
      <AppBar position="relative">
        <Toolbar className={styles.toolbar}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <Link to="/">
                <img
                  className={tablet ? styles.headerIcon : styles.icon}
                  src={tablet ? 'images/logo.svg' : 'images/Airbnb_logo.svg'}
                  alt="logo"
                />
              </Link>
            </div>

            <div className={styles.headerRight}>
              <Button variant="text" fullWidth className={styles.becomeHostButton}>
                Become a host
              </Button>

              <IconButton>
                <Language />
              </IconButton>

              <IconButton className={styles.menuButton}>
                <Menu />
                <AccountCircle />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default HeaderComponent;
