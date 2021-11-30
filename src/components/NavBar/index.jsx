import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Tabs,
  Tab,
  MenuItem,
  Box,
  Menu,
  Button,
  useMediaQuery,
  IconButton,
  Skeleton
} from '@mui/material';
import { KeyboardArrowDown, Tune, ChevronLeft } from '@mui/icons-material';

import styles from './style.module.css';

import ElevationScroll from '../ElevationScroll';

function NavBarComponent(props) {
  const [value, setValue] = React.useState('All');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [label, setLabel] = React.useState('More');
  const { categories, selectCategory, selectedCategory, loading } = props;

  useEffect(() => {
    if (selectedCategory && selectedCategory !== value && value !== 'More') {
      setValue(selectedCategory);
    }
  }, [selectedCategory]);

  const handleChange = (event, newValue) => {
    if (label !== 'More') {
      setLabel('More');
    }
    setValue(newValue);
    selectCategory(newValue);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    handleClose();
    setValue('More');
    setLabel(menuItem);
    selectCategory(menuItem);
  };

  const mobileView = useMediaQuery('(max-width:600px)');
  const tabletView = useMediaQuery('(min-width:600px) and (max-width:960px)');
  const laptopView = useMediaQuery('(min-width:960px) and (max-width:1280px)');

  // eslint-disable-next-line no-nested-ternary
  const chunk = mobileView ? categories.length : tabletView ? 1 : laptopView ? 3 : 7;
  const tabData = categories.slice(0, chunk);
  const menuData = categories.slice(chunk, chunk < categories.length ? categories.length : 0);

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="default" position="sticky" className={styles.navbar}>
          <Toolbar className={styles.toolbar}>
            {mobileView && (
              <Box className={styles.mobileFilter}>
                <IconButton>
                  <ChevronLeft />
                </IconButton>
                <div className={styles.buttonContainer}>
                  <Button className={styles.buttonMobileFilterLeft}>Winter</Button>
                  <Button className={styles.buttonMobileFilterRight}>Guests</Button>
                </div>
                <IconButton>
                  <Tune />
                </IconButton>
              </Box>
            )}
            {!loading ? (
              <Box className={styles.boxOne}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={styles.tabs}
                  variant={mobileView ? 'scrollable' : 'standard'}>
                  <Tab className={styles.tab} key="All" label="All" value="All" />
                  {tabData.map((tab) => (
                    <Tab className={styles.tab} key={tab} label={tab} value={tab} />
                  ))}
                  {!mobileView && Boolean(menuData.length) && (
                    <Tab
                      className={styles.tab}
                      value="More"
                      label={label}
                      icon={<KeyboardArrowDown />}
                      onClick={handleClick}
                      iconPosition="end"
                    />
                  )}
                </Tabs>
                {!mobileView && Boolean(menuData.length) && (
                  <Menu
                    className={styles.menu}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center'
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center'
                    }}
                    onClose={handleClose}>
                    {menuData.map((tab) => (
                      <MenuItem
                        key={tab}
                        onClick={() => handleMenuItemClick(tab)}
                        className={styles.menuItem}>
                        {tab}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ) : (
              <Box sx={{ width: '100%' }}>
                <Skeleton variant="rectangular" height={40} />
              </Box>
            )}

            {!mobileView && (
              <Box className={styles.boxTwo}>
                <Button
                  variant="outlined"
                  className={styles.button}
                  endIcon={<KeyboardArrowDown />}>
                  Winter
                </Button>
                <Button
                  variant="outlined"
                  className={styles.button}
                  endIcon={<KeyboardArrowDown />}>
                  Guests
                </Button>
                <Button variant="outlined" className={styles.button} startIcon={<Tune />}>
                  Filters
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

NavBarComponent.defaultProps = {
  selectedCategory: '',
  loading: true
};

NavBarComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.oneOfType([PropTypes.string]),
  loading: PropTypes.bool
};

export default NavBarComponent;
