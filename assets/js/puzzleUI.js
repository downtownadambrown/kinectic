import puzzleLogic from "./puzzleLogic.js";

let game, selectedSquare,
    selectedSquares = [],
    currentWord = "";

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    console.table(game.puzzle)
    drawPuzzle(htmlContainer, game.puzzle, wordList);
    addEventListenersToGrid();
};

const drawPuzzle = (el, puzzle, words) => {
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    for (let i = 0, height = puzzle.length; i < height; i++) {
        el.style.setProperty("--grid-rows", puzzle.length);
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
            item.addEventListener('pointerdown', turnStart);
            item.addEventListener('pointerover', selectLetters);
            item.addEventListener('pointerdown', turnEnd);
        } else {
            item.addEventListener('mousedown', turnStart);
            item.addEventListener('mouseenter', mouseMovement);
            item.addEventListener('mouseup', turnEnd)
            item.addEventListener('touchstart', turnStart);
            item.addEventListener('touchmove', selectLetters);
            item.addEventListener('touchend', turnEnd);
        }
    });
}

const calculateOrientation = function (x1, y1, x2, y2) {
  for (let orientation in game.orientations) {
    let nextFn = game.orientations[orientation];
    let nextPos = nextFn(x1, y1, 1);
    if (nextPos.x === x2 && nextPos.y === y2) {
      return orientation;
    }
  }
  return null;
};

const mouseMovement = function (event) {
  select(event);
};

let turnStart = (event) => {
    event.target.className += " selected";
    selectedSquare = event.target.innerText;
    selectedSquares.push(event.target.innerText);
    currentWord = event.target.innerText;
    console.log(`${selectedSquare}${selectedSquares}${currentWord}`);
}

const selectLetters = (target) => {
    if (!selectedSquare) {
        return;
    }
    let previousSquare = selectedSquares[selectedSquares.length - 1];
    if (previousSquare == target) {
        return;
    }
    let backTo;
    for (let i = 0, len = selectedSquares.length; i < len; i++) {
        if (selectedSquares[i] == target) {
            backTo = i + 1;
            break;
        }
    }
    while (backTo < selectedSquares.length) {
        selectedSquares[selectedSquares.length - 1].classList.remove("selected");
        selectedSquares.splice(backTo, 1);
        currentWord = currentWord.substr(0, currentWord.length - 1);
    }
    let newOrientation = calculateOrientation(
        selectedSquare.getAttibute("x") - 0,
        selectedSquare.getAttibute("y") - 0,
        target.getAttibute("x") - 0,
        target.getAttibute("y") - 0);

    if (newOrientation) {
        selectedSquares = [selectedSquare];
        currentWord = selectedSquare.innerText;
        if (previousSquare !== selectedSquare) {
            previousSquare.classList.remove("selected");
            previousSquare = selectedSquare;
        }
        curOrientation = newOrientation;
    }
    let orientation = calculateOrientation(
        previousSquare.getAttibute("x") - 0,
        previousSquare.getAttibute("y") - 0,
        target.getAttibute("x") - 0,
        target.getAttibute("y") - 0
    );

    if (!orientation) {
        return;
    }
    if (!curOrientation || curOrientation === orientation) {
        curOrientation = orientation;
        playTurn(target);
    }
}

const turnEnd = (event) => { console.log(event.target) }


export { generateUIForPuzzle };