import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }


  processFormEvan(event) {
    // TODO: submit email and password to the url below:
    // https://fsint1.dnv.com/adfs/ls/?SAMLRequest=fZFNS8QwEIb%2fSsg9TbMf2g3dwrKLUFARFQ%2feYjJhA21SM%2bm6%2fnuz7UmFvQ7vxzwzNaq%2bG%2bRuTEf%2fDJ8jYCLtYUudYUabW2PFihm71GxlrWHVotqwjVpsxFJV4kMbSt4gogt%2bSxdFSUmLOELrMSmf8qgUFStvmShfxY1clXJdFuuqeqfkkHucV2lyHlMaUHJu0fkkCuNPhQ49V8Yi75BTsg8e4RI4Ri%2bDQofSqx5QJi1fdg%2f3MndLPYvk6HEA7ayDvN257zzKifG6e4ghBR062tQTQ5yt100KEeKFgTYXhgkBzn8RsubkNCBPccRU8zm%2fqefLP%2bbU9vAUOqe%2fyV2IvbrCKQoxTfJ37CT9TbvruvC1j6ASbGluA0p4U%2fP%2fL25%2bAA%3d%3d&RelayState=9cce86fc-7869-421a-aa20-d04f79399741
  }




  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);

        // update authenticated state
        this.props.toggleAuthenticateStatus()

        // redirect signed in user to dashboard
        this.props.history.push('/dashboard');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
