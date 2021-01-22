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

export { loadCorrectPage }