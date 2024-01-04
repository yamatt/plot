import { GridStack, GridStackOptions, GridItemHTMLElement } from 'gridstack';

export default class Grid {
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
        this.grid.on('resizestart', (e: Event, el: GridItemHTMLElement) => {
            const iframe = <Element> el.childNodes[0].childNodes[0];
            iframe.classList.add("non-interactive");
        });
        this.grid.on('resizestop', (e: Event, el: GridItemHTMLElement) => {
            const iframe = <Element> el.childNodes[0].childNodes[0];
            iframe.classList.remove("non-interactive");
        });
    }
}