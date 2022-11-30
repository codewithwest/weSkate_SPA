export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getfile(element ,filename) {
        console.log(`${filename}`);
        let xhttp;
        if (filename) {
            xhttp.onreadystatechange = function () {
                if (this.onreadystatechange == 4) {
                    if (this.status == 200) {
                        element.innerHtml = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHtml = "<h1>.Not Found here</h1>";
                        
                    }
                }
            }
        }
        xhttp.open("GET", `static/views/${file}`, true);
        xhttp.send();
        return;
    }
}


