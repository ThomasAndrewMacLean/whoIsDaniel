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
                </ul>
                get in touch:

                <form onSubmit={(e) => this.sub(e)}>
                    <label className="label" htmlFor="email">email</label>
                    <br />
                    <input type="email" name="email" placeholder="email" id="email" />
                    <br />
                    <label className="label" htmlFor="email">message</label>
                    <textarea rows="4" cols="40" name="text" placeholder="blabla..." id="contactText" />
                    <br />
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
