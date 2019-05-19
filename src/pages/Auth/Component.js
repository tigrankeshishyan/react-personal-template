import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Registration from './Registration';
import Login from './Login';

const styles = theme => !console.log(theme) && ({
  paper: {
    margin: '0 auto',
    maxWidth: 600,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    marginTop: theme.spacing.unit * 8,
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
  },
});

const tabs = {
  log: 'login',
  reg: 'register',
};

const tabChild = {
  [tabs.log]: Login,
  [tabs.reg]: Registration,
};

function Auth({ classes }) {

  const [activeTab, setActiveTab] = useState(tabs.log);

  const handleTabChange = (event, value) => {
    setActiveTab(value);
  };

  const ActiveComp = tabChild[activeTab];

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon/>
      </Avatar>
      <Tabs
        value={activeTab}
        textColor="primary"
        indicatorColor="primary"
        onChange={handleTabChange}
      >
        <Tab
          label="Login"
          value={tabs.log}
        />
        <Tab
          label="Registration"
          value={tabs.reg}
        />
      </Tabs>

      <div className={classes.container}>
        <ActiveComp />
      </div>
    </Paper>
  );
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
