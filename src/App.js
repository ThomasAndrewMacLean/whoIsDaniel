import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pic: './0.jpg', text: 'Dat ben ikke...' };
  }
  switchPic() {
    let random = ['en ik..', 'en jij???¿?', 'dit ook 🤖', 'dat ben IK', 'uhu...', 'wie ben jij?', 'gijzelf!']
    let x = Math.floor(Math.random() * 7);
    
    let y = Math.floor(Math.random() * 7);

    this.setState({ pic: x + '.jpg', text: random[y] })
  }



  render() {
    return (
      <div className="App" onClick={() => this.switchPic()} >
        <img src={this.state.pic} className="daniel" alt="logo" />
        <div className="datbenik">
          {this.state.text}  </div>
      </div>
    );
  }
}

export default App;
