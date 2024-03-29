import Plot from './plot'
import Panel from './panel';

(function () {
    const page = document.getElementsByTagName("body")[0].dataset.type;
    if(page == "main") {
        const plot = new Plot();
        plot.setup();
        plot.grid.add_panel();
    }
    else if (page == "panel") {
        const panel = new Panel();
        panel.setup();
    }
})();