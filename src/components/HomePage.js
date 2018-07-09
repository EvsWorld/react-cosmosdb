import React from 'react';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container">
        <divTitle title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <divText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</divText>
          ) : (
            <divText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</divText>
          )}
      </div>
    )
  }
};

export default HomePage;
