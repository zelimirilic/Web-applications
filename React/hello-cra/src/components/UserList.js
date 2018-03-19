import React from 'react';
import UserItem from './UserItem';
import { userService } from "../services/UserService";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService
            .getData()
            .then(myUsers => {
                console.log(myUsers);
                this.setState({users: myUsers})
            })

    }

    render() {

        return (
            <div className="row">
                {this.state.users.map((user, index) => <UserItem key={index} user={user} />)}
            </div>
        )
    }
}
