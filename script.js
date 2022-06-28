let submitBtn = document.querySelector("#submitSignup")
let submitLogin = document.querySelector("#submitLogin")
let firstName = document.querySelector("#firstname")
let signUpDiv = document.querySelector(".signUpDiv")
let signUp = document.querySelectorAll(".inputLogin")
let loginDiv = document.querySelector(".loginDiv")
let loginInput = document.querySelectorAll(".loginInput")

let userData = {}


submitBtn.addEventListener("click", function(){
    for (item of signUp){
        userData[item.name] = item.value
    }
    console.log(userData)
    loginDiv.style.display = "initial"


    for (item of loginInput){
        item.value = userData[item.name]
        console.log(userData[item.name]) 
    }

    signUpDiv.style.display = "none"


})


submitLogin.addEventListener("click", function(){

    loginDiv.style.display = "none"

    let userInfo = document.createElement("h1")
    userInfo.innerText = `Welcome ${userData.firstname}`
    document.body.appendChild(userInfo)


})



