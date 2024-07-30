// console.log("Hello World");

const login = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const loginClose = document.querySelector(".login-close");

const openLogin = function(){
    login.style.display = "block";
}

const closeLogin = function(){
    login.style.display = "none";
}

const closeBtn = function(e){
    if(e.target == login) {
        closeLogin();
    }
};

loginBtn.addEventListener("click", openLogin);
loginClose.addEventListener("click", closeLogin);
window.addEventListener("click", closeBtn);