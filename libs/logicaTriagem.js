import {
    QUESTIONS,
} from '../libs/questions';

/**
 * Get the score of all questions
 */
function calculateScore() {
    let totalScore = 0.0;
    for(let  i = 0; i < QUESTIONS.length; i++) {
        const currentRadioAnswer = document.querySelector('input[name="' + QUESTIONS[i].inputName + '"]:checked').value;
        if(currentRadioAnswer == 'sim') {
            const symptom = QUESTIONS[i].inputName;
            if(symptom == 'tosse' || symptom == 'febre' || symptom == 'manchas-avermelhadas') {
                totalScore += 4.0/3.0;
            } else {
                totalScore += 0.75;
            }
        } else if (currentRadioAnswer == 'nao') {
            totalScore += 0.15;
        }
    }
    return totalScore;
}

function getPercentage(sum) {
    return (100.0 * sum) / 10.0;
}

export function getResult() {
    const totalScore = calculateScore();
    const percentage = Math.ceil(getPercentage(totalScore));
    const ranges = {
        'Alto indício de sarampo': [70, 100],
        'Indício de sarampo': [45, 69],
        'Baixo indício de sarampo': [0, 44],
    };
    for (var [key, value] of Object.entries(ranges)) {
        const low = value[0];
        const high = value[1];
        if(percentage >= low && percentage <= high) {
            return key;
        }
    }
    return null;
}
