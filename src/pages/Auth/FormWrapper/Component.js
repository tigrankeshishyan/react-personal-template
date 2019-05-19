import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class FormWrapper extends React.PureComponent {
  formData = {
    // FIXME: Remove this after fetching user's data from server
    id: Math.random(),
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.formData);
  };

  handleChildChange = event => {
    const { value, name } = event.target;

    this.formData[name] = value;
  };

  render() {
    const {
      classes,
      buttonText,
      renderChild,
    } = this.props;

    return (
      <form onSubmit={this.onFormSubmit} className={classes.form}>
        {renderChild(this.handleChildChange)}
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          className={classes.submit}
        >
         {buttonText}
        </Button>
      </form>
    );
  }
}


export default withStyles(styles)(FormWrapper);
