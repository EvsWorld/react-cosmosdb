class Auth {
  static async fetchAsync() {
    // await response of fetch call
    let response = await fetch('https://localhost:3001/checkifloggedin', { 
      headers: {
        'Content-Type': 'application/json'
      }
   });
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
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
  static isUserAuthenticated() {
    // trigger async function
    // log response or catch error of fetch promise
    const fetchResult = this.fetchAsync()
        .then(data => {
          console.log('from fetchAsync(), data = ', data)
          return data;
        })
        .catch(reason => console.log(reason.message));

    // console.log('fetchResult = ', fetchResult);
    // console.log('fetchResult.user !== null = ', fetchResult.user !== null);
  
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

export default Auth;
