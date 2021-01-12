async function requestDataFromAPI() {
    axios
        .get("http://localhost:1337/game-users")
        .then((response) => {
            //const found = response.data.find(element => element.userId === searchInput);
            response.data.forEach((s) => {
                //console.log(response.data.find(element => element.userId === searchInput));
                console.log(s);
            })

        })
        .catch((error) => console.error(error));
}

requestDataFromAPI();

async function postDataToAPI() {
    axios.post('http://localhost:1337/game-users', {
        username: 'Finn',
        email: 'Williams@gmail.com',
        password: "123sdfsdfsd"
    })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

postDataToAPI();