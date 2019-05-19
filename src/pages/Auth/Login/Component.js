import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormWrapper from '../FormWrapper';

class Login extends React.PureComponent {
  render() {
    return (
      <FormWrapper
        buttonText="Log In"
        onFormSubmit={this.props.loginUser}
        renderChild={onInputChange => {
          return (
            <React.Fragment>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <FormControl
                required
                fullWidth
                margin="normal"
              >
                <InputLabel
                  htmlFor="email"
                >
                  Email Address
                </InputLabel>
                <Input
                  autoFocus
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={onInputChange}
                />
              </FormControl>
              <FormControl
                fullWidth
                required
                margin="normal"
              >
                <InputLabel
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onInputChange}
                  autoComplete="current-password"
                />
              </FormControl>
            </React.Fragment>
          )
        }}>
      </FormWrapper>
    );
  }
}

export default Login;
