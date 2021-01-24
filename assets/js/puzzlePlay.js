setTimeout(() => {
    document.querySelectorAll('.category').forEach(item => {
        item.addEventListener('click', event => {
            const category = event.target.getAttribute("name");
            const splitCategory = category.split("-");
            const joinCategory = splitCategory.join("_");            
            const difficultySelected = event.target.parentElement.querySelector(".difficulty > .uk-active");
            puzzleWordsAndSettings(joinCategory, difficultySelected);
        });
    });
}, 300);

const puzzleWordsAndSettings = (category, difficulty) => {
    const puzzleWords = processCategoryRequest(category);
    console.log(puzzleWords);

}

async function processCategoryRequest(category) {
    const promiseResponse = await getCategoryWords(category);
    return promiseResponse;
}

async function getCategoryWords(category) {
    const res = axios
        .get('http://localhost:1337/puzzles', {
            params: {
                category: category
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