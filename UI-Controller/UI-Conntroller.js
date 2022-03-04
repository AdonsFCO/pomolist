let menu = document.querySelector("#menu");
let closeButton = document.getElementById("closeTap");
let pomodoros = document.getElementById("pomo");




/*This function close the current tab that is oppened*/
function closeCurrentTab(tab) {

    tab.classList.remove(`${tab.id}Active`);
    tab.classList.add(`${tab.id}Inactive`)
    closeButton.removeEventListener("click",(e) =>{});
    showCloseButton(false);
}


/*This function shows exit button and adds an event listener to that 
button*/
function showCloseButton(visible, tab) {
    if (visible === true) {

        setTimeout(() => {
            closeButton.style.display = "block";
        }, 2000);
        closeButton.addEventListener("click", function (e) {
            closeCurrentTab(tab); //<-- I will fix this later i promise

        });
    } else {
        setTimeout(() => {
            closeButton.style.display = "none";

        }, 100 //<----- TimeOut don't delete me 


        );
    }

}

function showThisTab(thisMenu) {
    console.log(thisMenu)
    if (thisMenu.classList.contains(`${thisMenu.id}Inactive`)) {
        thisMenu.classList.remove((`${thisMenu.id}Inactive`));
    }

    thisMenu.classList.add(`${thisMenu.id}Active`)

    showCloseButton(true, thisMenu);
}

// function hideThisMenu(thisMenu) {
//     thisMenu.classList.remove(`${thisMenu.id}Active`);
//     menu.classList.add(`${thisMenu.id}Inactive`);
//     showCloseButton(false);
//}

// function showMenu() {
//     menu.classList.add("navActive");
//     showCloseButton(true, menu);


// }


/*This function hide that menu*/

// function hideMenu() {
//     menu.classList.remove("navActive");

//     menu.classList.add("navInactive");
//     showCloseButton(false);
// }



// /*This function show the menu that come from the right */
// function showPomodoroMenu() {
//     if (pomodoroMenu.classList.contains("pomoInactive")) {
//         pomodoroMenu.classList.remove("pomoInactive");
//     }
//     pomodoroMenu.classList.add("pomoActive");
//     showCloseButton(true);

// }
