import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import user from 'redux/reducers/app/user';

import MainApp from './Component';

const {
  registerNewUser,
} = user.actions;

export default withRouter(connect(
  null,
  {
    registerNewUser,
  }
)(MainApp));
