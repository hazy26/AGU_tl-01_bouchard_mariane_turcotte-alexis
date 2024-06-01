function createGraphique2 () {
    horseshoe = new RGraph.SVG.Horseshoe({
        id: 'graphique_2',
        min: 0,
        max: 100,
        value: 10.3,
        color : '#8e5ea2',
        options: {
            labelsCenterDecimals: 1,
            labelsCenterUnitsPost: '%',
        }
    }).grow();
}
createGraphique2 ();