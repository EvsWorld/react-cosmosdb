const baseAPI = '/api';

const heroService = {
  // refactor to use async await
  async get() {
    try {
      let response = await fetch(`${baseAPI}/heroes`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const body = await response.json();
      console.log(`body = `, body)
      return body;
    } catch (err) {
      console.log(err);
    }
    // return new Promise((resolve, reject) => {
    //   fetch(`${baseAPI}/heroes`)
    //     .then(response => response.json())
    //     .then(json => resolve(json))
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
  },

  async create(hero) {
    try {
      let response = await fetch(`${baseAPI}/hero`, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const body = await response.json();
      console.log(`body (from create) = `, body)
      return body;
    } catch (err) {
      console.log(err);
    }
    // return new Promise((resolve, reject) => {
    //   fetch(`${baseAPI}/hero`, {
    //       method: 'PUT',
    //       body: JSON.stringify(hero),
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then(result => result.json())
    //     .then(json => resolve(json))
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
  },

  update(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
          method: 'POST',
          body: JSON.stringify(hero),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(hero) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero/${hero.id}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default heroService;