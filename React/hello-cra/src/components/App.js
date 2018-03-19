// ovde se nalazi div koji se vidi na strani 

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Footer from './footer.js'
import Navbar from './navbar.js'
import Cards from './cards.js'
import UserList from './UserList';


const App = (props) => {
  const { data } = props;
  // const data = props.data;
  // const usersList = props.data.map((el) => {
  //   return (<Cards data={el} />)

  // })
  // let rows = []

  // for (let i = 0; i < usersList.length; i += 3) {
  //   var oneRow = (
  //     <div className="row">
  //       {
  //         [
  //           usersList[i],
  //           usersList[i + 1],
  //           usersList[i + 2],
  //         ]
  //       }
  //     </div>
  //   )
  //   rows.push(oneRow);
  // }


  return (
    <div>
      <Navbar />
      <UserList users={data} />
      <Footer />
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Hello Zeljko <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
