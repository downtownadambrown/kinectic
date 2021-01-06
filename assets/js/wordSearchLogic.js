const wordListVeryHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality", "practice", "computer", "bicycle", "prank", "bond"];
const wordListHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality"];
const wordListEasy = ["bus", "jacket", "provoke", "university", "diversity"];

// STEP 1
const generatePuzzle = (wordsArray) => {
    let wordList,
        puzzle,
        settings = {};

    if (wordsArray.legth <= 0) {
        console.log("There are no words in the array");

    } else {
        console.table(wordsArray)
        wordList = [...wordsArray.slice(0).sort()];
        console.table(wordList)
        settings = puzzleConfiguration();
        puzzle = returnFilledPuzzle(wordList, settings);
    }
};

//STEP 2
const puzzleConfiguration = () => {
    const settings = {
        gridHeight: 20,
        gridWidth: 10,
        maxGridGrowth: 100,
        maxGridGenerationAttempts: 10,
        fillEmptySpaces: true,
    };
    return settings;
};

//STEP 3
const returnFilledPuzzle = (wordList, settings) => {
    let puzzle,
        attempts = 0,
        gridGrowths = 0;

    while (!puzzle) {
        while (!puzzle && attempts++ < settings.maxGridGenerationAttempts) {
            puzzle = fillPuzzleWithWords(wordList, settings);
        }

        if (!puzzle) {
            gridGrowths++;
            if (gridGrowths > settings.maxGridGrowth) {
                throw new Error(
                    `Grid growth is bigger than Maximum Grid Growth, please check settings.`
                );
            }
            console.table(
                `No valid ${settings.gridWidth}x${settings.gridHeight} grid found after ${
                attempts - 1
                } attempts, trying with bigger grid`
            );
            settings.gridHeight++;
            settings.gridWidth++;
            attempts = 0;
        }
    }
    return puzzle
};

//STEP 4
const fillPuzzleWithWords = (wordList, settings) => {
    let puzzle = [];
    puzzle = generateEmptyPuzzleArrays(settings);
    console.table(puzzle)
    //puzzle = insertWordsOneByOne(puzzle, wordList, settings); Commented out as it causes while loop to go crazy.
    return puzzle;
};

//STEP 5
const generateEmptyPuzzleArrays = (settings) => {
    let puzzle = [],
        i,
        j;
    for (i = 0; i < settings.gridHeight; i++) {
        puzzle.push([]);
        for (j = 0; j < settings.gridWidth; j++) {
            puzzle[i].push("");
        }
    }
    return puzzle;
};

const insertWordsOneByOne = () => {

};

generatePuzzle(wordListHard)