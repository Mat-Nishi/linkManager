const button = document.getElementById("lightmode_switch");
body = document.querySelector("html");
profileImg = document.getElementById("profileImg")
button.addEventListener("click", (e)=>{
    if (body.classList.contains("light")){
        body.classList.remove("light");
        profileImg.src = "./styles/assets/avatar.png"
        profileImg.alt = "Portrait of Mateus Nishimura wearing a white shirt in a dark background"
    }
    else{
        body.classList.add("light");
        profileImg.src = "./styles/assets/avatar-light.png"
        profileImg.alt = "Portrait of Mateus Nishimura wearing a white shirt in a light background"
    }
});