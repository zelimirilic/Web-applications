class UserService {
  getData() {
    return fetch(`https://randomuser.me/api/?results=15`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        return data.results
      })

  }
}

export const userService = new UserService();