import React from 'react';

import { Provider } from 'react-redux';
import ApplicationRoutes from './App.routes';
import GlobalThemeProvider from './HOC/GlobalThemeProvider';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalThemeProvider>
        <ApplicationRoutes />
      </GlobalThemeProvider>
    </Provider>
  );
}

export default App;
