class Auth {
  static async fetchAsync () {
    // await response of fetch call
    let response = await fetch('/myauth/isloggedin', 
      {
        method: "GET",
        headers: { "Content-Type": "text/plain" },
      }
    );
    // only proceed once promise is resolved
    let data = await response.text();
    // only proceed once second promise is resolved
    console.log('response header = ', response.headers.get('Content-Type'));
    console.log('response.headers.get(\'Date\') = ', response.headers.get('Date'));

    console.log('response.status = ', response.status);
    console.log('response.statusText = ', response.statusText);
    console.log('response.type = ', response.type);
    console.log('response.url = ', response.url);
    console.log('isUserAuthenticated will return ', data)
    return data;
  }
    /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */

  static async isUserAuthenticated () {
    // trigger async function
    // log response or catch error of fetch promise
    const user = await Auth.fetchAsync ()
        .then(data => {
          console.log('from fetchAsync(), data = ', data)
          // return data;
          return false;
        })
        .catch(reason => console.log(reason.message));
    console.log('user = ', user);
    // return user;
    return false 


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
