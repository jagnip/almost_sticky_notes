export default class Note {

    constructor() {
        this._title = "Placeholder for title";
        this._content = "Placeholder for content";
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}