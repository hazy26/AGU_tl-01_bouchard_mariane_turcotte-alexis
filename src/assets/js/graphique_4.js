function createGraphique4(){
    names = ["Africa", "Asia", "Europe"];

    new RGraph.SVG.Line({
        id: 'graphique_4',
        data: [
            [1,2,4,8,16],
            [8,6,5,2,4],
            [4,9,5,6,3]
        ],
        options: {
            spline: true,
            linewidth: 3,
            tickmarksStyle: 'filledcircle',
            colors: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: names,
            tooltipsFormattedUnitsPost: ',000',
            tooltipsCss: {
                fontWeight: 'bold',
                textAlign:'left'
            },
            xaxisLabels: ['1960','1970','1980'],
            key: names,
            keyTextSize:12,
            xaxisColor: '#aaa',
            yaxisColor: '#aaa',
            yaxisLabelsCount: 4,
            yaxisScaleUnitsPost: 'k',
            textSize: 9
        }
    }).draw();
}
createGraphique4();