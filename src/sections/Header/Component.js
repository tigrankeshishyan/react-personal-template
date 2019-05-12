import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

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
          <Typography
            className={classes.toolbarTitle}
            color="primary"
            variant="h6"
            noWrap
          >
            <Link to="/">
              Personal Template
            </Link>
          </Typography>
          {topBarData.map(link => (
            <Link to={link.path} key={link.title}>
              <Button>
                {link.title}
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
