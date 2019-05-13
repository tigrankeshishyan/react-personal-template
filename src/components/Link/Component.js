import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  link: {
    '&, &:hover, &:focus, &:active, &:visited': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    }
  },
});


function LinkComp({ classes, className, ...props }) {
  return <Link className={classNames(className, classes.link)} {...props} />
}

LinkComp.defaultProps = {
  className: '',
};

export default withStyles(styles)(LinkComp);
