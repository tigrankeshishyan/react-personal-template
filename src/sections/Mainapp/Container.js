import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from 'redux/selectors';

import MainApp from './Component';

const mapStateToProps = state => {
  const userData = getUser(state);
  return {
    isUserLoggedIn: !!(userData && userData.id),
    user: userData,
  };
};

export default withRouter(connect(mapStateToProps)(MainApp));
