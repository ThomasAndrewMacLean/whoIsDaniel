import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pic: 0, text: 0 };
  }
  switchPic() {

    let newPic = (this.state.pic + Math.floor(Math.random() * 6)) % 7;
    let newText = (this.state.pic + Math.floor(Math.random() * 7)) % 8;
    console.log(newPic);
    console.log(newText);

    this.setState({ pic: newPic, text: newText })
  }



  render() {
    let random = ['Dat ben ikke...', 'en ik..', 'en jij???¿?', 'dit ook 🤖', 'dat ben IK', 'uhu...', 'wie ben jij?', 'gijzelf!']
    return (
      <div className="App" onClick={() => this.switchPic()} >
        <img src={`./${this.state.pic}.jpg`} className="daniel" alt="logo" />
        <div className="datbenik">
          {random[this.state.text]}  </div>
      </div>
    );
  }
}

export default App;
