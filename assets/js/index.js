const loadCorrectPage = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    console.log(typeof isAuthenticated);
    if (isAuthenticated === "true") {
        $("#app-root").load("gamepage.html");
    } else if (isAuthenticated === "false") {
        $("#app-root").load("homepage.html");
    }
}

window.addEventListener('load', () => {
    loadCorrectPage();
    setTimeout(() => {
        logOutUser();
    }, 200);
});

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

setTimeout(() => {
    welcomeUser();
}, 100);

const welcomeUser = () => {
    const welcomeUser = document.querySelector("#welcomeUser");
    const userFirstName = localStorage.getItem("firstname");
    const capitalizedName = capitalizeFirstLetter(userFirstName);
    welcomeUser.textContent = capitalizedName;
}

const capitalizeFirstLetter = (firstName) => {
    const splitWords = firstName.toLowerCase().split(" ");
    const capitalizedName = splitWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return capitalizedName;
}






