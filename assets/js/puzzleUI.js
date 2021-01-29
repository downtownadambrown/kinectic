import puzzleLogic from "./puzzleLogic.js";

let game, startGridItem,
    selectedGridItem = [],
    currentWord = "",
    currentOrientation,
    wordList = [],
    score = 0,
    difficultyLevel,
    totalPlayedSeconds = 0,
    interval,
    category;

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    difficultyLevel = settings.level;
    category = settings.category;
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    drawPuzzle(htmlContainer, game.puzzle, wordList);
    addTimerAndScoreUI();
    addEventListenersToGrid();
    displayWordList(wordList);
    startTimer();
};

const addTimerAndScoreUI = () => {
    const timerAndScore = document.querySelector("#navBarTimerAndScore");
    let output = "";
    output += `<li>`;
    output += `<label id="timeElement">` + `Timer: ` + `<label id="minutes">` + `00` + `</label>` + `:` + `<label id="seconds">` + `00` + `  </label>` + `</label >`;
    output += `</li>`;
    output += `<li>`;
    output += `<label class="uk-margin-left" id = "scoreElement" > Score: <label id="score">0</label></label >`;
    output += `</li>`;
    timerAndScore.innerHTML = output;

}

const drawPuzzle = (el, puzzle, words) => {
    wordList = [...words];
    while (el.firstChild) {
        el.removeChild(el.previousChild);
    }
    for (let i = 0, height = puzzle.length; i < height; i++) {
        el.style.setProperty("--grid-rows", puzzle.length);
        el.classList.add("uk-padding-medium")
        let row = puzzle[i];
        for (let j = 0, width = row.length; j < width; j++) {
            el.style.setProperty("--grid-cols", row.length);
            let divElement = document.createElement("div");
            divElement.setAttribute("x", j);
            divElement.setAttribute("y", i);
            divElement.innerText = row[j] || "&nbsp;";
            divElement.className = "grid-item";
            el.appendChild(divElement);
        }
    }
};

const addEventListenersToGrid = () => {
    document.querySelectorAll('.grid-item').forEach(item => {
        if (window.navigator.msPointerEnabled) {
            item.addEventListener('pointerdown', startGameTurn);
            item.addEventListener('pointerover', selectingSquares);
            item.addEventListener('pointerdown', endGameTurn);
        } else {
            item.addEventListener('mousedown', startGameTurn);
            item.addEventListener('mouseenter', mouseMovement);
            item.addEventListener('mouseup', endGameTurn)
            item.addEventListener('touchstart', startGameTurn);
            item.addEventListener('touchmove', touchMovement);
            item.addEventListener('touchend', endGameTurn);
        }
    });
}

const calculateOrientation = (x1, y1, x2, y2) => {
    for (let orientation in game.orientations) {
        let nextFn = game.orientations[orientation];
        let nextPos = nextFn(x1, y1, 1);
        if (nextPos.x === x2 && nextPos.y === y2) {
            return orientation;
        }
    }
    return null;
};

const startGameTurn = (event) => {
    event.target.className += " selected";
    startGridItem = event.target;
    selectedGridItem.push(event.target);
    currentWord = event.target.innerText;
};

const selectingSquares = (targetElement) => {
    if (!startGridItem) {
        return;
    }
    let previousSquare = selectedGridItem[selectedGridItem.length - 1];
    if (previousSquare == targetElement) {
        return;
    }
    let backToPreviousSquare;
    for (let i = 0, len = selectedGridItem.length; i < len; i++) {
        if (selectedGridItem[i] == targetElement) {
            backToPreviousSquare = i + 1;
            break;
        }
    }
    while (backToPreviousSquare < selectedGridItem.length) {
        selectedGridItem[selectedGridItem.length - 1].classList.remove("selected");
        selectedGridItem.splice(backToPreviousSquare, 1);
        currentWord = currentWord.substr(0, currentWord.length - 1);
    }
    let newOrientation = calculateOrientation(
        startGridItem.getAttribute("x") - 0,
        startGridItem.getAttribute("y") - 0,
        targetElement.getAttribute("x") - 0,
        targetElement.getAttribute("y") - 0
    );
    if (newOrientation) {
        selectedGridItem = [startGridItem];
        currentWord = $(startGridItem).text();
        if (previousSquare !== startGridItem) {
            previousSquare.classList.remove("selected");
            previousSquare = startGridItem;
        }
        currentOrientation = newOrientation;
    }
    let orientation = calculateOrientation(
        previousSquare.getAttribute("x") - 0,
        previousSquare.getAttribute("y") - 0,
        targetElement.getAttribute("x") - 0,
        targetElement.getAttribute("y") - 0
    );

    if (!orientation) {
        return;
    }
    if (!currentOrientation || currentOrientation === orientation) {
        currentOrientation = orientation;
        playGameTurn(targetElement);
    }
};

const mouseMovement = function (event) {
    selectingSquares(event.target);
};

const touchMovement = function (event) {
    let xPos = event.touches[0].pageX;
    let yPos = event.touches[0].pageY;
    let target = document.elementFromPoint(xPos, yPos);
    console.log(target)
    selectingSquares(target);
};

