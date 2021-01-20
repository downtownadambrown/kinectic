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
                        console.log(emailCheckResponse)
                        emailCheckResponse.then((element) => {
                            if (element.length != 0) {
                                if (email.value === element[0].email) {
                                    const validator = $("#signUpForm").validate();
                                    validator.showErrors({
                                        "email": "Email is already taken."
                                    });
                                }
                            } else {
                                console.log("email does not exist")
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
                        console.log(userNameCheckResponse)
                        userNameCheckResponse.then((element) => {
                            if (element.length != 0) {
                                if (userName.value === element[0].username) {
                                    const validator = $("#signUpForm").validate();
                                    validator.showErrors({
                                        "userName": "Username is already taken."
                                    });
                                }
                            } else {
                                console.log("username does not exist")
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
            //checkUserName(form);
        }
    });
});


async function checkEmailExist(value) {
    const response = await checkExistingUserEmail(value);
    return response;
}
async function checkUserNameExist(value) {
    const response = await checkExistingUserName(value);
    return response;
}

async function postUserDetails(firstName, lastName, userName, email, password) {
    const res = axios
        .post('http://localhost:1337/auth/local/register', {
            firstname: firstName,
            lastname: lastName,
            username: userName,
            email: email,
            password: password
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            return error.response;
        });

    return res;
}

async function checkExistingUserEmail(email) {
    const res = axios
        .get('http://localhost:1337/users', {
            params: {
                email: email,
            }
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('Data', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            return error.response;
        });
    return res;
}

async function checkExistingUserName(username) {
    const res = axios
        .get('http://localhost:1337/users', {
            params: {
                username: username,
            }
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('Data', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            return error.response;
        });
    return res;
}

//    console.log(form.firstName.value, form.lastName.value, form.userName.value, form.email.value, form.password.value)
//     const response = await postUserDetails(form.firstName.value, form.lastName.value, form.userName.value, form.email.value, form.password.value)
//     console.log(response)
//     if (response.status === 400) {
//         console.log(response.data.message[0].messages[0].message)

//     }