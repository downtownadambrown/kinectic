import puzzleLogic from "./puzzleLogic.js";

let game, startGridItem,
    selectedGridItem = [],
    currentWord = "",
    currentOrientation,
    wordList = [],
    score = 0,
    difficultyLevel,
    totalPlayedSeconds = 0;

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    difficultyLevel = settings.level;
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    drawPuzzle(htmlContainer, game.puzzle, wordList);
    addEventListenersToGrid();
    displayWordList(wordList);
    startTimer();
};

const drawPuzzle = (el, puzzle, words) => {
    wordList = [...words];
    while (el.firstChild) {
        el.removeChild(el.previousChild);
    }
    for (let i = 0, height = puzzle.length; i < height; i++) {
        el.style.setProperty("--grid-rows", puzzle.length);
        el.classList.add("uk-padding-large")
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
        selectedGridItem[selectedGridItem.length - 1].forEach((el) => {
            el.classList.remove("selected");
        })
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
    let xPos = event.originalEvent.touches[0].pageX;
    let yPos = event.originalEvent.touches[0].pageY;
    let targetElement = document.elementFromPoint(xPos, yPos);
    select(targetElement);
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
            saveCompletedGameToDatabase(score, totalPlayedSeconds);
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

const displayWordList = function (wordList) {
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


const startTimer = function (stopTimer) {
    console.log(stopTimer)
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    const interval = setInterval(setTimeToElement, 1000);
    const timerBollean = stopTimer;
    console.log(timerBollean)


    function setTimeToElement() {
        if (timerBollean === false) {
            clearInterval(interval);
        }
        ++totalPlayedSeconds;
        seconds.innerHTML = splitTimeValues(totalPlayedSeconds % 60);
        minutes.innerHTML = splitTimeValues(parseInt(totalPlayedSeconds / 60));
    }

    function splitTimeValues(value) {
        var valueString = value + "";
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
    const userID = localStorage.getItem("id");
    const userLeaderboard = JSON.stringify({
        score: score,
        time: totalPlayedSeconds,
        username: userID,
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

    /**
     * Get all user existing leaderboards
     */
    const allUserLeaderboards = response.username.leaderboards;
    allUserLeaderboards.push(response.id)

    /**
     * pre-serialize all user leaderboards 
     */
    const leaderBoardJSON = JSON.stringify({
        leaderboards: allUserLeaderboards,
    });

    /**
     * Update user leaderboard
     */
    axios
        .put('https://api.kinectic.io/users/' + userID, leaderBoardJSON, {
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': token
            }
        })
        .then(response => {
            console.log('User data', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst registering a user.', error.response);
            return error.response;
        });
}

const endGameModal = () => {
    startTimer(false)
    let bonus = 0;
    const elTimeCompleted = document.querySelector("#timeCompleted");
    const elScoreAchieved = document.querySelector("#scoreAchieved");
    const elBonusAmount = document.querySelector("#bonusAmount");
    const elBonusCollected = document.querySelector("#bonusCollected");
    const elTotalScore = document.querySelector("#totalScore");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    if (difficultyLevel === "easy") {
        bonus = 100;
    } else if (difficultyLevel === "medium") {
        bonus = 200;
    } else if (difficultyLevel === "hard") {
        bonus = 300;
    }

    elTimeCompleted.innerText = minutes.innerText + ":" + seconds.innerText;
    elScoreAchieved.innerText = score.toString(10);
    elBonusAmount.innerText = bonus.toString(10);
    elBonusCollected.innerText = bonus.toString(10);
    elTotalScore.innerText = (bonus + score).toString(10);
    UIkit.modal("#endOfGameModal").show();
}



export { generateUIForPuzzle };