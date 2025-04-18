const clock = document.getElementById("clock")

setInterval(function(){
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.style.color = "black";
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)