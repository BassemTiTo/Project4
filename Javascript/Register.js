let fristname = document.querySelector(".first-name")

let lastname = document.querySelector(".last-name")

let email = document.querySelector(".email")

let password = document.querySelector(".password")

let signup = document.querySelector(".sign-up")



signup.addEventListener("click" , function(Norefersh){

Norefersh.preventDefault()

if( fristname.value === ""   || lastname.value === ""  || email.value === "" ||password.value ==="" ){

alert("أملا البيناتات ياسطا لازم تتدخل كل بيناتات")

}

else{
 
localStorage.setItem("fristname",fristname.value)

localStorage.setItem("lastname",lastname.value)

localStorage.setItem("email",email.value)

localStorage.setItem("password",password.value)



setTimeout(function(){
window.location="login.html"

},500)

alert("Account Created Sucessfully")

}



})
































































