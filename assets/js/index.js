import * as puzzlePlay from "./puzzlePlay.js";

window.addEventListener('load', () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated === "true") {
        loadLoggedInContent();
        setTimeout(() => {
            welcomeUser();
            logOutUser();
        }, 300);
    } else {
        loadLoggedOutContent();
    }
});

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

const loadLoggedInContent = () => {
    $("#app-root").load("gamepage.html");
    displayLeaderBoardContent();
}

const loadLoggedOutContent = () => {
    $("#app-root").load("homepage.html");
}

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

const removeElements = (categoriesElements) => {
    while (categoriesElements.firstChild) {
        categoriesElements.removeChild(categoriesElements.lastChild);
    }
}

const welcomeUser = () => {
    const welcomeUser = document.querySelector("#welcomeUser");
    const userFirstName = localStorage.getItem("firstname");
    const capitalizedName = capitalizeFirstLetter(userFirstName);
    if (!(welcomeUser === null)) {
        welcomeUser.textContent = capitalizedName;
    }
}

const capitalizeFirstLetter = (firstName) => {
    const splitWords = firstName.toLowerCase().split(" ");
    const capitalizedName = splitWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return capitalizedName;
}

const getLeaderBoardContent = async () => {
    const response = puzzlePlay.getUsersLeaderboards();
    const allUserPerformance = await response.then((user) => {
        let userLeaderboards = user.map((user) => {
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
        element.map((element) => {
            console.log(element.time)
            const hours = Math.floor(element.time / 60 / 60);
            const minutes = Math.floor(element.time / 60) - (hours * 60);
            const seconds = element.time % 60;
            console.log(`${hours}:${minutes}:${seconds}`)

            $("#dashboardModal tbody").append(
                "<tr>" +
                "<td>" + element.user + "</td>" +
                "<td>" + element.score + "</td>" +
                "<td>" + `${hours}:${minutes}:${seconds}` + "</td>" +
                "<td>" + element.category + "</td>"
                + "</tr>"
            );
        })
    })
}


