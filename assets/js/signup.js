setTimeout(() => {
    $(document).ready(function () {
        $("#signUpForm").validate({
            onclick: false,
            errorClass: "uk-text-danger",
            validClass: "uk-text-success",
            rules: {
                email: {
                    email: true,
                    depends: function (email) {
                        const regExpression = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                        if (email.value.match(regExpression)) {
                            const emailCheckResponse = checkEmailExist(email.value);
                            emailCheckResponse.then((element) => {
                                if (element.length === 1) {
                                    if (email.value === element[0].email) {
                                        const validator = $("#signUpForm").validate();
                                        validator.showErrors({
                                            "email": "Email is already taken."
                                        });
                                    }
                                } else {
                                    console.log(email)

                                }
                            });
                        } else if (!email.value.match(regExpression)) {
                            const validator = $("#signUpForm").validate();
                            validator.showErrors({
                                "email": "Email has wrong format."
                            });
                        }
                    }
                },
                userName: {
                    depends: function (userName) {
                        const regExpression = /^[a-z0-9_.]+$/;
                        if (userName.value.match(regExpression)) {
                            const userNameCheckResponse = checkUserNameExist(userName.value);
                            userNameCheckResponse.then((element) => {
                                if (element.length === 1) {
                                    if (userName.value === element[0].username) {
                                        const validator = $("#signUpForm").validate();
                                        validator.showErrors({
                                            "userName": "Username is already taken."
                                        });
                                    }
                                } else {
                                    console.log(userName)
                                }
                            });
                        } else if (!userName.value.match(regExpression) && userName.value.length >= 6) {
                            const validator = $("#signUpForm").validate();
                            validator.showErrors({
                                "userName": "Username must be lowercase."
                            });
                        }
                    }
                },
            },
            messages: {
                firstName: {
                    required: "Please enter your first name.",
                    min: "First name must have at least 3 characters.",
                    max: "Maximum length is 30 characters."
                },
                lastName: {
                    required: "Please enter your last name.",
                    min: "Last name must have at least 3 characters.",
                    max: "Maximum length is 30 characters."
                },
                userName: {
                    required: "Please enter your username.",
                    min: "Username must be at least 6 characters.",
                    max: "Maximum length is 30 characters."
                },
                email: {
                    required: "Please enter your email.",
                    email: "Email must be a valid email.",
                },
                password: {
                    required: "Please enter your password.",
                    min: "Password must be at least 6 characters.",
                    max: "Maximum password length is 18 characters."
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault();
                const response = dispatchUserDetails(form.firstName.value, form.lastName.value, form.userName.value, form.email.value, form.password.value);
                $('#signUpForm').trigger("reset");
                storeUserDetailsLocallyForGaming(response);
            }
        });
    });
}, 300);

async function storeUserDetailsLocallyForGaming(response) {
    console.log(response)
    response.then((element) => {
        if (element.status === 400 || element.statusText === "Bad Request") {
            console.log("Email or Username already exists.", element);
        } else {
            console.log("Successfully received user details.", element)
            localStorage.setItem("firstname", element.user.firstname);
            localStorage.setItem("username", element.user.username);
            localStorage.setItem("token", element.jwt);
            localStorage.setItem("id", element.user.id);
            localStorage.setItem("isAuthenticated", "true");
            location.reload();
        }
    })
}

async function dispatchUserDetails(firstName, lastName, userName, email, password) {
    const promiseResponse = await addUserDetailsToDatabase(firstName, lastName, userName, email, password);
    return promiseResponse;
}

async function checkEmailExist(email) {
    if (localStorage.getItem("isAuthenticated") === "true") {
        location.reload()
    }
    const promiseResponse = await checkExistingUserEmail(email);
    return promiseResponse;
}
async function checkUserNameExist(userName) {
    if (localStorage.getItem("isAuthenticated") === "true") {
        location.reload()
    }
    const promiseResponse = await checkExistingUserName(userName);
    return promiseResponse;
}

async function addUserDetailsToDatabase(firstName, lastName, userName, email, password) {
    const res = axios
        .post('https://api.kinectic.io/auth/local/register', {
            firstname: firstName,
            lastname: lastName,
            username: userName,
            email: email,
            password: password
        })
        .then(response => {
            // Handle success.
            console.log('Registering User!');
            console.log('User profile', response.data.user);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst registering a user.', error.response);
            return error.response;
        });

    return res;
}

async function checkExistingUserEmail(email) {
    const res = axios
        .get('https://api.kinectic.io/users', {
            params: {
                email: email,
            }
        })
        .then(response => {
            // Handle success.
            console.log('Email Check!');
            console.log('User Email Checked Response', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst checking email.', error.response);
            return error.response;
        });
    return res;
}

async function checkExistingUserName(username) {
    const res = axios
        .get('https://api.kinectic.io/users', {
            params: {
                username: username,
            }
        })
        .then(response => {
            // Handle success.
            console.log('Username Check!');
            console.log('Username Checked Response', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst checking username.', error.response);
            return error.response;
        });
    return res;
}