import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pic: 0, text: 0, color: 0, left: 40, top: 50, camera: 'none' };
  }
  switchPic() {
    //TODO make more dynamic
    let newPic = (1 + this.state.pic + Math.floor(Math.random() * 5)) % 7;
    let newText = (1 + this.state.text + Math.floor(Math.random() * 6)) % 8;
    let newColor = (1 + this.state.color + Math.floor(Math.random() * 3)) % 5;
    let newLeft = (1 + this.state.left + Math.floor(Math.random() * 2)) % 5;
    let newTop = (1 + this.state.top + Math.floor(Math.random() * 2)) % 5;

    this.setState({ pic: newPic, text: newText, color: newColor, left: newLeft, top: newTop, camera: 'flex' })
  }



  render() {
    let random = ['Dat ben ikke...', 'en ik..', 'en jij???¿?', 'dit ook 🤖', 'dat ben IK', 'uhu...', 'wie ben jij?', 'gijzelf!']
    let top = [30, 60, 50, 10, 20];
    let left = [30, 40, 10, 20, 5];
    let colors = ['deeppink', 'goldenrod', 'yellowgreen', 'black', 'blue'];
    let colorStyle = {
      position: 'fixed',
      background: colors[this.state.color],
      left: left[this.state.left] + '%',
      top: top[this.state.top] + '%'
    }
    let cameraStyle = {
      display: this.state.camera
    }

    return (
      <div className="App"  >
        <img src={`./${this.state.pic}.jpg`} className="daniel" alt="logo" onClick={() => this.switchPic()} />
        <div className="datbenik" style={colorStyle}>
          {random[this.state.text]}  </div>
        <input type="file" id="addPhotoke" />
        <label style={cameraStyle} className="addPhotoBtn" for="addPhotoke"><span>📷</span>  </label>

      </div >
    );
  }
}

export default App;
