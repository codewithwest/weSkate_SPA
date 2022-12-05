import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Events");
    }

    async getHtml() {
        return '/static/templates/events.html';
    }
}