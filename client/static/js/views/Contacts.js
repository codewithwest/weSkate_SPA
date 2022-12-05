import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contacts");
    }

    async getHtml() {
        return '/static/templates/contacts.html';
    }
}