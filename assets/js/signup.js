$(document).ready(function () {
    $("#signUpForm").validate({
        errorClass: "uk-text-danger",
        validClass: "uk-text-success",
        rules: {
            email: {
                email: true,
                depends: async function (element) {
                    const res = await checkExistingUser(element.value);
                    console.log("test", res)
                    var validator = $("#signUpForm").validate();
                    validator.showErrors({
                        "email": "Email is already taken."
                    });
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
                required: "Please enter your age.",
                min: "Password must be at least 6 characters.",
                max: "Maximum password length is 18 characters."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            checkUserName(form);
        }
    });
});


async function checkUserName(form) {
    console.log(form.firstName.value, form.lastName.value, form.userName.value, form.email.value, form.password.value)
    const response = await postUserDetails(form.firstName.value, form.lastName.value, form.userName.value, form.email.value, form.password.value)
    console.log(response)
    if (response.status === 400) {
        console.log(response.data.message[0].messages[0].message)

    }
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

async function checkExistingUser(username, email) {
    const res = axios
        .get('http://localhost:1337/users', {
            params: {
                username: username,
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