function createGraphique3 () {
    
    
    labels = ['Étape 1','Étape 2','Étape 3','Étape 4'];

    new RGraph.SVG.Funnel({
        id: 'graphique_3',
        data: [100,75,50,25],
        options: {
            title: 'Projet 23',
            marginTop: 45,
            marginLeft: 150,
            marginRight: 5,
            linewidth: 0,
            colors: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            backgroundBars: true,
            labels: '%{global:labels[%{index}]} (%{value_formatted})',
            labelsFormattedUnitsPost: '%',                    
            labelsSize: 18,
            labelsItalic: true,
            labelsColor: 'gray',
            labelsHalign: 'left',
            labelsPosition: 'edge',
            tooltips: 'Value at this point: <b>%{value_formatted}%</b>',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '12pt',
                opacity: 0.85
            }
        }
    }).draw();

}

createGraphique3 (); 
