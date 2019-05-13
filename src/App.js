import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MaterialThemeProvider from 'theme/MaterialThemeProvider';
import { configureStore } from 'redux/reducers'

// NOTE: Temporary disable footer
// import Footer from 'sections/Footer';
import Header from 'sections/Header';
import MainApp from 'sections/Mainapp';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MaterialThemeProvider>
        <BrowserRouter basename="/">
          <Header />
          <MainApp />
          {/*<Footer /> */}
        </BrowserRouter>
      </MaterialThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
