import React from 'react';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    //TODO: fix this
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container">
        <div />
        <h5> "React Application" </h5>        
        <h5> "This is the home page." </h5>
          {Auth.isUserAuthenticated() ? (
            <div style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</div>
          ) : (
            <div style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</div>
          )}
      </div>
    )
  }
};

export default HomePage;
