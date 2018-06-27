export default class NoteView {
    constructor(noteController) {
        this.noteController = noteController;
        this.element = this.createElement();

        console.log("Element: ");
        console.log(this.element);

        this.registerEventListeners();
    }

    createElement(){
        if ("content" in document.createElement("template")) {
            var templateElement = document.querySelector('#note-template'); //HTMLTemplateElement, HTMLTemplateElement.content - DocumentFragment
            var clone = templateElement.content.cloneNode(true);
            clone.querySelector("table").setAttribute("id", "a"); //temporary id
            return clone;

        } else {
            return null;
            // Find another way to add the rows to the table because
            // the HTML template element is not supported - TO DO!!!
        }
    }

    registerEventListeners() {
        console.log("wchodzi do register");

        var editButton = this.element.querySelector(".title");

        console.log("Edit button: ")
        console.log(editButton);

        editButton.addEventListener("click", () => {
            console.log("connected");
        }); //ok so it's working but you need to create buttons with your FUCKING ICONS and then connect eventlisteners you idiot
    }
}




//why we CREATE AN OBJECT in View? Why not in controller?
//where should I ask for input? View?
//if there is onlu one button - can I put it in HTML instead of adding by JS?



// this.element.getElementsByTagName('img')[0].addEventListener("dblclick", this.controller.handleDblClick.bind(this.controller));