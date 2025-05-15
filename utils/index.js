const logout = document.querySelector(".log-out");

logout.addEventListener("click" , () =>{
    localStorage.removeItem("token");
    window.location.href= '../pages/login.html'
})
