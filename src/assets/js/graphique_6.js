new RGraph.SVG.Bar({
    id: 'graphique_6',
    data: [[420,310],[510,270],[520,550],[545,2478]],
    options: {
        marginLeft: 75,
        marginTop: 60,
        marginInner: 10,
        colors: ["#3e95cd", "#8e5ea2"],
        tooltips: 'Revenue: $%{value_formatted}',
        tooltipsCss: {
            fontWeight: 'bold'
        },
        yaxisScaleUnitsPre: '$',
        xaxisLabels: ['2020','2030','2040','2050'],
        key: ['Frankie','Bruno'],
        xaxisColor: '#aaa',
        xaxisTickmarks: 0,
        yaxisColor: '#aaa',
        yaxisTickmarks: 0
    }
}).draw();