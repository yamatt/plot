import { GridStack, GridStackOptions, GridStackWidget } from 'gridstack';

export default class Grid {
    DEFAULT_GRID_OPTIONS = <GridStackOptions> {
        column: 12,
        alwaysShowResizeHandle: 'mobile'
    };

    DEFAULT_WIDGET = {
        w: 4, 
        h: 2,
        content: '<iframe class="panel" src=".">'
    }

    #grid: GridStack;

    get grid() {
        if (!this.#grid) {
            this.#grid = GridStack.init(this.DEFAULT_GRID_OPTIONS);
        }
        return this.#grid;
    }

    add_panel() {
        this.grid.addWidget(this.DEFAULT_WIDGET);
    }

    setup() {

    }
}