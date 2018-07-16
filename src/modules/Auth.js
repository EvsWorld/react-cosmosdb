class Auth {
  static async isUserAuthenticated() {
    // await response of fetch call
    let response = await fetch('/myauth/isloggedin', 
    {
      method: "GET",
      headers: { "Content-Type": "text/plain" },
   } );
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
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
/*   static async isUserAuthenticatedaold() {
    // trigger async function
    // log response or catch error of fetch promise
    const user = await this.fetchAsync()
        .then(data => {
          console.log('from fetchAsync(), data = ', data)
          return data;
        })
        .catch(reason => console.log(reason.message));
    console.log('user = ', user);
    console.log( 'undefined === true = ', undefined === true);
    return user;

  } */
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

export default Auth;
