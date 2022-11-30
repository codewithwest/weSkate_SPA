import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1>About</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}