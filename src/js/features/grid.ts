import { GridStack, GridStackOptions } from 'gridstack';

export default class Grid {
    DEFAULTS = <GridStackOptions> {
        column: 12,
        alwaysShowResizeHandle: 'mobile'
    };

    #grid: GridStack;

    get grid() {
        if (!this.#grid) {
            this.#grid = GridStack.init(this.DEFAULTS);
        }
        return this.#grid;
    }

    setup() {

    }
}