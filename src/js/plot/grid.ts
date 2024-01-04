import Plot from '../plot'

import { GridStack, GridStackOptions, GridStackWidget, GridItemHTMLElement } from 'gridstack';

export default class Grid {
    #parent: Plot;

    DEFAULT_GRID_OPTIONS = <GridStackOptions> {
        column: 12,
        alwaysShowResizeHandle: 'mobile'
    };

    DEFAULT_WIDGET = {
        w: 4, 
        h: 2,
        content: '<iframe class="no-border fill-h fill-w" allow="autoplay; encrypted-media;" src="./new-panel.html">'
    }

    #grid: GridStack;

    constructor(parent: Plot) {
        this.#parent = parent;
    }

    get grid() {
        if (!this.#grid) {
            this.#grid = GridStack.init(this.DEFAULT_GRID_OPTIONS);
        }
        return this.#grid;
    }

    add_panel() {
        this.grid.addWidget(this.DEFAULT_WIDGET);
        this.update_url();
    }

    get current_state() {
        const data = <GridStackWidget[]> this.grid.save();
        return data;
    }

    load_state(options: GridStackWidget[]) {
        this.grid.removeAll();
        this.grid.load(options);
    }

    update_url() {
        this.#parent.update_url(JSON.stringify(this.current_state));
    }

    setup() {
        this.grid.on('resizestart', (e: Event, el: GridItemHTMLElement) => {
            const iframe = <Element> el.childNodes[0].childNodes[0];
            iframe.classList.add("non-interactive");
        });
        this.grid.on('resize', (e: Event, el: GridItemHTMLElement) => {
            this.update_url();
        });
        this.grid.on('resizestop', (e: Event, el: GridItemHTMLElement) => {
            const iframe = <Element> el.childNodes[0].childNodes[0];
            iframe.classList.remove("non-interactive");
        });
    }
}