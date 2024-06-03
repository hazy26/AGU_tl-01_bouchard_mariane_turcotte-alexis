function createGrahique6(){
    new RGraph.SVG.Bar({
        id: 'graphique_6',
        data: [[1, 1.3],[0.2, 0.1],[0.4, 0.2]],
        options: {
            marginLeft: 50,
            marginInner: 20,
            marginInnerGrouped: 5,
            marginTop: 60,
            colors: ["#3e95cd", "#8e5ea2"],
            tooltips: 'Revenue: $%{value_formatted}',
            tooltipsCss: {
                fontWeight: 'bold'
            },
            xaxisLabels: ['2015-2019','2020','2021'],
            key: ['Chanson Francophone','Chanson Anglophone'],
            keyOffsety: -20,
            xaxisColor: '#aaa',
            xaxisTickmarks: 0,
            yaxisScaleUnitsPost: 'M',
            yaxisColor: '#aaa',
            yaxisTickmarks: 0
        }
    }).draw();
}
createGrahique6();