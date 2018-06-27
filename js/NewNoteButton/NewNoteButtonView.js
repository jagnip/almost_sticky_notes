export default class NewNoteButtonView {

    constructor(newButtonController) {
        this.newButtonController = newButtonController;
        this.registerEventListeners();
    }

    registerEventListeners() {
        document.getElementById("addButton").addEventListener("click", this.newButtonController.handleClick);
    }
}