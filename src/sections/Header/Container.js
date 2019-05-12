import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import toBarNavigation from 'redux/reducers/app/topBarNavigation';
import { getTopBarNavigation } from 'redux/selectors';

import Header from './Component';

const {
  setTopBarNavigation,
} = toBarNavigation.actions;

const mapStateToProps = (state) => {
  return {
    topBarData: getTopBarNavigation(state),
  };
};

export default withRouter(connect(mapStateToProps, {
  setTopBarNavigation,
})(Header));
