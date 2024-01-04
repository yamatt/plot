export default class Panel {

    #youtube_video_id_regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

    #form: HTMLFormElement;
    #iframe: HTMLElement;

    get form() {
        if (!this.#form) {
            this.#form = document.getElementsByTagName("form")[0];
        }
        return this.#form;
    }

    get iframe() {
        if (!this.#iframe) {
            this.#iframe = document.getElementsByTagName("iframe")[0];
        }
        return this.#iframe;
    }

    setup() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = <HTMLFormElement> e.target;
            const data = new FormData(form);
            const url = <string> data.get('url');

            if(url.startsWith("https://www.youtube.com/watch?v=")) {
                const video_id = url.match(this.#youtube_video_id_regex);
                const video_url = `https://www.youtube.com/embed/${video_id}?si=gqA_FiEwiqmI5F--`; // https://www.youtube.com/embed/w9uJg68CV4g?si=gqA_FiEwiqmI5F--
                console.log("hi", video_url);
                document.location.href = video_url;
            }
            else {
                document.location.href = url;
            }
        })
    }
}