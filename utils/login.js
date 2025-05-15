const elForm = document.querySelector(".login-form");
const elUsername = document.querySelector("#username");
const elPassword = document.querySelector("#password");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userNameValue = elUsername.value.trim();
    const userPasswordValue = elPassword.value.trim();
    console.log(userPasswordValue);


    const user = {
        username: userNameValue,
        password: userPasswordValue,
    };

    const data = JSON.stringify(user);


    const API = `https://fakestoreapi.com/auth/login`;

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data
    })
        .then(response => response.json())
        .then(data => {
            const token = data.token;

            localStorage.setItem("token", token)
            alert("successfull validationd !!!*");


            window.location.href = "../pages/index.html"
        })


})



