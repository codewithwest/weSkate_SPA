import AbstractView from "./AbstractView.js";
var nameurl = "home.html";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

     getfile(nameurl){
        
     }
}