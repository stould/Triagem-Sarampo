import React, {Component} from 'react';
import PropTypes from 'prop-types';

//this class has purpose to create a component to be tested, just for examples purpose
class Button extends Component {

    constructor (props) {
        super(props);
        this.value = props.value;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        alert(this.value);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click-me
            </button>
        );
    }
}

Button.propTypes = {
    value: PropTypes.string
};

export default Button;