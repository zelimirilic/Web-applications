export class User {
    constructor(user) {
        this.picture = user.picture.large
        this.name = user.name.first +" "+ user.name.last
        this.email = user.email
        this.dateOfBirth = user.dob
        this.gender = user.gender
    }
}
        
