import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Question extends Component {

    constructor (props) {
        super(props);
        this.title = props.title;
        this.subtitle = props.subtitle;
        this.inputName = props.inputName;
        this.callBackFromParent = props.callBackFromParent;
        
    }
    
    handleCheckBoxChange = (event) => {
        this.props.callBackFromParent({
            currentAnswer: event.currentTarget.value,
            inputName: this.inputName
        });
    }

    render() {
        return (
            <div className="shadow p-3 mb-5 bg-white rounded">
                <h2>{this.title}</h2>
                <h6>{this.subtitle}</h6>

                <div className="form-check">
                    <div>
                        <input
                            className="form-check-input" 
                            type="radio"
                            name={this.inputName}
                            value="sim"
                            defaultChecked
                            onChange={this.handleCheckBoxChange}
                        ></input>
                        <label className="form-check-label">
                            Sim
                        </label>
                    </div>

                    <div>
                        <input
                            className="form-check-input" 
                            type="radio"
                            name={this.inputName}
                            value="nao"
                            onChange={this.handleCheckBoxChange}
                        ></input>
                        <label className="form-check-label">
                            Não
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

Question.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    inputName: PropTypes.string,
    callBackFromParent: PropTypes.func
};

export default Question;