import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarot extends Component {
    render() {
        return (
            <div className="tarot" >
                <button className="closeTarot" onClick={() => this.props.close()}>close <span role="img" aria-label="close">✌️</span></button>
                {!this.props.card.loading &&
                    <div className="tarotName">
                        {this.props.card.name}
                        {this.props.card.up ? '🙂' : '🙃'}
                    </div>
                }

                <div className="tarotMeaning">
                    {this.props.card.loading && <div className="loader" ></div>}
                    {this.props.card.meaning}
                </div>
                {!this.props.card.loading &&
                    <div className="tarotDescription">
                        {this.props.card.desc}
                    </div>}
                {!this.props.card.loading &&
                    <button className="closeTarot" onClick={() => this.props.close()}>close <span role="img" aria-label="close">☮️</span></button>
                }
            </div >
        );
    }
}

Tarot.propTypes = {
    card: PropTypes.shape({
        up: PropTypes.bool,
        name: PropTypes.string,
        meaning: PropTypes.string,
        desc: PropTypes.string,
        loading: PropTypes.bool
    }),
    close: PropTypes.function
};

export default Tarot;
