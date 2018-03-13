


class User {
    constructor(id, username, avatar) {
        this.id = id
        this.username = username
        this.avatar = avatar
    }

    getData() {
        const {
            id,
            username
        } = this
        return `ID: ${id}, UN: ${username}`
    }
}

// Exposed functions
const adaptData = (users) => {

    const userList = users.map((user) => {
        const {
            id,
            login,
            avatar_url
        } = user
        return new User(id, login, avatar_url)
    })

    return userList
}

return {
    constants,
    adaptData
}
export default User