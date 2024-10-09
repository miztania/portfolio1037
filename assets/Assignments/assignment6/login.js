window.onload = loginLoad;

function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(event) {
    event.preventDefault(); // Prevent form submission

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const usernameRegister = urlParams.get('username');
    console.log(usernameRegister);

    const passwordRegister = urlParams.get('password');
    console.log(passwordRegister);

    // Get the values from the login form
    var usernameLogin = document.forms["myLogin"]["username"].value;
    var passwordLogin = document.forms["myLogin"]["password"].value;

    console.log(usernameLogin);

    // Check if the login credentials are correct
    if (usernameRegister !== usernameLogin || passwordRegister !== passwordLogin) {
        alert("Username or password is wrong");
        return false; // Prevent form submission
    } else {
        alert("Login successful!");
        // You can redirect or perform other actions here
    }
}
