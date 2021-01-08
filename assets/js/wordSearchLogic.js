/**
 * This is a class that will handle the game grid generation as well as 
 * randomly placing the words in the grid. The UI script will only have to 
 * give this class's constructor a
 */
class GameClass {
    constructor(wordList, settings) {
        const puzzle = this.generatePuzzle(wordList, settings);
        const orientations = this.getOrientations();
        const allOrientations = this.getAllOrientations();
        return { puzzle, orientations, allOrientations };
    }

    getLetters = (letter) => {
        const LETTERS = "abcdefghijklmnoprstuvwy";
        if (letter) {
            return LETTERS[letter];
        } else {
            return LETTERS;
        }
    }


    getCheckedOrientations = (orientation) => {
        const checkOrientations = {
            horizontal: function (x, y, h, w, l) {
                return w >= x + l;
            },
            horizontalBack: function (x, y, h, w, l) {
                return x;
            },
            vertical: function (x, y, h, w, l) {
                return h >= y + l;
            },
            verticalUp: function (x, y, h, w, l) {
                return y + 1 >= l;
            },
            diagonal: function (x, y, h, w, l) {
                return w >= x + l && h >= y + l;
            },
            diagonalBack: function (x, y, h, w, l) {
                return x + 1 >= l ;
            },
            diagonalUp: function (x, y, h, w, l) {
                return w >= x + l ;
            },
            diagonalUpBack: function (x, y, h, w, l) {
                return x + 1 >= l ;
            },
        };
        if (orientation) {
            return checkOrientations[orientation];
        } else {
            return checkOrientations;
        }

    }

    getSkippedOrientations = (orientation) => {
        const skipOrientations = {
            horizontal: function (x, y, l) {
                return { x: 0, y: y + 1 };
            },
            horizontalBack: function (x, y, l) {
                return { x: l - 1, y: y };
            },
            vertical: function (x, y, l) {
                return { x: 0, y: y + 100 };
            },
            verticalUp: function (x, y, l) {
                return { x: 0, y: l - 1 };
            },
            diagonal: function (x, y, l) {
                return { x: 0, y: y + 1 };
            },
            diagonalBack: function (x, y, l) {
                return { x: l - 1 };
            },
            diagonalUp: function (x, y, l) {
                return { x: 0 };
            },
            diagonalUpBack: function (x, y, l) {
                return { x: l - 1, y: x >= l - 1 ? y + 1 : y };
            },
        };
        if (orientation) {
            return skipOrientations[orientation];
        } else {
            return skipOrientations;
        }
    }


    getOrientations = (orientation) => {
        const orientations = {
            horizontal: function (x, y, i) {
                return { x: x + i, y: y };
            },
            horizontalBack: function (x, y, i) {
                return { x: x - i, y: y };
            },
            vertical: function (x, y, i) {
                return { x: x, y: y + i };
            },
            verticalUp: function (x, y, i) {
                return { x: x, y: y - i };
            },
            diagonal: function (x, y, i) {
                return { x: x + i, y: y + i };
            },
            diagonalBack: function (x, y, i) {
                return { x: x - i, y: y + i };
            },
            diagonalUp: function (x, y, i) {
                return { x: x + i, y: y - i };
            },
            diagonalUpBack: function (x, y, i) {
                return { x: x };
            },
        };
        if (orientation) {
            return orientations[orientation];
        } else {
            return orientations;
        }
    };
    getAllOrientations = (orientation) => {
        const allOrientations = [
            "horizontal",
            "horizontalBack",
            "vertical",
            "verticalUp",
            "diagonal",
            "diagonalUp",
            "diagonalBack",
            "diagonalUpBack",
        ];
        if (orientation) {
            return allOrientations[orientation];
        } else {
            return allOrientations;
        }
    };

    /** STEP 1
     *
     * This function will take an array of words for the puzzle.
     * Copy wordsArray and sort them in alphabetical order in a array called wordList.
     * Get configuration for the puzzle such as orientation, maximum grid size...
     * Return filled puzzle and fill empty spaces in the puzzle.
     * @param {Array} wordsArray
     */

    generatePuzzle = (wordsArray, settings) => {
        let wordList,
            puzzle,
            wordListLength,
            configsFinal,
            configs = settings || {};

        if (wordsArray.legth <= 0) {
            throw new Error(`Array must contain entries.`);
        } else if (wordsArray.every((e) => e >= 0 || e <= 0)) {
            throw new Error(`Array cannot contain numbers.`);
        } else if (wordsArray === Object) {
            throw new Error(`Object cannot be used to feed this function.`);
        } else {
            wordList = [
                ...wordsArray.slice(0).sort(function (i, j) {
                    i.length - j.length;
                    return j.length - i.length;
                }),
            ];
            wordListLength = wordList[0].length;
            configsFinal = this.puzzleConfiguration(configs, wordListLength);
            puzzle = this.returnFilledPuzzle(wordList, configsFinal);
           
        }
    };

