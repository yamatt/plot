export default class Panel {

    #form: HTMLFormElement;

    get form() {
        if (!this.#form) {
            this.#form =  document.getElementsByTagName("form")[0];
        }
        return this.#form;
    }

    setup() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = <HTMLFormElement> e.target;
            const data = new FormData(form);
            document.location.href = <string> data.get('url');
        })
    }
}