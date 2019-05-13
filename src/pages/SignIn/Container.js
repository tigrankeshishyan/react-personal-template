import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from 'redux/selectors';
import user from 'redux/reducers/app/user';
import SignIn from './Component';

const {
  setActiveUser,
} = user.actions;

const mapStateToProps = state => {
  const userData = getUser(state);
  return {
    isUserLoggedIn: !!(userData && userData.id),
    user: userData,
  };
};

export default withRouter(connect(
  mapStateToProps,
  {
    setActiveUser,
  }
)(SignIn));