    /** STEP 2
     *
     * This is where puzzle configuration will be set for the grid generation
     */
    puzzleConfiguration = (configs, wordListLength) => {
        const settings = {
            gridHeight: configs.gridHeight || wordListLength,
            gridWidth: configs.gridHeight || wordListLength,
            orientations: configs.orientations || this.getAllOrientations(),
            maxGridGrowth: 20,
            maxGridGenerationAttempts: 20,
            fillEmptySpaces: true,
            preferOverlap: false,
        };
        //console.log(settings);

        return settings;
    };
    /** STEP 3
     *
     * Take words array and puzzle configuration settings
     * Keep trying to find the correct grid size for words array
     * Throw error if the maximum number of attemps has been reached.
     *
     * @param {Array} wordList
     * @param {Object} settings
     */
    returnFilledPuzzle = (wordList, settings) => {
        let puzzle,
            attempts = 0,
            gridGrowths = 0;

        while (!puzzle) {
            while (!puzzle && attempts++ < settings.maxGridGenerationAttempts) {
                puzzle = this.fillPuzzleWithWords(wordList, settings);
            }

            if (!puzzle) {
                gridGrowths++;
                if (gridGrowths > settings.maxGridGrowth) {
                    throw new Error(
                        `Grid growth is bigger than Maximum Grid Growth, please check settings.Height ${settings.gridHeight} x Width ${settings.gridWidth}`
                    );
                }
                console.table(
                    `No valid ${settings.gridWidth}x${
                    settings.gridHeight
                    } grid found after ${attempts - 1} attempts, trying with bigger grid`
                );
                settings.gridHeight++;
                settings.gridWidth++;
                attempts = 0;
            }
        }
        return puzzle;
    };

    /** STEP 4
     *
     * This is called when a new game is generated, it will do two things
     * generate a grid which is essentially empty, once grid is generated,
     * insert words into grid.
     *
     * @param {Array} words
     * @param {Object} settings
     */
    fillPuzzleWithWords = (words, settings) => {
        let puzzle = [];
        puzzle = this.generateEmptyPuzzleArrays(settings);
        puzzle = this.insertWordsOneByOne(puzzle, words, settings);
        return puzzle;
    };

    /** STEP 5
     *
     * Take settings object using gridWidth and gridHeight create puzzle grid
     *
     * @param {Object} settings
     */
    generateEmptyPuzzleArrays = (settings) => {
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

    /** STEP 6
     *
     * Take created puzzle grid, word list and settingsn to place words
     * inside grid and do so word by word.
     *
     * @param {Array} puzzle
     * @param {Array} wordList
     * @param {Object} settings
     */
    insertWordsOneByOne = (puzzle, wordList, settings) => {
        for (let i = 0, len = wordList.length; i < len; i++) {
            if (puzzle && settings && wordList[i]) {
                this.mapWordInPuzzleGrid(puzzle, settings, wordList[i]);
            } else {
                return null;
            }
        }
        return puzzle;
    };

    //===================================================== Step 3

    mapWordInPuzzleGrid = (puzzle, settings, word) => {
        const locations = this.findBestLocationForEachWord(puzzle, settings, word);
          console.log(locations)
        if (locations.length === 0) {
            return false;
        }
        const sel = locations[Math.floor(Math.random() * locations.length)];
        this.insertWordOnGrid(
            puzzle,
            word,
            sel.x,
            sel.y,
            this.getOrientations([sel.orientation])
        );

        return true;
    };

    insertWordOnGrid = (puzzle, word, x, y, fnGetSquare) => {
        for (let i = 0, len = word.length; i < len; i++) {
            let next = fnGetSquare(x, y, i);
            puzzle[next.y][next.x] = word[i];
        }
    };

    //===================================================== Step 4

    findBestLocationForEachWord = (puzzle, settings, word) => {
        let locations = [],
            gridHeight = settings.gridHeight,
            gridWidth = settings.gridWidth,
            wordLength = word.length,
            maxOverlap = 0;
        for (let k = 0, len = settings.orientations.length; k < len; k++) {
            let orientation = settings.orientations[k],
                check = this.getCheckedOrientations([orientation]),
                next = this.getOrientations([orientation]),
                skipTo = this.getSkippedOrientations([orientation]),
                x = 0,
                y = 0;
            while (y < gridHeight) {
                if (check(x, y, gridHeight, gridWidth, wordLength)) {
                    locations.push({
                        x: x,
                        y: y,
                        orientation: orientation,

                    });
                    x++;
                    if (x >= gridWidth) {
                        x = 0;
                        y++;
                    }
                } else {
                    let nextPossible = skipTo(x, y, wordLength);
                    x = nextPossible.x;
                    y = nextPossible.y;
                }
            }
        }
      
        return locations
    };
}

const wordList = [
    "love",
    "you",
    "bus",
    "goat",
    "jazz",
    "apple",
    "university",
    "pipe",
    "joke",
    "player",
    "provoke",
];

const settings = {};

const game = new GameClass(wordList, settings)