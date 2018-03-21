import {User} from '../entities/User'


class UserService {

    getData() {
        return fetch('https://randomuser.me/api/?results=15')
            .then(result => {
                return result.json();

            })
            .then(users => {
                console.log(users);
                
                return users.results.map(user => {
                    return new User(user)

                })
            })

    }
}

export const userService = new UserService();