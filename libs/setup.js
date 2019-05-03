import {
    getResult,
} from '../libs/logicaTriagem';

(function() {
    document.getElementById('submit').addEventListener('click', function( event ) {
        const answer = getResult();
        alert(answer);
    }, false);
})();
