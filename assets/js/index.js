/**
 * This imports some funtions from puzzlePlay to 
 * help game generation.
 */
import * as puzzlePlay from "./puzzlePlay.js";

/**
 * Checks if user has already logged in, if it is 
 * load the correct page.
 */
window.addEventListener('load', () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated === "true") {
        loadLoggedInContent();
        setTimeout(() => {
            welcomeUser();
            logOutUser();
            getResolution();
        }, 300);
    } else {
        loadLoggedOutContent();
    }
});

/**
 * Wait until all HTML is loaded and then add listeners 
 * to each category play button, also gets difficulty and 
 * category name.
 */
setTimeout(() => {
    document.querySelectorAll('.category').forEach(item => {
        item.addEventListener('click', event => {
            const categoriesElements = document.querySelector("#categories");
            const category = puzzlePlay.splitAndJoinCategory(event.target.getAttribute("name"));
            const difficultySelected = event.target.parentElement.querySelector(".difficulty > .uk-active");
            const wordsAndSettings = puzzlePlay.puzzleWordsAndSettings(category, difficultySelected.innerText);
            puzzlePlay.playPuzzleGame(wordsAndSettings);
            removeElements(categoriesElements);

        });
    });
}, 300);

/**
 * Loads game page and then load leaderboard modal
 */
const loadLoggedInContent = () => {
    $("#app-root").load("gamepage.html");
    displayLeaderBoardContent();
}

/**
 * Loads home page if user is logged out.
 */
const loadLoggedOutContent = () => {
    $("#app-root").load("homepage.html");
}

/**
 * Disable medium or hard difficulty depending on 
 * screen size.
 */
const disableDifficulty = () => {
    const screenSize = localStorage.getItem("screenSize");
    const categories = document.querySelector("#categories");
    const disableDifficulty = categories.querySelectorAll(".difficulty li");
    if (screenSize === "small") {
        disableDifficulty.forEach((item) => {
            if (item.innerText === "MEDIUM") {
                item.classList.add("uk-disabled")

            } else if (item.innerText === "HARD") {
                item.classList.add("uk-disabled")
            }
        })
    } else if (screenSize === "medium") {
        disableDifficulty.forEach((item) => {
            if (item.innerText === "HARD") {
                item.classList.add("uk-disabled")
            }
        })
    } else {
        disableDifficulty.forEach((item) => {
            item.classList.remove("uk-disabled");
        });
    }
}

/**
 * identifies screen size for the disableDifficulty method,
 * Use local storage to store if screen is small or medium.
 */
const getResolution = () => {
    const username = localStorage.getItem("firstname");
    if (window.outerWidth < 500) {
        if (!(localStorage.getItem("screenSize") === "small")) {
            UIkit.modal.alert(`Hello ${username}, due to the screen size Medium and Hard difficulties has been disabled.`).then(function () {
            });
        }
        localStorage.setItem("screenSize", "small");
        disableDifficulty()
    } else if (window.outerWidth >= 501 && window.outerWidth <= 765) {
        console.log(window.outerWidth)
        if (!(localStorage.getItem("screenSize") === "medium")) {
            UIkit.modal.alert(`Hello ${username}, due to the screen size Hard difficulties has been disabled.`).then(function () {
            });
        }
        localStorage.setItem("screenSize", "medium");
        disableDifficulty()
    } else {
        if (localStorage.getItem("screenSize")) {
            localStorage.removeItem("screenSize");
        }
    }
}

/**
 * This will log out user and set a vallue locally
 */
const logOutUser = () => {
    const logOutButton = document.querySelector("#logOut");
    if (logOutButton !== null) {
        logOutButton.addEventListener("click", () => {
            localStorage.setItem("isAuthenticated", false);
            const logOut = localStorage.getItem("isAuthenticated")
            if (logOut === "false") {
                location.reload();
            }
        });
    }
}

/**
 * 
 * This is to remove all categoiries from screen whenever the game is being played.
 * 
 * @param {Array} categoriesElements 
 */
const removeElements = (categoriesElements) => {
    while (categoriesElements.firstChild) {
        categoriesElements.removeChild(categoriesElements.lastChild);
    }
}

/**
 * This is to personalise a bit, and display user with their first name
 * as a welcome.
 */
const welcomeUser = () => {
    const welcomeUser = document.querySelector("#welcomeUser");
    const userFirstName = localStorage.getItem("firstname");
    const capitalizedName = capitalizeFirstLetter(userFirstName);
    if (!(welcomeUser === null)) {
        welcomeUser.textContent = capitalizedName;
    }
}


/**
 * This is a function to make the first letter 
 * of someone's name capital, repeats for consecutive names too.
 * 
 * @param {string} firstName 
 */
const capitalizeFirstLetter = (firstName) => {
    const splitWords = firstName.toLowerCase().split(" ");
    const capitalizedName = splitWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return capitalizedName;
}

/**
 * This function gets all leadereboard content,
 * extract username, score, time and category for 
 * building the leaderboard. Returns an object containing
 * the coreect format for leaderboard display. 
 * 
 */
const getLeaderBoardContent = async () => {
    const response = puzzlePlay.getUsersLeaderboards();
    const allUserPerformance = await response.then((user) => {
        let userLeaderboards = user.map((user) => {
            if (user.leaderboards.length === 0) {
                return { username: user.username, leaderboard: [{ score: 0, time: 0, category: "No Category played." }] };
            }
            return { username: user.username, leaderboard: user.leaderboards }
        }).map((user) => {
            let addedLeaderBoardPerUser = {
                user: user.username,
                score: user.leaderboard.map((item) => {
                    return item.score;
                }).reduce((acc, result) => { return acc + result }),

                time: user.leaderboard.map((item) => {
                    return item.time;
                }).reduce((acc, result) => { return acc + result }),

                category: user.leaderboard.map((item) => {
                    return item.category;
                }).reduce((acc, result) => {
                    return acc.includes(result) ? acc : acc + ", " + result
                })
            };
            return addedLeaderBoardPerUser
        })
        return userLeaderboards;
    });
    return allUserPerformance;
}

const displayLeaderBoardContent = () => {
    const leaderboardsByUser = getLeaderBoardContent();
    leaderboardsByUser.then((element) => {
        element.sort((a, b) => (a.score < b.score) ? 1 : -1)
        element.map((element) => {
            const played = calculatePlayedSeconds(element.time);
            $("#dashboardModal tbody").append(
                "<tr>" +
                "<td>" + element.user + "</td>" +
                "<td>" + element.score + "</td>" +
                "<td>" + `${played.hours}:${played.minutes}:${played.seconds}` + "</td>" +
                "<td>" + element.category + "</td>"
                + "</tr>"
            );
        })
    })
}

/**
 * 
 * This will caculate total second played
 * and convert them into hours, minutes and seconds
 * 
 * @param {Object} element 
 */
const calculatePlayedSeconds = (element) => {
    const hours = splitTimeValues(Math.floor(element / 60 / 60))
    const minutes = splitTimeValues(Math.floor(element / 60) - (hours * 60));
    const seconds = splitTimeValues(element % 60);
    return { hours: hours, minutes: minutes, seconds: seconds }
}

/**
 * 
 * This is to take a string and add a 0 before it
 * if its only one digit.
 * 
 * @param {string} value 
 */
const splitTimeValues = (value) => {
    let valueString = value + "";
    if (valueString.length < 2) {
        return "0" + valueString;
    } else {
        return valueString;
    }

}