/*=========================================================================================
    File Name: horizontal-lollipop-scatter.js
    Description: Dimple horizontal lollipop scatter chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Horizontal lollipop scatter chart
// ------------------------------
$(window).on("load", function(){

    // Construct chart
    var svg = dimple.newSvg("#horizontal-lollipop-scatter", "100%", 500);


    // Chart setup
    // ------------------------------

    d3.tsv("../../../robust-assets/demo-data/dimple/example-data.tsv", function (data) {

        // Create chart
        // ------------------------------

        // Define chart
        var myChart = new dimple.chart(svg, data);

        // Set bounds
        myChart.setBounds(0, 0, "100%", "100%");

        // Set margins
        myChart.setMargins(40, 10, 0, 50);


        // Create axes
        // ------------------------------

        // Horizontal
        var x = myChart.addMeasureAxis("x", "Unit Sales");

        // Vertical
        var y = myChart.addCategoryAxis("y", "Month");
            y.addOrderRule("Date");

        // Construct layout
        // ------------------------------

        // Add bubble
        var s = myChart.addSeries("Channel", dimple.plot.bubble);

        // Assign Color
        myChart.defaultColors = [
            new dimple.color("#673AB7"),
            new dimple.color("#E91E63"),
        ];

        // Add styles
        // ------------------------------

        // Font size
        x.fontSize = "12";
        y.fontSize = "12";

        // Draw
        myChart.draw();

        // Remove axis titles
        x.titleShape.remove();
        y.titleShape.remove();


        // Resize chart
        // ------------------------------

        // Add a method to draw the chart on resize of the window
        $(window).on('resize', resize);
        $(".menu-toggle").on('click', resize);

        // Resize function
        function resize() {
            setTimeout(function() {

                // Redraw chart
                myChart.draw(0, true);

                // Remove axis titles
                x.titleShape.remove();
                y.titleShape.remove();
            }, 100);
        }
    });
});