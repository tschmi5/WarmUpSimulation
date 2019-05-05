function preExistingRolls(MAX, updateInterval) {
    var dataLength = MAX; // number of dataPoints visible at any point
    var diceOne = 0;
    var initBatchSize = 1000;
    var initBatchAvg = 3.5;

    // Chart 3 Unique Vars
    var yVal1 = 0;
    var xVal1 = 1;
    var preData1 = initBatchSize;
    var total1 = initBatchAvg * initBatchSize;
    var dps1 = []; // dataPoints


    // Chart 2 Varience Unique Vars

    var xVal2 = 1;
    var yVal2 = 0;
    var preDate2 = initBatchSize;
    var total2 = initBatchAvg * initBatchSize;
    var dps2 = []; // dataPoints

    var chart1 = new CanvasJS.Chart("preConfig", {
        title: {
            text: "Pre-Existing Data"
        },
        axisX: {
            minimum: 0,
            maximum: MAX
        },
        axisY: {
            maximum: 6,
            minimum: 0
        },
        data: [{
            type: "line",
            dataPoints: dps1
        }]
    });
    var chart2 = new CanvasJS.Chart("preConfigStdv", {
        title: {
            text: "Pre-Existing Standard Deviation"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            minimum: 0,
            maximum: MAX
        },
        axisY: {
            maximum: 0.5,
            minimum: 0
        },
        data: [{
            type: "line",
            dataPoints: dps2
        }]

    });


    var updatePreconfigCharts = function (count) {

        if (xVal1 < MAX) {
            count = count || 1;

            diceOne = Math.floor(Math.random() * (+7 - +1) + 1);
            total1 = total1 + diceOne;
            yVal1 = (total1 / (xVal1 + preData1));

            if ((xVal1 % (MAX / 10) == 0 && xVal1 > 0) || xVal1 == MAX - 1) {
                dps1.push({
                    x: xVal1,
                    y: yVal1,
                    indexLabel: yVal1.toFixed(3).toString(),
                    markerColor: "green",
                    markerType: "triangle"
                });
            } else {
                dps1.push({
                    x: xVal1,
                    y: yVal1
                });
            }
            xVal1++;
            chart1.render();

            total2 = total2 + diceOne;
            avg4 = total2 / (xVal2 + preDate2);
            yVal2 = Math.sqrt(Math.pow(((3.5 - avg4) / 3.5), 2));


            if ((xVal2 % (MAX / 10) == 0 && xVal2 > 0) || xVal2 == MAX - 1) {
                dps2.push({
                    x: xVal2,
                    y: yVal2,
                    indexLabel: yVal2.toFixed(3).toString(),
                    markerColor: "green",
                    markerType: "triangle"
                });
            } else {
                dps2.push({
                    x: xVal2,
                    y: yVal2
                });
            }

            xVal2++;
            chart2.render();
        } else {
            return;
        }
    };


    updatePreconfigCharts(dataLength);
    setInterval(function () {
        updatePreconfigCharts()
    }, updateInterval);
}