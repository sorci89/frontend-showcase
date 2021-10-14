function pageLoaded() {
    console.log("Az oldal betoltodott");

    document.getElementById("root").classList.add("loaded");
    function rootClicked(){
        console.log("A root Id-ju elemre kattintottunk");
    }
    document.getElementById("root").addEventListener("click", rootClicked);    
}


window.addEventListener("load", pageLoaded);