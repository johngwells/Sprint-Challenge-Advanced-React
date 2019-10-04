import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Players from './components/Players';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res);
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log('data not returned');
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Worlds Womens Cup
          </p>
          <Players players={this.state.players} />
          </header>
      </div>
    );
  }
}

export default App;
