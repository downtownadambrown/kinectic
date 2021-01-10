/**
 * This is a class that will handle the game grid generation as well as 
 * randomly placing the words in the grid. The UI script will only have to 
 * give this class's constructor a
 */
class WordSearchLogic {
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
                return x + 1 >= l;
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
                return x + 1 >= l && h >= y + l;
            },
            diagonalUp: function (x, y, h, w, l) {
                return w >= x + l && y + 1 >= l;
            },
            diagonalUpBack: function (x, y, h, w, l) {
                return x + 1 >= l && y + 1 >= l;
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
                return { x: l - 1, y: x >= l - 1 ? y + 1 : y };
            },
            diagonalUp: function (x, y, l) {
                return { x: 0, y: y < l - 1 ? l - 1 : y + 1 };
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
                return { x: x - i, y: y - i };
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
            userPuzzleConfigs,
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
            userPuzzleConfigs = this.puzzleConfiguration(configs, wordListLength);
            puzzle = this.returnFilledPuzzle(wordList, userPuzzleConfigs);
            this.fillGridEmptySpaces(puzzle, userPuzzleConfigs);
            return puzzle;
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
            optionalOverlap: false,
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
     * Take settings object using gridWidth and gridHeight create puzzle grid,
     * which is a two dimentional array based on the longest word and fill
     * it with empty strings.
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
        console.table(puzzle)

        return puzzle;
    };

    /** STEP 6
     *
     * Take created puzzle grid, word list and settings to place words
     * inside grid and do so word by word.
     *
     * @param {Array} puzzle
     * @param {Array} wordList
     * @param {Object} settings
     */
    insertWordsOneByOne = (puzzle, wordList, settings) => {
        let isWordMapped;
        for (let i = 0, len = wordList.length; i < len; i++) {
            if (puzzle && settings && wordList[i]) {
                this.mapWordInPuzzleGrid(puzzle, settings, wordList[i]);
            } else {
                return null;
            }
        }

        return puzzle;
    };

    /** STEP 7
     * 
     * Take a word, the grid and the settings to map the best location for each word
     * Once best location for a word is found, make sure locations are randomly passed
     * to insert word to grid.
     * 
     * @param {Array} puzzle
     * @param {Object} settings
     * @param {String} word
     */
    mapWordInPuzzleGrid = (puzzle, settings, word) => {
        const locations = this.findBestLocationForEachWord(puzzle, settings, word);
        if (locations.length === 0) {
            return false;
        }
        const wordLocation = locations[Math.floor(Math.random() * locations.length)];
        //console.table(wordsLocations)
        this.insertWordOnGrid(
            puzzle,
            word,
            wordLocation.x,
            wordLocation.y,
            this.getOrientations([wordLocation.orientation])
        );
        return true;
    };

    /** Step 8
     * 
     * In order to insert a word in puzzle array,
     * we need the word and the coordinates for the first letter
     * of that word. Once we have the starting point of a word,
     * then a function is used based on the word orientation to get
     * coordinates using array indexes in order to know where each letter
     * word will be pushed to array. 
     * 
     * @param {Array} puzzle
     * @param {String} word
     * @param {Number} x
     * @param {Number} y
     * @param {Function} findSquareLocation
     * 
     */
    insertWordOnGrid = (puzzle, word, x, y, findWordCoordinates) => {

        for (let i = 0, len = word.length; i < len; i++) {
            let wordCoordinates = findWordCoordinates(x, y, i);
            puzzle[wordCoordinates.y][wordCoordinates.x] = word[i];
        }
    };

    /** Step 9
     * 
     * To find the best location for a given word, it is important
     * to know the array length(X and Y), the word length and user defined
     * orientations for a given puzzle. Once this is done at random
     * we return an array with all locations. The locations consists of
     * coordinates using X and Y which refers to array indexes, orientation and
     * overlapping of words. Once this is completed we return locations for all words,
     * which is later used to push to puzzle.
     * 
     * @param {Array} puzzle
     * @param {Object} settings
     * @param {String} word
     * 
     */
    findBestLocationForEachWord = (puzzle, settings, word) => {
        let locations = [],
            gridHeight = settings.gridHeight,
            gridWidth = settings.gridWidth,
            wordLength = word.length,
            maxWordOverlap
                = 0;
        for (let i = 0, len = settings.orientations.length; i < len; i++) {
            let orientation = settings.orientations[i],
                checkPossibleOrientation = this.getCheckedOrientations([orientation]),
                nextPossibleOrientation = this.getOrientations([orientation]),
                skipToPossibleOrientation = this.getSkippedOrientations([orientation]),
                x = 0,
                y = 0;
            while (y < gridHeight) {
                if (checkPossibleOrientation(x, y, gridHeight, gridWidth, wordLength)) {
                    let overlap = this.calculateWordOverlap(word, puzzle, x, y, nextPossibleOrientation);
                    console.log(overlap)

                    if (
                        overlap >= maxWordOverlap ||
                        (!settings.optionalOverlap && overlap > -1)
                    ) {
                        maxWordOverlap = overlap;
                        locations.push({
                            x: x,
                            y: y,
                            orientation: orientation,
                            overlap: overlap,
                        });
                    }

                    x++;
                    if (x >= gridWidth) {
                        x = 0;
                        y++;
                    }
                } else {
                    let nextPossibleOrient = skipToPossibleOrientation(x, y, wordLength);
                    x = nextPossibleOrient.x;
                    y = nextPossibleOrient.y;
                }
            }
        }
        return locations;
    };

    /** STEP 10
     * 
     * Similar to STEP 8, check word coordinates and save the letter in a given 
     * puzzle square, if that letter is the same as the word letter increase overlap
     * and if a letter does not equal empty string return -1. Return the overlap value 
     * for each word.
     * 
     * @param {Array} puzzle
     * @param {String} word
     * @param {Number} x
     * @param {Number} y
     * @param {Function} findSquareLocation
     * 
     */
    calculateWordOverlap = (word, puzzle, x, y, findWordCoordinates) => {
        let overlap = 0;

        for (let i = 0, len = word.length; i < len; i++) {
            let wordCoordinates, letterSquare;
            wordCoordinates = findWordCoordinates(x, y, i)
            letterSquare = puzzle[wordCoordinates.y][wordCoordinates.x]
            if (letterSquare === word[i]) {
                overlap++;
            } else if (letterSquare !== "") {
                return -1;
            }
        }
        return overlap;
    };

    /** STEP 10
    * 
    */
    fillGridEmptySpaces = (puzzle, settings) => {
        if (settings.fillEmptySpaces) {
            let generateLetterForEmptySpace;
            generateLetterForEmptySpace(settings)
            var extraLettersCount = this.fillEmptySquares({
                puzzle,
                generateLetterForEmptySpace: generateLetterForEmptySpace,
            });
        }
    };

    generateLetterForEmptySpace = (settings) => {
        let lettersToAddToPuzzle,
            emptySpacesCount = 0;

        if (typeof settings.fillEmptySquares === "function") {
            return generateLetterForEmptySpace = settings.fillEmptySquares;
        } else if (typeof settings.fillEmptySquares === "string") {
            lettersToAddToPuzzle = settings.fillEmptySquares.toLowerCase().split("");
            return lettersToAddToPuzzle.pop() || (emptySpacesCount++ && "");
        } else {
            return this.getLetters([Math.floor(Math.random() * this.getLetters().length)]);
        }
    }


    /** STEP 11
    * 
    */
    fillEmptySquares = ({ puzzle, generateLetterForEmptySpace }) => {

    };
};


/**
 * array with words
 */
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

/**
 * Settings object
 */
const settings = {};

/**
 * create a class by passing to constructor word array and settings object
 * return a puzzle
 */
const game = new WordSearchLogic(wordList, settings);

console.table(game.puzzle)