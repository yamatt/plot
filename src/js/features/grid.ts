import { GridStack } from 'gridstack';

export default class Grid {
    DEFAULTS = {
        column: 12,
        alwaysShowResizeHandle: 'mobile'
    }

    #grid: GridStack;

    get grid() {
        if (!this.#grid) {
            this.#grid = GridStack.init();
        }
        return this.#grid;
    }

    setup() {

    }
}