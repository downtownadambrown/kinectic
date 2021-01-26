import puzzleLogic from "./puzzleLogic.js";

let game, startGridItem,
    selectedGridItem = [],
    currentWord = "",
    currentOrientation,
    wordList = [],
    score = 0,
    difficultyLevel;

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    console.log(settings.level)
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    drawPuzzle(htmlContainer, game.puzzle, wordList);
    addEventListenersToGrid();
    displayWordList(wordList);
    startTimer();
    difficultyLevel = settings.level;
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
    let backTo;
    for (let i = 0, len = selectedGridItem.length; i < len; i++) {
        if (selectedGridItem[i] == targetElement) {
            backTo = i + 1;
            break;
        }
    }
    while (backTo < selectedGridItem.length) {
        selectedGridItem[selectedGridItem.length - 1].forEach((el) => {
            el.classList.remove("selected");
        })
        selectedGridItem.splice(backTo, 1);
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
            //addScore
        }
        if (wordList.length === 0) {
            document.querySelectorAll(".grid-item").forEach((el) => {
                el.classList.add("complete")
            });;
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


const startTimer = function () {
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    let totalSeconds = 0;

    setInterval(setTimeToElement, 1000);

    function setTimeToElement() {
        ++totalSeconds;
        seconds.innerHTML = splitTimeValues(totalSeconds % 60);
        minutes.innerHTML = splitTimeValues(parseInt(totalSeconds / 60));
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


export { generateUIForPuzzle };