const button = document.getElementById("lightmode_switch");
body = document.querySelector("html");
button.addEventListener("click", (e)=>{
    if (body.classList.contains("light")){
        body.classList.remove("light");
    }
    else{
        body.classList.add("light");
    }
});