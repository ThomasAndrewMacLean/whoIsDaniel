import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from './../api/api';
class Contact extends Component {
    sub(e) {
        e.preventDefault();
        fetch(api.contactForm, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById('email').value,
                contactText: document.getElementById('contactText').value
            })
        }).then(x => {
            console.log(x);
            this.props.close();
        });
    }

    render() {
        return (
            <div className="contact" >
                <button className="closeTarot" onClick={() => this.props.close()}>back <span role="img" aria-label="close">👋</span></button>
                <ul>
                    <li>
                        you want contact with daniel?
                    </li>
                    <li>
                        you like his songs?
                    </li>
                    <li>
                        you want to marry him?
                    </li>
                    <li>
                        get in touch:
                    </li>
                </ul>
                <form onSubmit={(e) => this.sub(e)}>
                    <input type="name" name="email" placeholder="name" id="email" />
                    <textarea rows="4" cols="40" name="text" placeholder="blabla..." id="contactText" />

                    <input className="sendBtn" type="submit" value="send" />
                </form>

            </div >
        );
    }
}

Contact.propTypes = {
    close: PropTypes.function
};

export default Contact;
