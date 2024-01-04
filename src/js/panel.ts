export default class Panel {

    #youtube_video_id_regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
    #form: HTMLFormElement;

    get form() {
        if (!this.#form) {
            this.#form = document.getElementsByTagName("form")[0];
        }
        return this.#form;
    }

    setup() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            const form = <HTMLFormElement> e.target;
            const data = new FormData(form);
            const url = <string> data.get('url');

            if(url.startsWith("https://www.youtube.com/watch?v=")) {
                const video_id = url.match(this.#youtube_video_id_regex);
                const video_url = `https://www.youtube.com/embed/${video_id}?enablejsapi=1`;
                document.location.href = video_url;
            }
            else {
                document.location.href = url;
            }
        })
    }
}