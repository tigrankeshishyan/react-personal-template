import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentSection from 'sections/ContentSection';
import Auth from 'pages/Auth';
import routes from 'routes';

class MainApp extends React.Component {
  render() {
    const {
      isUserLoggedIn,
    } = this.props;

    if (!isUserLoggedIn) {
      return <Auth />;
    }

    return (
      <ContentSection>
        <Switch>
          {routes.map((route, index) => <Route {...route} key={index}/>)}
        </Switch>
      </ContentSection>
    );
  }
}

export default MainApp;
