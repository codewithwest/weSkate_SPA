import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Shop");
    } 
    async getJs() { 
        return '/static/js/shop.js' ;
    }
    async getHtml() {
        return '/static/templates/shop.html';
    }
   
}