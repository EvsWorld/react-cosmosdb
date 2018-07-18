import  _  from 'lodash';
import { isEmpty } from 'lodash';
// import zlFetch from "zl-fetch";


/* 
zlFetch("http://some-website.com")
  .then(response => {
    const headers = response.headers;
    const body = response.body;
  })
  .catch(error => {
    const headers = response.headers;
    const body = response.body;
    const status = response.status;
  }); */


class Auth {
  static async authed () {
    // await response of fetch call
    let response = await fetch('https://localhost:3000/myauth/isloggedin', 
      {
        headers: { "Content-Type": "application/json; charset=utf-8"}
      }
    );
    // only proceed once promise is resolved
     let data = response.json();

    // only proceed once second promise is resolved
    console.log('\n\n\nresponse header.get(\'Content-Type\') = ', response.headers.get('Content-Type'));
    console.log('response.headers.get(\'Date\') = ', response.headers.get('Date'));
    console.log('response.status = ', response.status);
    console.log('response.statusText = ', response.statusText);
    console.log('response.type = ', response.type);
    console.log('response.url = ', response.url);
    console.log('data gotten from authed = ', data)
      const isUserLoggedIn = !isEmpty(data);
      console.log(' returned from authed(), isUserLoggedIn = ', isUserLoggedIn);
      return isUserLoggedIn;
  }
    /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */

 static async isUserAuthenticated () {
   return await this.authed()
   .then( data => {
      console.log('from isUserAuthenticated(), data = ', data)
      return data;
/*       const isUserLoggedIn = !isEmpty(data);
      console.log('from isUserAuthenticated(), isUserLoggedIn = ', isUserLoggedIn);
      return isUserLoggedIn; */
   } )
   .catch( reason => console.log(reason.message));
 } 

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

}

/*  NOTE: The static keyword defines a static method for a class. Static methods are 
called without instantiating their class and cannot be called through a class instance. 
Static methods are often used to create utility functions for an application. */

export default Auth;
