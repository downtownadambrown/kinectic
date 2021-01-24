import puzzleLogic from "./puzzleLogic.js";

let game;

const generateUIForPuzzle = (htmlContainer, wordList, settings) => {
    game = new puzzleLogic.PuzzleLogic(wordList, settings);
    console.table(game.puzzle)
    drawPuzzle(htmlContainer, game.puzzle, wordList);
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
export { generateUIForPuzzle };