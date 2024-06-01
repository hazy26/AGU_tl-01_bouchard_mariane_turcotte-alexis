function createGraphique1() {
    labels = [
        50,
        20,
        35,
        15
    ];
    data = RGraph.arrayClone(labels);
    bar = new RGraph.Bar({
        id: "graphique_1",
        data: data,
        options: {
            backgroundGridAlign: false,
            backgroundGridVlinesCount: 8,
            backgroundGridHlinesCount: 10,
            backgroundGridColor: "#3e95cd",
            backgroundGridLinewidth: 2,
            colors: [
                "#8e5ea2"
            ],
            yaxisScaleMax: 100,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 30,
            marginBottom: 45,
            yaxisScale: false,
            xaxisLabels: [
                "Sonia",
                "Lia",
                "Rose",
                "Denis"
            ],
            xaxisLabelsColor: "#3e95cd",
            xaxis: false,
            yaxis: false,
            textSize: 16,
            textColor: "rgba(0,0,0,0)",
            textFont: "Verdana",
            colorsStroke: "rgba(0,0,0,0)"
        }
    }).grow().on("draw", function() {
        for(var i = 0; i < 4; i++)RGraph.text({
            object: bar,
            text: labels[i] + "%",
            x: bar.coords[i][0] + bar.coords[i][2] / 2,
            y: 30,
            color: "black",
            size: 14,
            halign: "center",
            font: "Verdana"
        });
    });
}
createGraphique1();

//# sourceMappingURL=index.97c574c3.js.map
