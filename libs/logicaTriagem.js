import {
    QUESTIONS,
} from './constants';

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
    console.log(sum);
    const x = (100.0 * sum) / 10.0;
    return x;
}

export function getResult() {
    const totalScore = calculateScore();
    const percentage = getPercentage(totalScore);
    const ranges = {
        'Tem sarampo': [80, 100],
        'Alta chance de sarampo': [66, 80],
        'indicio de sarampo': [46, 65],
        'Baixo indicio de sarampo': [30, 45],
        'Não tem sarampo': [16.5, 30],
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
