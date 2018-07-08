import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pic: 0, text: 0, colors: 0 };
  }
  switchPic() {

    let newPic = (1 + this.state.pic + Math.floor(Math.random() * 5)) % 7;
    let newText = (1 + this.state.pic + Math.floor(Math.random() * 6)) % 8;
    console.log(newPic);
    console.log(newText);

    this.setState({ pic: newPic, text: newText })
  }



  render() {
    let random = ['Dat ben ikke...', 'en ik..', 'en jij???¿?', 'dit ook 🤖', 'dat ben IK', 'uhu...', 'wie ben jij?', 'gijzelf!']
    let colors = ['deeppink', 'goldenrod']

    return (
      <div className="App" onClick={() => this.switchPic()} >
        <img src={`./${this.state.pic}.jpg`} className="daniel" alt="logo" />
        <div className="datbenik" style={colors[this.state.color]}>
          {random[this.state.text]}  </div>
      </div >
    );
  }
}

export default App;
