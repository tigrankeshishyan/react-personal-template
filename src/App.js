import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import MaterialThemeProvider from 'theme/MaterialThemeProvider';
import { configureStore } from 'redux/reducers'

import { withStyles } from '@material-ui/core/styles';
import ContentSection from 'sections/ContentSection';
import Footer from 'sections/Footer';
import Header from 'sections/Header';

import routes from 'routes';

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
          <Header/>
          <ContentSection>
            <Switch>
              {routes.map((route, index) => <Route {...route} key={index}/>)}
            </Switch>
          </ContentSection>
          <Footer/>
        </BrowserRouter>
      </MaterialThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
