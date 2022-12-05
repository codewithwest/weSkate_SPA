import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Shop");
    }
    async getHtml() {
        return '/static/templates/shop.html';
    }
}