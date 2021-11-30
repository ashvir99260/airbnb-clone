import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

import defaultTheme from '../theme/default';

const GlobalThemeProvider = (props) => {
  const { children } = props;
  const theme = createTheme(defaultTheme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

GlobalThemeProvider.defaultProps = {};

GlobalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default GlobalThemeProvider;
