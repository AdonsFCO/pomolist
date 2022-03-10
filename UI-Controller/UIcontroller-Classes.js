class BurgerButton {
    /** This is the burger button controller.
     * 
     * @param {windows.document} documentElement 
     * @param {Tab} target 
     * 
     */
    // 
    constructor(documentElement, target) {
        this.documentElement = documentElement;
        this.target = target;
        this.reference; //<--- This is a reference for a funcition just to deleted if its necesary. 
        this.documentElement.addEventListener("click", this.reference = this.desactivate.bind(this));
        this._onScreen = true;
    }
    /**
     * This button enables the burger button.
     * 
     *  
     */
    desactivate() {
        this.target.visible = true;
        this._onScreen = true;
        this.visible = false;
    }
    activate() {
      
        this.target.visible = false; 
        this._onScreen = false;
      
            this.visible = true;
            
       

    }

    /**
     * @param {boolean} visibility
     */
    set visible(visibility) {
        if (visibility === false) {
            this.documentElement.style.display = "none";

        }
        else {
            setTimeout(()=>{
                this.documentElement.style.display = "block";
                 console.log("setTimeout");
            },1600)
            
        }


    }
}
class TabCloseButton {
    /** This is the close button controller 
     * 
     * @param {windows.document} documentElement - Specfy which close button you are going to use.
     * @param {Tab} target - Use the target that is goingto close. 
     */
    constructor(documentElement, target) {
        this.documentElement = documentElement;
        this.target = target;
        this._onScreen = false;
        
        this.eventReference; // This is a reference to remove event onclick.
    }

    closeTarget() {

        this.target.visible = false;
        this.visible = false;

    }


    /**
     * @param {boolean} visiblity - Display the visibility of the button.
     */
    set visible(visiblity) {

        if (visiblity === true) {
            setTimeout(() => {
                this.documentElement.style.display = "block";

            }, 2000);
            this.documentElement.addEventListener("click", this.eventReference = this.closeTarget.bind(this));

        }
        else {
            setTimeout(() => {
                this.documentElement.removeEventListener("click", this.eventReference);
                this.documentElement.style.display = "none";
                
            }, 100);

        }

    }

}
class Tab {
    /** This class can control the visual tabas on the screen. 
     * 
     * @param {windows.document} documentElement - Specify wich element we are going to control on the screen. 
     */
    constructor(documentElement) {
        this.documentElement = documentElement;
        this._onScreen = false; //<--- Do not change this value. Just used as a reference
        this.hasBeenClosed;
    }

    /**
     * Show if an element isvisibility when the value is true.
     * 
     * @param {boolean} visiblity - The value that can be specify to show _onScreen.
     */

    set visible(visiblity) {



        if (((this.documentElement.classList.contains(`${this.documentElement.id}inactive`)) && visiblity === false) || visiblity === true && this._onScreen === false) {


            this.documentElement.classList.add(`${this.documentElement.id}Active`);
            this.documentElement.classList.remove(`${this.documentElement.id}Inactive`);
            this._onScreen = true;
            console.log(`${visiblity} <--- visiblity ${this._onScreen} <--- onscreen`)
            this.hasBeenClosed = false;
        }
        else {
            if ((this.documentElement.classList.contains(`${this.documentElement.id}Active`) && visiblity === false) || (visiblity === false && this._onScreen === true)) {
                this.documentElement.classList.remove(`${this.documentElement.id}Active`);
                this.documentElement.classList.add(`${this.documentElement.id}Inactive`);
                console.log("this shit should happened")
                this._onScreen = false;
                this.hasBeenClosed = true;
                console.log(`${visiblity} <--- visiblity ${this._onScreen} <--- onscreen`)
            }

        }
        console.log(`${visiblity} <--- visiblity ${this._onScreen} <--- onscreen`)
    }


}
class StaticTab extends Tab {



}
/**
 * 
 * @param {windows.document} menu - This represents the contolos of the menu tab. 
 * @param {windows.document} pomodorosTab - This represents the controls of the pomodoro tab. 
 * @param {windows.document} mainTab - This represents the controls of the main tab. 
 * @param {windows.document} closeButton - This represents the controls of the close button. 
 * @param {windows.document} burgerButton - This represents the controls of the burger button. 
 *
 * 
 */

class UserInterfaceController {
    constructor(menu, pomodorosTab, mainTab, closeButton, burgerButton, pomoButton) {
        this.menu = menu;
        this.pomodorosTab = pomodorosTab;
        this.mainTab = mainTab;
        this.closeButton = closeButton;
        this.burgerButton = burgerButton;

        this.pomodoroButton = pomoButton; //<--- Please delete this later

        //Reference Function for click events 
        this.reference;

        //Inicialize the elements 
        this.menu = new Tab(this.menu);
        this.pomodorosTab = new Tab(this.pomodorosTab);
        this.mainTab = new StaticTab(this.mainTab);
        this.closeButton = new TabCloseButton(this.closeButton, this.menu);
        this.burgerButton = new BurgerButton(this.burgerButton, this.menu);


        //Observe menu tab. 
        this.observerMenu = new MutationObserver(() => {

            if(this.menu.hasBeenClosed === true)
            {
                if(this.menu._onScreen === false && this.menu.documentElement.classList.contains("menuInactive") && this.pomodorosTab._onScreen === true)
                {
                   
                    setTimeout(()=>{this.closeButton.target = this.pomodorosTab;},3000);                    
                    this.closeButton.visible = true; 
                    

                }

            }


            if (this.menu._onScreen === true) {
                this.closeButton.target = this.menu; 
                this.closeButton.visible = true;
                return 
            }
         
               
                this.closeButton.visible = false;
                this.burgerButton.activate();

           

        });
        this.observerMenu.observe(this.menu.documentElement, { attributes: true });




        //observe Pomodoro tab 
        this.pomodoroButton.addEventListener("click", () => {
            this.pomodorosTab.visible = true;

        })

        this.observerPomodoro = new MutationObserver(() => {
          

            if (this.pomodorosTab._onScreen === true) {
                this.closeButton.target = this.pomodorosTab;
                this.closeButton.visible = true;
                return 
            }
          
                this.closeButton.visible = false;

            


        });
        this.observerPomodoro.observe(this.pomodorosTab.documentElement, { attributes: true });





    }





}






//here I give thos elements to the new object so I can work with then.

//let menu = new Tab(document.getElementById("menu"));
// let pomodorosTab = new Tab(document.getElementById("pomo"));
// let tabCloser = new TabCloseButton(document.getElementById("closeTap"), menu);
// menu.visible = true;
// tabCloser.visible = true;
//let burger = new BurgerButton(document.getElementById("burger"), menu);