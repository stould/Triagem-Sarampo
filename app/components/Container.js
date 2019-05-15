import React, {Component} from 'react';
import Question from './Question';
import {FORM_QUESTIONS} from '../constants/questions';

const STYLE_CONTAINER = {
    paddingTop: '5%',
    backgroundColor: 'white'
};

const STYLE_BUTTON = {
    marginLeft: '16.5%',
    padding: '10px'
};

class Container extends Component {

    constructor (props) {
        super(props);

        //stores the answers of the form
        this.questionsScore = new Map(FORM_QUESTIONS.map(question => { 
            return [
                question.inputName,
                this.calculateScore('sim', question.inputName)
            ];
        }));
    }

    //calculate score to a specific inputName
    calculateScore = (currentAnswer, inputName) => {
        let score = 0.0;
        const specialsymptoms = ['tosse','febre','manchas-avermelhadas'];

        if(currentAnswer == 'sim') {
            if(specialsymptoms.findIndex(inputName) != -1) {
                score = 4.0/3.0;
            } else {
                score = 0.75;
            }
        } else if (currentAnswer == 'nao') {
            score = 0.15;
        }

        return score;
    }

    //calculates the result from the form
    getResult = () => {
        const ranges = {
            'Alto indício de sarampo': [70, 100],
            'Indício de sarampo': [45, 69],
            'Baixo indício de sarampo': [0, 44],
        };

        let totalScore = 0.0;
        this.questionsScore.forEach(function(value) {
            totalScore += value;
        });
        const percentage = Math.ceil((100.0 * totalScore) / 10.0);

        for (var [key, value] of Object.entries(ranges)) {
            const low = value[0];
            const high = value[1];
            if(percentage >= low && percentage <= high) {
                return key;
            }
        }

        return null;
    }

    //callback from child
    questionCallBack = (answer) => {
        this.questionsScore.set(
            answer.inputName,
            this.calculateScore(answer.currentAnswer, answer.inputName)
        );
    }

    //handler to a button click event
    handleButtonClick = (event) => {
        event.preventDefault();
        alert(this.getResult());
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    </div>

                    <div
                        className="col-8 shadow-sm p-3 mb-5 bg-white rounded" 
                        style={STYLE_CONTAINER}
                    >
                        <h1>Sintomas de Sarampo</h1>
                        <h6>Assinale nos campos abaixo quais são os sintomas que o paciente está apresentado na consulta.</h6>
                        <br></br>
                        <h3>Assinale quais são os sintomas apresentados pelo paciente?</h3>
                        <br></br>
                        
                        {FORM_QUESTIONS.map((item, index) => (
                            <div key={index}>
                                <Question
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    inputName={item.inputName}
                                    callBackFromParent={this.questionCallBack}
                                />
                            </div>
                        ))}

                        <button 
                            className="btn btn-outline-primary col-8"
                            style={STYLE_BUTTON}
                            type="submit"
                            onClick={this.handleButtonClick}
                        >
                            Finalizar triagem
                        </button>
                    </div>

                    <div className="col-2">
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;