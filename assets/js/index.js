const loadCorrectPage = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    console.log(typeof isAuthenticated);
    if (isAuthenticated === "true") {
        $("#loadPage").load("gamepage.html");
    } else if (isAuthenticated === "false") {
        $("#loadPage").load("homepage.html");
    }
}

window.addEventListener('load', () => {
    loadCorrectPage();
    setTimeout(() => {
        logOutUser();
    }, 100);
});

const logOutUser = () => {
    const logOutButton = document.querySelector("#logOut");
    logOutButton.addEventListener("click", () => {
        localStorage.setItem("isAuthenticated" , false);
        const logOut = localStorage.getItem("isAuthenticated")
        if (logOut === "false") {
            loadCorrectPage();
        }
    });
}