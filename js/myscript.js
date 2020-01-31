window.onscroll = function() {
    myFunction();
}

function myFunction(){
    if(document.body.scrollTop() >= 50){
        document.getElementById("nav").classList.add("color");
    }
    else{
        document.getElementById("nav").classList.remove("color");
    }
}