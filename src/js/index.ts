import Grid from './features/grid'

class Dashbiz {
    #grid: Grid;

    get grid() {
        if (!this.#grid) {
            this.#grid = new Grid();
            this.#grid.setup()
        }
        return this.#grid;
    }

    setup() {
    }
}



(function () {
    const dashbiz = new Dashbiz();
    dashbiz.setup();
})();