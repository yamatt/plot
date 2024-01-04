import Interactive from './plot/interactive'

import Grid from './plot/grid';

export default class Plot {
    #interactive: Interactive;
    #grid: Grid;

    get interactive() {
        if (!this.#interactive) {
            this.#interactive = new Interactive(this, "add-panel");
        }
        return this.#interactive;
    }

    get grid() {
        if (!this.#grid) {
            this.#grid = new Grid();
        }
        return this.#grid;
    }

    setup() {
        this.interactive.setup()
        this.grid.setup()
    }
}
