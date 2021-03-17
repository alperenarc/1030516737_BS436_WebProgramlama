
var guessCount = 2;
var catHere;
var functionDisabled = false;

function flipPhoto(value) {
    if (functionDisabled) {
        confirm('Oyun sona erdi yeniden başlamak ister misiniz ? ') ? location.reload() : null;
        return;
    }

    if (parseInt(catHere) === parseInt(value)) {
        document.getElementById(`img${value}`).src = "../assets/cat.png";
        document.getElementById('kazandiId').style.display = 'block';
        document.getElementById('alanId').style.display = 'none';
        functionDisabled = true;
    } else {
        document.getElementById(`img${value}`).src = "../assets/dog.png";
        if (guessCount === 1) {
            document.getElementById('yenildiId').style.display = 'block';
            document.getElementById('alanId').style.display = 'none';
            functionDisabled = true;
            return;
        }
    }
    guessCount--;
}
// Oyunu başlatır ve değerleri resetler.
function startGame() {
    guessCount = 2;
    catHere = getRandomInt(3);
    functionDisabled = false;
    for (let index = 0; index < 3; index++) {
        document.getElementById(`img${index}`).src = "../assets/background.png";
    }
}
// Kedinin yerini belirlemek için random bir location atanıyor.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
