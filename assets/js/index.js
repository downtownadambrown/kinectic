const loadCorrectPage = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    console.log(typeof isAuthenticated);
    if (isAuthenticated === "true") {
        $("#loadPage").load("gamepage.html");
    } else if (isAuthenticated === "false") {
        $("#loadPage").load("homepage.html");
    }
}




$(document).ready(function () {
    console.log("ready!");
    loadCorrectPage();
});