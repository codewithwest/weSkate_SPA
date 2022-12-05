import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("About");
    }

    async getHtml() {
        return '/static/templates/about.html';
    }
    async getJs() { 
        return '/static/js/about.js' ;
    }
}