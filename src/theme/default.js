const defaultTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#686775',
      contrastText: '#222222'
    },
    secondary: {
      main: '#f8c765',
      contrastText: '#ffffff'
    },
    action: {
      selected: '#f8c765'
    }
  },
  typography: {
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background:
            'radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% )'
        }
      }
    }
  }
};

export default defaultTheme;
