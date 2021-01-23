setTimeout(() => {
    document.querySelectorAll('.category').forEach(item => {
        item.addEventListener('click', event => {
            console.log(event.target.getAttribute("name"));
            const difficultySelected = event.target.parentElement.querySelector(".difficulty > .uk-active");
            console.log(difficultySelected.innerText);
        });
    });
}, 300);

async function checkExistingUserName() {
    const res = axios
        .get('http://localhost:1337/word-categories', {
            params: {
                username: username,
            }
        })
        .then(response => {
            // Handle success.
            //console.log('Username Check!');
            //console.log('Username Checked Response', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            //console.log('An error occurred, whilst checking username.', error.response);
            return error.response;
        });
    return res;
}