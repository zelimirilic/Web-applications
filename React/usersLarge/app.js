
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" classname="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">

                </ul>
            </div>
        </nav>
    )
}

const Cards = (props) =>{
    
   
return (
    
        
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={props.data.picture.medium} />
              <span className="card-title">`{props.data.name.title} {props.data.name.first} {props.data.name.last}`</span>
            </div>
            <div className="card-content">
              <p>{props.data.email}</p>
              <p>`Date of birth:{props.data.dob}`</p>
              
            </div>
            <div className="card-action">
              <a href="#"></a>
            </div>
          </div>
        </div>
      
      
)
}

const Footer = () => {
    return (
        <footer className="page-footer">

          <div className="footer-copyright">
            <div className="container">
                <p> © 2014 Copyright Text </p>
            
            </div>
          </div>
        </footer>
        )
    }

    const App = (props) => {
        
        const usersList = props.data.map((el) => {
            return (<Cards data={el} />)
        
        })
     let rows = []

        for(let i = 0; i < usersList.length; i+=3){
            var oneRow = ( 
            <div className="row">
            {
                [
                    usersList[i],
                    usersList[i+1],
                    usersList[i+2],
                ]
            }
            </div>
            )
            rows.push(oneRow);
        }


        return (
            <div>
                <Navbar />
                 {rows}

                 <Footer />
            </div>
        )
    }
    

    ReactDOM.render(<App data={usersData}/>, document.querySelector(".root"))