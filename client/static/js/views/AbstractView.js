export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    getHtml(){
        return '/static/templates/home.html'
     }
     async getJs() { 
        return '/static/js/home.js' ;
    }
}


