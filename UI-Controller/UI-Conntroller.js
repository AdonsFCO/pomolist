let menu = document.querySelector("#menu");
let closeButton = document.getElementById("closeTap");



//This class shows the menu if the class inactive is related 

function showMenu(){
    console.log("The menu has been showed")
    if(menu.classList.contains("navInactive")){
        menu.classList.remove("navInactive");
    }
    menu.classList.add("navActive");
    setTimeout(()=>{
        closeButton.style.display= "block";
    }, 2000);
    
}


function hideMenu(){
    menu.classList.remove("navActive");

    menu.classList.add("navInactive");
    setTimeout(()=>{
        closeButton.style.display= "none";

    }, 100
  

    );

}