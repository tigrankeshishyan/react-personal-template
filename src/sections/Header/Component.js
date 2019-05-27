import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import NavigationMenu from './NaviationMenu';

import ANMLogo from 'images/anm-logo.jpg';

const styles = {
  appBar: {
    position: 'relative',
    top: 0,
  },
  toolbarTitle: {
    marginLeft: 15,
    flex: 1,
  },
};

class Header extends React.PureComponent {
  static defaultProps = {
    topBarData: [],
  };

  componentDidMount() {
    const {
      setTopBarNavigation,
    } = this.props;

    setTopBarNavigation();
  }

  render() {
    const {
      classes,
      topBarData,
    } = this.props;

    return (
      <AppBar
        className={classes.appBar}
        position="sticky"
        color="default"
      >
        <Toolbar>
          <Link to="/">
            <Avatar src={ANMLogo}/>
          </Link>
          <Typography
            className={classes.toolbarTitle}
            color="primary"
            variant="h6"
            noWrap
          >
            Armenian National Music
          </Typography>

          <NavigationMenu data={topBarData} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
