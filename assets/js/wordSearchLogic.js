const wordListVeryHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality", "practice", "computer", "bicycle", "prank", "bond"];
const wordListHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality"];
const wordListEasy = ["bus", "jacket", "provoke", "university", "diversity"];

const LETTERS = "abcdefghijklmnoprstuvwy";

const settings = {
    puzzleHeight: 10,
    puzzleWidth: 10,
    maxGridGrowth: 20,
    maxAttempts: 10
}
//================================================= Step 1
const generateNewPuzzleGrid = (words) => {
    if (words.legth <= 0) {
        console.log("There are no words in the array");
    }
    let wordList,
        puzzle,
        attempts = 0,
        gridGrowths = 0;

    while (!puzzle) {
        while (!puzzle && attempts++ < settings.maxAttempts) {
            puzzle = fillPuzzleWithWords(words, settings);
        }
        settings.height++;
        settings.width++;
        attempts = 0;
    }
    console.log(words)

}
//=================================================== Step 2

//===================================================== Step 3


//===================================================== Step 4


//======================================================= Step 5


//======================================================== Step 6



generateNewPuzzleGrid(wordListEasy)

