import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {
        return (
            <div className="contact" >
                <button className="closeTarot" onClick={() => this.props.close()}>back 👋</button>
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

                <form netlify>
                    <label className="label" htmlFor="email">email</label>
                    <br />
                    <input type="email" name="email" placeholder="email" id="email" />
                    <br />
                    <label className="label" htmlFor="email">message</label>
                    <textarea rows="4" cols="40" name="text" placeholder="blabla..." id="text" />
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
