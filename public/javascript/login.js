const loginFormHandler = async (event) => {
    event.preventDefault();
    const usernameEl = document.querySelector("#username-input-login");
    const passwordEl = document.querySelector("#password-input-login");
    await fetch("/api/user/login", {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(function() {
        document.location.replace("/");
    })
    .catch(err => console.log(err)) 
}

document   
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);