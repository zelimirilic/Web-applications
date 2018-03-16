
const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{props.title}</a>
            </div>
        </nav>
    )
}


const PostItem = (props) => {

    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.post.title}</span>
                <p>{props.post.body}</p>
            </div>
        </div>
    )
}

const PostList = (props) => {
    return (<div className="col s12">
    
        { props.posts.map((post) => <PostItem post={post} key={post.id} /> ) } 
        {/* //key je da se ne bi bunio u konzoli :-) */}
     
    </div>
    )
}

const Main = (props) => {
    return (<div className="row">
        <PostList posts={props.bla} />
    </div>
    )

}

const App = (props) => {
    return (
        <div>
            <Header title="My React Blog" />
            <Main bla={props.data} />
        </div>
    )
}

const ourDiv = document.querySelector(".root");
ReactDOM.render(<App data={postsData} />, ourDiv)