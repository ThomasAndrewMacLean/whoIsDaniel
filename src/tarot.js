import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarot extends Component {
    render() {
        return (
            <div className="tarot" >
                <button className="closeTarot" onClick={() => this.props.close()}>close ✌️</button>
                <div className="tarotName">
                    {this.props.card.name}
                    {this.props.card.up ? '🙂' : '🙃'}
                </div>
                <div className="tarotMeaning">
                    {this.props.card.meaning}
                </div>
                <div className="tarotDescription">
                    {this.props.card.desc}
                </div>
                <button className="closeTarot" onClick={() => this.props.close()}>close ☮️</button>

            </div >
        );
    }
}

Tarot.propTypes = {
    card: PropTypes.shape({
        up: PropTypes.bool,
        name: PropTypes.string,
        meaning: PropTypes.string,
        desc: PropTypes.string
    }),
    close: PropTypes.function
};

export default Tarot;
