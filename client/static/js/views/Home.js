import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

     getHtml(){
        return '/static/templates/home.html'
     }
     async getJs() { 
        return '/static/js/home.js' ;
    }
}