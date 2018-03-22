import React, { Component } from 'react';
import './App.css';
import { showFetcher } from './services/showsFetcher';
import ShowList from './shows/ShowList';


class App extends Component {

  state = {
    shows: []
  }

  componentDidMount() {
    showFetcher.getData()
    .then(myShows => {
      this.setState({shows : myShows})
    });
  }
  render() {
   return <ShowList shows={this.state.shows}/>
  }
}

export default App;
