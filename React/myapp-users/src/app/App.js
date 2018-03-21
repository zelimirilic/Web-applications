import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/header";
import { Footer } from "./partials/footer";
import { UserList } from "./users/UserList";
import { userService } from '../service/UserService';
import { userFemale } from './users/Grid';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            listView: localStorage.getItem('listView') === "true"
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        userService.getData()
            .then(myUsers => {
                this.setState({ users: myUsers })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    changeView = (event) => {
        event.preventDefault();

        const newViewState = !this.state.listView;
        localStorage.setItem('listView', newViewState);

        this.setState({ listView: newViewState });
    }


    render() {
        return (
            <div>
                <Header onChangeViewClick={this.changeView} stateView={this.state.listView} onRefresh={this.loadUsers} />
                <div className="container">
                    <div className="row">
                        <UserList users={this.state.users} listView={this.state.listView} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default App;
