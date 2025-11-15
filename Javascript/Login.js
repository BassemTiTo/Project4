let email = document.querySelector(".email")

let password = document.querySelector(".Password")

let SingIn = document.querySelector(".Sign-In")


let getemail = localStorage.getItem("email")

let getpassword = localStorage.getItem("password")



SingIn.addEventListener("click",function(e){

e.preventDefault()

if(email.value ==="" || password.value ===""){
alert("أملا بيناتات كاملة ياسطا ")

}

else{

if(getemail.trim() && getemail === email.value.trim() && getpassword.trim() && getpassword === password.value.trim()){

    setTimeout(function(){
     
    window.location = "home.html"
         
    },500)

}

else{
    alert("الباسورد او الاميل واحد منهم خلط ياسطا")
}


}



})


























































