const playGameTurn = function (square) {
    for (let i = 0, len = wordList.length; i < len; i++) {
        if (wordList[i].indexOf(currentWord + square.innerText) === 0) {
            square.className += " selected";
            selectedGridItem.push(square);
            currentWord += square.innerText;
            break;
        }
    }
};

const endGameTurn = function () {
    wordList.forEach((value, index) => {
        if (wordList[index] === currentWord) {
            document.querySelectorAll(".selected").forEach((el) => {
                el.classList.add("found");
            });
            wordList.splice(index, 1);
            document.querySelectorAll("#" + currentWord).forEach((el) => {
                el.classList.add("wordFound")
                addScore(difficultyLevel);
            });;
        }
        if (wordList.length === 0) {
            document.querySelectorAll(".grid-item").forEach((el) => {
                el.classList.add("complete")
            });;
            endGameModal();
        }
    });
    document.querySelectorAll(".selected").forEach((el) => {
        el.classList.remove("selected")
    });;
    startGridItem = null;
    selectedGridItem = [];
    currentWord = "";
    currentOrientation = null;
};

const displayWordList = (wordList) => {
    let output = "";
    const wordListElement = document.querySelector("#wordList");
    wordListElement.classList.add("uk-column-1-2");
    wordListElement.classList.add("uk-padding-large");
    wordListElement.classList.add("uk-text-center");
    wordList.forEach(function (value) {
        output += "<div class=" + "words" + " id=" + `${value}` + ">";
        output += `${value}`;
        output += "</div>";
    });
    wordListElement.innerHTML = output;
};

function stopTimer() {
    clearInterval(interval);
}

const startTimer = () => {
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    interval = setInterval(setTimeToElement, 1000);

    function setTimeToElement() {

        ++totalPlayedSeconds;
        seconds.innerHTML = splitTimeValues(totalPlayedSeconds % 60);
        minutes.innerHTML = splitTimeValues(parseInt(totalPlayedSeconds / 60));
    }

    const splitTimeValues = (value) => {
        let valueString = value + "";
        if (valueString.length < 2) {
            return "0" + valueString;
        } else {
            return valueString;
        }

    }
};

const addScore = (difficultyLevel) => {
    const displayScore = document.querySelector("#score");
    if (difficultyLevel === "easy") {
        score += 10;
        $("#score").empty();
        displayScore.innerText = score.toString();
    } else if (difficultyLevel === "medium") {
        score += 25;
        $("#score").empty();
        displayScore.innerText = score.toString();
    } else if (difficultyLevel === "hard") {
        score += 50;
        $("#score").empty();
        displayScore.innerText = score.toString();
    }

};

const saveCompletedGameToDatabase = async (score, totalPlayedSeconds) => {

    /**
     * Get user ID locally and 
     */
    console.log(score)
    const userID = localStorage.getItem("id");
    const userLeaderboard = JSON.stringify({
        score: score,
        time: totalPlayedSeconds,
        category: category,
        user: userID,
    })

    /**
     * Add user leaderboard
     */
    const response = await axios
        .post('https://api.kinectic.io/leaderboards', userLeaderboard, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            // Handle success.
            console.log('Leaderboards', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst registering a user.', error.response);
            return error.response;
        });
}

const endGameModal = () => {

    let completionBonus = 0, timeBonus = 0;
    const elTimeCompleted = document.querySelector("#timeCompleted");
    const elScoreAchieved = document.querySelector("#scoreAchieved");
    const elTimeBonusAmount = document.querySelector("#timeBonusAmount");
    const elCompletionlBonusAmount = document.querySelector("#completionBonusAmount");
    const elTotalBonusCollected = document.querySelector("#totalBonusCollected");
    const elTotalScore = document.querySelector("#totalScore");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    stopTimer();
    if (difficultyLevel === "easy") {
        completionBonus = 10;
    } else if (difficultyLevel === "medium") {
        completionBonus = 20;
    } else if (difficultyLevel === "hard") {
        completionBonus = 30;
    }

    if (totalPlayedSeconds <= 60 && difficultyLevel === "easy") {
        timeBonus = 50;
    } else if (totalPlayedSeconds <= 120 && difficultyLevel === "medium") {
        timeBonus = 150;
    } else if (totalPlayedSeconds <= 180 && difficultyLevel === "hard") {
        timeBonus = 200;
    }

    elTimeCompleted.innerText = minutes.innerText + ":" + seconds.innerText;
    elScoreAchieved.innerText = score.toString(10) + " points";
    elTimeBonusAmount.innerText = timeBonus.toString(10) + " points";
    elCompletionlBonusAmount.innerText = completionBonus.toString(10) + " points";
    elTotalBonusCollected.innerText = (timeBonus + completionBonus).toString(10) + " points";
    elTotalScore.innerText = (timeBonus + completionBonus + score).toString(10) + " points";
    saveCompletedGameToDatabase((timeBonus + completionBonus + score), totalPlayedSeconds);

    UIkit.modal("#endOfGameModal").show();
    UIkit.util.on('#endOfGameModal', 'click', function (e) {
        e.preventDefault();
        e.target.blur();
        location.reload();
    });
}




export { generateUIForPuzzle };
