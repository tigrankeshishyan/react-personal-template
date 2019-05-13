import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormWrapper from '../FormWrapper';

class Registration extends React.PureComponent {
  render() {
    return (
      <FormWrapper
        buttonText="Register"
        onFormSubmit={this.props.registerNewUser}
        renderChild={onInputChange => {
          return (
            <React.Fragment>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <FormControl
                required
                fullWidth
                margin="normal"
              >
                <InputLabel htmlFor="email">
                  Email Address
                </InputLabel>
                <Input
                  autoFocus
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={onInputChange}
                />
              </FormControl>
              <FormControl
                fullWidth
                required
                margin="normal"
              >
                <InputLabel htmlFor="password">
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

              <FormControl
                required
                fullWidth
                margin="normal"
              >
                <InputLabel htmlFor="firstName">
                  First Name
                </InputLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={onInputChange}
                  autoComplete="firstName"
                />
              </FormControl>

              <FormControl
                required
                fullWidth
                margin="normal"
              >
                <InputLabel htmlFor="lastName">
                  Last Name
                </InputLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  onChange={onInputChange}
                  autoComplete="lastName"
                />
              </FormControl>
            </React.Fragment>
          )
        }}>

      </FormWrapper>
    );
  }
}

export default Registration;
