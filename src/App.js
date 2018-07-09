import React, { Component } from 'react';
import './App.css';
import * as api from './api/api';
import Tarot from './tarot';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { pic: 0, text: 0, color: 0, left: 40, top: 50, camera: 'none', tarot: null };
    }
    switchPic() {
        //TODO make more dynamic
        let newPic = (1 + this.state.pic + Math.floor(Math.random() * 5)) % 7;
        let newText = (1 + this.state.text + Math.floor(Math.random() * 6)) % 8;
        let newColor = (1 + this.state.color + Math.floor(Math.random() * 3)) % 5;
        let newLeft = (1 + this.state.left + Math.floor(Math.random() * 2)) % 5;
        let newTop = (1 + this.state.top + Math.floor(Math.random() * 2)) % 5;

        this.setState({ pic: newPic, text: newText, color: newColor, left: newLeft, top: newTop, camera: 'flex' });
    }
    getTarot() {
        fetch(api.tarotApi)
            .then(res => res.json())
            .then(tarot => {
                const upside = Math.random() > 0.5;
                console.log(tarot);

                const card = {
                    name: tarot.cards[0].name,
                    up: upside,
                    desc: tarot.cards[0].desc,
                    meaning: upside ? tarot.cards[0].meaning_rev : tarot.cards[0].meaning_up
                };
                this.setState({ tarot: card });
            }).catch(err => console.error(err));
    }
    closeTarot() {
        this.setState({ tarot: null });
    }
    handleChange(files) {
        console.log(files);
        const file = files[0];
        //   const cloudName = 'dizmjjtge';

        var fd = new FormData();
        fd.append('upload_preset', api.CLOUDINARY_UPLOAD_PRESET);
        fd.append('tags', 'whoIsDaniel'); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);

        axios(api.CLOUDINARY_URL + '/w_200', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencode'
            },
            data: fd
        }).then(img => {
            console.log(img);
            const url = img.data.secure_url;
            fetch(api.setDanielApi, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imgUrl: url
                })
            });
        }).catch(err => {
            console.log(err);
        });


        //var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', url, true);
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // xhr.send(fd);
    }
    render() {
        let random = ['Dat ben ikke...', 'en ik..', 'en jij???¿?', 'dit ook 🤖', 'dat ben IK', 'uhu...', 'wie ben jij?', 'gijzelf!'];
        let top = [30, 60, 50, 10, 20];
        let left = [30, 40, 10, 20, 5];
        let colors = ['deeppink', 'goldenrod', 'yellowgreen', 'black', 'blue'];
        let colorStyle = {
            position: 'fixed',
            background: colors[this.state.color],
            left: left[this.state.left] + '%',
            top: top[this.state.top] + '%'
        };
        let cameraStyle = {
            display: this.state.camera
        };

        return (
            <div className="App"  >
                <img src={`./${this.state.pic}.jpg`} className="daniel" alt="logo" onClick={() => this.switchPic()} />
                <div className="datbenik" style={colorStyle}>
                    {random[this.state.text]}  </div>
                <input type="file" id="addPhotoke" onChange={(e) => this.handleChange(e.target.files)} />
                <label style={cameraStyle} className="addPhotoBtn" htmlFor="addPhotoke"><span role="img" aria-label="camera">📷</span>  </label>
                <button onClick={() => this.getTarot()} style={cameraStyle} className="tarotBtn"><span role="img" aria-label="tarotcard">🃏</span></button>
                {this.state.tarot && <Tarot card={this.state.tarot} close={() => this.closeTarot()} />}
            </div >
        );
    }
}

export default App;
