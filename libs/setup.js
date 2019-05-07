import {
    getResult,
} from '../libs/logicaTriagem';

import {
    QUESTIONS,
} from '../libs/questions';

function buildForm(questionsContainer) {
    for(let i = 0; i < QUESTIONS.length; i++) {
        const question = QUESTIONS[i];

        const containerDiv = document.createElement('div');
        containerDiv.className += 'shadow p-3 mb-5 bg-white rounded';

        const br = document.createElement('br');

        const h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(question.title));
        containerDiv.appendChild(h2);

        const h6 = document.createElement('h6');
        h6.appendChild(document.createTextNode(question.subtitle));
        containerDiv.appendChild(h6);

        const optsRadio = ['sim', 'nao'];
        const optsContent = ['Sim', 'Não'];

        for(let i = 0; i < optsRadio.length; i++) {
            const formDiv = document.createElement('div');
            formDiv.className += 'form-check';

            const formInput = document.createElement('input');
            formInput.className += 'form-check-input';
            formInput.setAttribute('type', 'radio');
            formInput.setAttribute('name', question.inputName);
            formInput.setAttribute('id', question.inputName);
            formInput.setAttribute('value', optsRadio[i]);
            if(optsRadio[i] == 'sim') {
                formInput.setAttribute('checked', true);
            }
            formDiv.appendChild(formInput);

            const formLabel = document.createElement('label');
            formLabel.className += 'form-check-label';
            formLabel.innerHTML = optsContent[i];
            formDiv.appendChild(formLabel);
            
            containerDiv.append(formDiv);
        }

        containerDiv.appendChild(br);
        questionsContainer.appendChild(containerDiv);
    }

    const submitBtn = document.createElement('button');

    submitBtn.className += 'btn btn-outline-primary col-8';
    submitBtn.innerHTML = 'Finalizar triagem';
    submitBtn.style = 'margin-left: 16.5%; padding: 10px';
    submitBtn.setAttribute('type', 'submit');
    
    submitBtn.addEventListener('click', function() {
        const answer = getResult();
        alert(answer);
    }, false);
    questionsContainer.appendChild(submitBtn);
}

(function() {
    const questionsContainer = document.getElementById('questions-container');
    buildForm(questionsContainer);
})();
