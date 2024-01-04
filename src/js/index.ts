import Plot from './plot/plot'

(function () {
    const page = document.getElementsByTagName("body")[0].dataset.type;
    if(page == "main") {
        const plot = new Plot();
        plot.setup();
    }
    else if (page == "panel") {
        // setup panel
    }
})();