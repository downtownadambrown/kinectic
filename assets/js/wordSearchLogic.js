const wordListVeryHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality", "practice", "computer", "bicycle", "prank", "bond"];
const wordListHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality"];
const wordListEasy = ["bus", "jacket", "provoke", "university", "diversity"];

const settings = {
    puzzleHeight: 10,
    puzzleWidth: 10,
    maxGridGrowth: 20,
    maxAttempts: 10
}

const generateNewPuzzleGrid = (words) => {
    if (words.legth <= 0) {
        console.log("There are no words in the array");
    }
    var wordList,
        puzzle,
        attempts = 0,
        gridGrowths = 0;

    while (!puzzle) {
        while (!puzzle && attempts++ < settings.maxAttempts) {
            puzzle = fillPuzzleWithWords(wordList, settings);
        }

        // if (!puzzle) {
        //     gridGrowths++;
        //     if (gridGrowths > settings.maxGridGrowth) {
        //         throw new Error(
        //             `No valid ${settings.width}x${settings.height} grid found and not allowed to grow more`
        //         );
        //     }
        //     console.log(
        //         `No valid ${settings.width}x${settings.height} grid found after ${
        //         attempts - 1
        //         } attempts, trying with bigger grid`
        //     );
        //     settings.height++;
        //     settings.width++;
        //     attempts = 0;
        // }
    }

}

const fillEmptyScapesInGrid = () => {

}

const fillPuzzleWithWords = (words) => {
    const puzzle = [];

    for (i = 0; i < settings.height; i++) {
        puzzle.push([]);
        for (j = 0; j < settings.width; j++) {
            puzzle[i].push("");
        }
    }

    // for (i = 0, len = words.length; i < len; i++) {
    //     if (!placeWordInPuzzle(puzzle, settings, words[i])) {
    //         return null;
    //     }
    // }

    console.log(puzzle)
    //return puzzle;
}

generateNewPuzzleGrid(wordListEasy)

