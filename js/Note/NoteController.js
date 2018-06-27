// import {storage} from "../Storage/Storage.js";

export default class NoteController {
    contructor(note) {
        this.note = note;
        // storage.add(note);
    }

    handleClick() {
        alert("handling!");
    }
}