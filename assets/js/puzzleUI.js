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
            item.addEventListener('mouseenter', mouseMove);
            item.addEventListener('mouseup', turnEnd)
            item.addEventListener('touchstart', turnStart);
            item.addEventListener('touchmove', selectLetters);
            item.addEventListener('touchend', turnEnd);
        }
    });
}

const mouseMove = function (event) {
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
        $(selectedSquares[selectedSquares.length - 1]).removeClass("selected");
        selectedSquares.splice(backTo, 1);
        currentWord = currentWord.substr(0, currentWord.length - 1);
    }
   
}
const turnEnd = (event) => { console.log(event.target) }


export { generateUIForPuzzle };