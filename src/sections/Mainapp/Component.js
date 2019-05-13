import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentSection from 'sections/ContentSection';
import SignIn from 'pages/SignIn';
import routes from 'routes';

class MainApp extends React.Component {
  render() {
    const {
      isUserLoggedIn,
    } = this.props;

    if (!isUserLoggedIn) {
      return <SignIn />;
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
