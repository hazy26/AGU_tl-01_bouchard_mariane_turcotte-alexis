new RGraph.SVG.Pie({
    id: "graphique_5",
    data: [
        35,
        35,
        15,
        15
    ],
    options: {
        linewidth: 3,
        colorsStroke: "white",
        colors: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
        ],
        tooltips: "%{prop:key[%{index}]}: %{value}",
        tooltipsCss: {
            fontWeight: "bold"
        },
        key: [
            "Team 1",
            "Team 2",
            "Team 3",
            "Team 4"
        ],
        textSize: 10,
        marginTop: 60,
        title: "Un Pie Chart!",
        titleItalic: true,
        titleY: 22
    }
}).draw();

//# sourceMappingURL=index.ba958af2.js.map
