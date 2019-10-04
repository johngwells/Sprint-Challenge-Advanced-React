import React from 'react';
import './App.css';

import axios from 'axios';
import Players from './components/Players';
import LightMode from './components/LightMode';

class App extends React.Component {
  _isMounted = false;
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this._isMounted = true;

    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res);
        if (this._isMounted) {
          this.setState({ players: res.data });
        }
      })
      .catch(err => {
        console.log('data not returned');
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <LightMode />
        <header className='App-header'>
          <Players data-testid='players-header' players={this.state.players} />
        </header>
      </div>
    );
  }
}

export default App;
