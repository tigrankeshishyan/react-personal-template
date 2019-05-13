import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import user from 'redux/reducers/app/user';
import toBarNavigation from 'redux/reducers/app/topBarNavigation';
import { getTopBarNavigation, getUser } from 'redux/selectors';

import Header from './Component';

const {
  setTopBarNavigation,
} = toBarNavigation.actions;

const {
  logoutUser
} = user.actions;

const mapStateToProps = (state) => {
  return {
    user: getUser(state) || {},
    topBarData: getTopBarNavigation(state),
  };
};

export default withRouter(connect(mapStateToProps, {
  setTopBarNavigation,
  logoutUser,
})(Header));
