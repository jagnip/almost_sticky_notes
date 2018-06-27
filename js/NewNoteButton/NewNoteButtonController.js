import Note from "../Note/Note.js";
import NoteController from "../Note/NoteController.js";
import NoteView from "../Note/NoteView.js";

export default class NewNoteButtonController {

    constructor() {
    }

    handleClick() {
        let note = new Note();
        let noteController = new NoteController(note);
        let noteView = new NoteView(noteController);
        let container = document.getElementById("content");
        container.appendChild(noteView.element); //tu
    }

}
