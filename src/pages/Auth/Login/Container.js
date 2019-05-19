import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import user from 'redux/reducers/app/user';

import MainApp from './Component';

const {
  loginUser,
} = user.actions;

export default withRouter(connect(
  null,
  {
    loginUser,
  }
)(MainApp));
