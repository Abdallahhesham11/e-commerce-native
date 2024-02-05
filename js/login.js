let username=document.querySelector("#username")
let password=document.querySelector("#password")
let registerBtn=document.querySelector("#sign_in")

let getUsername=localStorage.getItem("username")
let getPassword=localStorage.getItem("password")

registerBtn.addEventListener("click",function(e){
    e.preventDefault()
   if(username.value==="" ||password.value===""){
    alert("Please fill data")
   }
   else{
    if(getUsername&&getUsername.trim()===username.value && getPassword&&getPassword.trim()===password.value){
        setTimeout(()=>{
            window.location="index.html"
        } ,1500)
    }
    else{
        alert("username or password is wrong")
    }

   }
})