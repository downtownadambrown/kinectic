const wordListVeryHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality", "practice", "computer", "bicycle", "prank", "bond"];
const wordListHard = ["bus", "jacket", "provoke", "university", "diversity", "game", "puzzle", "crowded", "extraordinary"
    , "quality"];
const wordListEasy = ["bus", "jacket", "provoke", "university", "diversity"];

// STEP 1
const generatePuzzle = (wordsArray, settings) => {
    let wordList,
        puzzle,
        wordListLength,
        configs = settings || {};

    if (wordsArray.legth <= 0) {
        throw new Error(
            `Array must contain entries.`
        );

    } else if (wordsArray.every(e => e >= 0 || e <= 0)) {
        throw new Error(
            `Array cannot contain numbers.`
        );
    } else if (wordsArray === Object) {
        throw new Error(
            `Object cannot be used to feed this function.`);
    }
    else {
        wordList = [...wordsArray.slice(0).sort()];
        wordListLength = wordList[0].length;
        configs = puzzleConfiguration(configs, wordListLength);
        puzzle = returnFilledPuzzle(wordList, configs);
    }
    //console.log(typeof (puzzle));
    return puzzle;
};

//STEP 2
const puzzleConfiguration = (configs, wordListLength) => {
    const settings = {
        gridHeight: configs.gridHeight || wordListLength,
        gridWidth: configs.gridHeight || wordListLength,
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
//STEP 5
const insertWordsOneByOne = (puzzle, wordList, settings) => {
    for (i = 0, len = wordList.length; i < len; i++) {
        if (puzzle && settings && wordList[i]) {
            let locations = findBestLocationForEachWord(puzzle, settings, wordList[i]);
            mapWordInPuzzleGrid(puzzle, wordList[i], locations)
        } else {
            return null;
        }
    }
    return puzzle;
};
//STEP 6
const findBestLocationForEachWord = (puzzle, settings, word) => {

};
//STEP 7
const mapWordInPuzzleGrid = (puzzle, word, locations) => {

    if (locations.length === 0) {
        return false;
    }
};




//generatePuzzle(wordListHard)