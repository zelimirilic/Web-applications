const UserItem = (props) => {
    return (
        <li className="collection-item avatar">
            <img src="{props.users.picture.thumbnail}" alt="" className="circle" />
                <span className="title">{props.users.name.title}</span>
            <p>{props.users.email}</p><br />
            <p>{props.users.dob}</p>
            <a href="#" className="secondary-content">
                <i className="material-icons">grade</i>
            </a>
        </li>
    )
}

const UserList = (props) => {
    return (
        <ul className="collection">
            {props.users.map((user, index) => <UserItem user={user} key={index}/>)}
        </ul>

    )
}


const Main = (props) => {
    return (
        <UserList users={props.x}/>
    )
}

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
            </div>
        </nav>)
}


const App = (props) => {
    return (
        <div>
            <Header />
            <Main x={props.data} />
        </div>

    )
}

const ourDiv = document.querySelector(".root");
ReactDOM.render(<App data={usersData} />, ourDiv);