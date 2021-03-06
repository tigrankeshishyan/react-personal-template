import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function ContentSection({ classes, children }) {
  return (
    <main className={classes.layout}>
      {children}
    </main>
  );
}

export default withStyles(styles)(ContentSection);
