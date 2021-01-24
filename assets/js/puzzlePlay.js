setTimeout(() => {
    document.querySelectorAll('.category').forEach(item => {
        item.addEventListener('click', event => {
            const category = event.target.getAttribute("name");
            const splitCategory = category.split("-");
            const joinCategory = splitCategory.join("_");
            const difficultySelected = event.target.parentElement.querySelector(".difficulty > .uk-active");
            puzzleWordsAndSettings(joinCategory, difficultySelected.innerText);
        });
    });
}, 300);

const puzzleWordsAndSettings = (category, difficulty) => {
    const response = processCategoryRequest(category);
    const words = [];
    response.then((item) => {
        if (difficulty === "EASY") {
            const randomElement = [];
            for (let index = 0; index < item.length; index++) {
                let randomWord = item[Math.floor(Math.random() * item.length)]
                let checkWordsArray = randomElement.filter(word => word === randomWord.word)
                if (checkWordsArray.length > 0 || randomElement.length === 9) {
                    break;
                } else if (randomElement.length !== 10){
                    randomElement.push(randomWord.word);
                }                
            }
            console.log(randomElement)
        } else if (difficulty === "MEDIUM") {
            console.log("MEDIUM")
        } else if (difficulty === "HARD") {
            console.log("HARD")
        }
        item.map((item) => {
            words.push(item.word);
        })
    });

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