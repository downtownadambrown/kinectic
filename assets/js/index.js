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
    displayDashBoardContent();
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

const displayDashBoardContent = () => {
    let allScores = 0, user = "", allTime = 0, category = "";
    const allUserPerformance = [];
    const response = puzzlePlay.getDashboards();
    response.then((item) => {
        item.forEach(element => {
            const singleUserPerformance = {
                username: element.username.username,
                allScores: element.score,
                allTime: element.time,
                category: element.category,
            }
            allUserPerformance.push(singleUserPerformance)
        });
        // $("#dashboardModal tbody").append(
        //     "<tr>" +
        //     "<td>" + element.username.username + "</td>" +
        //     "<td>" + element.score + "</td>" +
        //     "<td>" + element.time + "</td>" +
        //     "<td>" + element.category + "</td>"
        //     + "</tr>"
        // );
    });
    console.log(allUserPerformance)
    allUserPerformance.filter((item) => {
        console.log(item)
    });

}