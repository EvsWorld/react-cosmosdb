import React, { Component } from 'react';
// import routes from './routes.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import LogoutFunction from './containers/LogoutFunction';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';
import Auth from './modules/Auth';
import Heroes from './components/Heroes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
        <Router>
          <div>
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">React App</Link>
              </div>
              {this.state.authenticated ? (
                <div >
                  <Link to="/">Homepage</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/heros">Heros</Link>
                  <Link to="/logout">Log out</Link>
                </div>
              ) : (
                <div >
                  <a href="https://localhost:3000/login"> Login?? </a>
                  {/* <Link to="/login">Log in</Link> */}
                  <Link to="/signup">Sign up</Link>
                </div>
              )}

            </div>

            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} /> 
            <PrivateRoute path="/dashboard" component={DashboardPage}/> 
            <PrivateRoute path="/heros" component={Heroes}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            
          </div>

        </Router>
    );
  }
}

export default Main;
  