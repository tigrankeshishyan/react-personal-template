import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Person from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'components/Link';

const styles = {
  appBar: {
    position: 'relative',
    top: 0,
  },
  toolbarTitle: {
    marginLeft: 15,
    flex: 1,
  },
  avatar: {
    cursor: 'pointer',
  },
};

class Header extends React.PureComponent {
  static defaultProps = {
    topBarData: [],
  };

  avatarRef = null;

  state = {
    isUserMenuOpen: false,
  };

  componentDidMount() {
    const {
      setTopBarNavigation,
    } = this.props;

    setTopBarNavigation();
  }

  toggleMenu = () => {
    this.setState({
      isUserMenuOpen: !this.state.isUserMenuOpen,
    });
  };

  onLogout = () => {
    this.props.logoutUser();
  };

  setAvatarRef = node => {
    this.avatarRef = node;
  };

  render() {
    const {
      user,
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
          <Typography
            className={classes.toolbarTitle}
            color="primary"
            variant="h6"
            noWrap
          >
            <Link to="/">
              Akpp website
            </Link>
          </Typography>
          {topBarData.map(link => (
            <Link to={link.path} key={link.title}>
              <Button>
                {link.title}
              </Button>
            </Link>
          ))}

          {
            user.id && (
              <React.Fragment>
                <Menu
                  id="user-menu"
                  anchorEl={this.avatarRef}
                  onClose={this.toggleMenu}
                  open={this.state.isUserMenuOpen}
                >
                  <MenuItem onClick={this.onLogout}>
                    Logout
                  </MenuItem>
                </Menu>

                <div
                  ref={this.setAvatarRef}
                  className={classes.avatar}
                >
                  <Avatar onClick={this.toggleMenu}>
                    <Person/>
                  </Avatar>
                </div>
              </React.Fragment>
            )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
