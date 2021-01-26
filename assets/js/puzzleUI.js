import puzzleLogic from "./puzzleLogic.js";

let game, startGridItem,
    selectedGridItem = [],
    currentWord = "",
    currentOrientation,
    wordList = [];

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    console.table(game.puzzle)
    drawPuzzle(htmlContainer, game.puzzle, wordList);
    addEventListenersToGrid();
    displayWordList(wordList);
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
    wordList.forEach(function (value) {
        output += "<div class=" + "words" + " " + "uk-padding-large" + " id=" + `${value}` + ">";
        output += `${value}`;
        output += "</div>";
    });
    $("#wordList").append(output);
};


export { generateUIForPuzzle };