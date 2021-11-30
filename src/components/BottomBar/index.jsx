import * as React from 'react';

import { BottomNavigation, Paper, BottomNavigationAction } from '@mui/material';
import { Favorite, Search, AccountCircle } from '@mui/icons-material';

function BottomBar() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Explore" icon={<Search />} />
        <BottomNavigationAction label="Wishlists" icon={<Favorite />} />
        <BottomNavigationAction label="Login" icon={<AccountCircle />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomBar;
