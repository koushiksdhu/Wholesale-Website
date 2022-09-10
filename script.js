//script of Login and Signup Page

const container1 = document.querySelector(".container1"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container1.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container1.classList.remove("active");
    });

var menuItems = document.getElementById("Menu-items")

menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}


