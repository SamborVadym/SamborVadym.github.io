(function myGame() {
    let blockGame = document.querySelector('#game');

    let blockStartGame = document.createElement('div');
    blockStartGame.className = 'content-start';
    blockGame.appendChild(blockStartGame);

    let inputTime = document.createElement('input');
    inputTime.className = 'content-start-input';
    inputTime.id = 'input-time';
    inputTime.type = 'number';
    blockStartGame.appendChild(inputTime);

    let buttonStart = document.createElement('button');
    buttonStart.className = 'content-start-btn';
    buttonStart.type = 'button';
    buttonStart.disabled = true;
    buttonStart.innerHTML = 'start game';
    blockStartGame.appendChild(buttonStart);

    let helperText = document.createElement('p');
    helperText.className = 'helper-text';
    helperText.style.textAlign = 'center';
    helperText.innerHTML = 'The entered value can not be less than 0, or pinch 0';
    blockStartGame.appendChild(helperText);


    let players = document.createElement('div');
    players.className = 'players';
    blockGame.appendChild(players);

    let player = document.createElement('p');
    player.innerHTML = 'Player';
    players.appendChild(player);

    let playerClicked = document.createElement('span');
    playerClicked.innerHTML = '0';
    player.appendChild(playerClicked);

    let computer = document.createElement('p');
    computer.innerHTML = `Computer`;
    players.appendChild(computer);

    let computerClicked = document.createElement('span');
    computerClicked.innerHTML = '0';
    computer.appendChild(computerClicked);

    (function validInput() {

        let pattern = {
            helperText: function () {
                if (inputTime.value > 0) {
                    return true;
                }
            }
        };

        inputTime.addEventListener('keyup', function () {
            patternTest(pattern.helperText());

            if (helperText) {
                helperText.classList.add('valid');
            } else {
                helperText.classList.add('invalid');
            }
            return true;
        });

        function patternTest(pattern) {
            if (pattern) {
                inputTime.classList.add('valid');
                inputTime.classList.remove('invalid');
                helperText.classList.add('valid');
                helperText.classList.remove('invalid');
                buttonStart.disabled = false;
            } else {
                inputTime.classList.add('invalid');
                inputTime.classList.remove('valid');
                helperText.classList.add('invalid');
                helperText.classList.remove('valid');
                buttonStart.disabled = true;
            }
            return false
        }

    })();


    function createTable() {
        let i;
        let j;
        let rowsValue = 10;
        let columnsValue = 10;

        let table = document.createElement('table');
        table.className = 'content-table';

        for (i = 1; i <= rowsValue; i++) {
            let tr = table.insertRow();
            tr.className = 'content-table-tr';
            for (j = 1; j <= columnsValue; j++) {
                let td = tr.insertCell();
                td.className = 'content-table-td block-game';
                td.i = i;
                td.j = j;
                // td.setAttribute('number-block', `${td.i}-${td.j}`);
            }
        }
        blockGame.appendChild(table);
    }

    createTable();

    buttonStart.addEventListener('click', function () {
        inputTime.disabled = true;
        buttonStart.disabled = true;
        let lights = document.getElementsByClassName("block-game");
        let previousRandomLight = null;
        let timeGame = document.getElementById('input-time').value;
        let timer;

        function repeatOften() {
            if (previousRandomLight) previousRandomLight.id = ('loose');
            let random = Math.floor(Math.random() * (lights.length - 1));
            let randomLight = lights[random];
            randomLight.id = ('active');
            randomLight.classList.remove('block-game');
            randomLight.classList.add('clicked-false');
            previousRandomLight = randomLight;

            let falseClicked = document.getElementsByClassName('clicked-false').length - 1;
            computerClicked.innerHTML = falseClicked;

            timer = setTimeout(repeatOften, `${timeGame}`);
            let trueClicked = document.getElementsByClassName('clicked-true').length;

            if (falseClicked === 10) {
                clearTimeout(timer);
                showResultError();
            }
            if (trueClicked === 10) {
                clearTimeout(timer);
                showResultSuccess();
            }

            document.getElementById('active').addEventListener('click', function (evt) {
                let target = evt.target;
                if (target.id === 'active') {
                    document.getElementById('active').id = ('');
                    randomLight.style.backgroundColor = 'green';
                    randomLight.style.borderColor = 'green';
                    randomLight.classList.remove('clicked-false');
                    randomLight.classList.add('clicked-true');
                    playerClicked.innerText = parseInt(playerClicked.innerText, 10) + 1;
                }
            }, false);

        }

        repeatOften();

        function showResultSuccess() {
            resultsGame();
            let popup = document.createElement('div');
            popup.className = 'popup';
            blockGame.appendChild(popup);

            let popupContent = document.createElement('div');
            popupContent.className = 'popup-content';
            popup.appendChild(popupContent);

            let popupContentText = document.createElement('p');
            popupContentText.className = 'popup-content-text';
            popupContentText.innerText = `You have won with the score
        ${parseInt(playerClicked.innerText)}/${document.getElementsByClassName('clicked-false').length - 1}`;
            popupContent.appendChild(popupContentText);

            let popupBtn = document.createElement('button');
            popupBtn.className = 'popup-btn';
            popupBtn.id = 'btn';
            popupBtn.innerHTML = 'Play again';
            popupBtn.setAttribute('onClick', "refreshPage()");
            popupContent.appendChild(popupBtn);
            document.getElementById('btn').addEventListener('click', function refreshPage() {
                window.location.reload();
            })
        }

        function showResultError() {
            resultsGame();
            let popup = document.createElement('div');
            popup.className = 'popup';
            blockGame.appendChild(popup);

            let popupContent = document.createElement('div');
            popupContent.className = 'popup-content';
            popup.appendChild(popupContent);

            let popupContentText = document.createElement('p');
            popupContentText.className = 'popup-content-text';
            popupContentText.innerText = `You lost with the score
        ${parseInt(playerClicked.innerText)}/${document.getElementsByClassName('clicked-false').length - 1}`;
            popupContent.appendChild(popupContentText);

            let popupBtn = document.createElement('button');
            popupBtn.className = 'popup-btn';
            popupBtn.id = 'btn';
            popupBtn.innerHTML = 'Play again';
            popupContent.appendChild(popupBtn);
            document.getElementById('btn').addEventListener('click', function refreshPage() {
                window.location.reload();
            })
        }


    }, false);

    function resultsGame() {
      let btnResults = document.createElement('btn');
      btnResults.innerHTML = 'result';
      btnResults.className = 'results';
      document.body.insertBefore(btnResults, document.body.firstChild);
    }
})();
