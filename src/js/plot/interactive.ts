import Plot from '../plot'

import { M } from '@materializecss/materialize';

export default class Interactive {

    #parent: Plot;

    #add_panel_id: string;
    #add_panel_el: HTMLElement;

    constructor(parent: Plot, add_panel_id: string) {
        this.#parent = parent;
        this.#add_panel_id = add_panel_id;
    }

    get add_panel_button() {
        if (!this.#add_panel_el) {
            this.#add_panel_el = document.getElementById(this.#add_panel_id);
            M.FloatingActionButton.init(this.#add_panel_el)
        }
        return this.#add_panel_el;
    }

    setup() {
        this.add_panel_button.addEventListener("click", this.#parent.grid.add_panel.bind(this.#parent.grid))
    }
}


