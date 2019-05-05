function shuffleCharts(MAX, updateInterval) {
    var dataLength = MAX; // number of dataPoints visible at any point
    var diceOne = 0;

    //Unique Vars
    {
        // Chart 1 Unique Vars
        var xVal1 = 1;
        var yVal1 = 0;
        var total1 = 0;
        var dps1 = [];

        // Chart 2 Unique Vars
        var avg2 = 0;
        var xVal2 = 1;
        var yVal2 = 0;
        var total2 = 0;
        var dps2 = []; 

        var dps3 = []; 


    }

    //Chart 1 Dice
    
        var chart = new CanvasJS.Chart("preShuffledChart", {
            title: {
                text: "Dice Average"
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
        var chart2 = new CanvasJS.Chart("shuffledChart", {
            title: {
                text: "Shuffled Average"
            },
            toolTip: {
                shared: true
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
                dataPoints: dps2
            }]

        });
        var chart3 = new CanvasJS.Chart("shuffledDiffChart", {
            title: {
                text: "Chart 1 - Chart 2"
            },
            toolTip: {
                shared: true
            },
            axisX: {
                minimum: 0,
                maximum: MAX
            },
            axisY: {
                maximum: 3,
                minimum: -3
            },
            data: [{
                type: "line",
                dataPoints: dps3
            }]

        });



        var updateDiceCharts = function (count) {

            if (xVal1 < MAX) {
                count = count || 1;

                diceOne = Math.floor(Math.random() * (+7 - +1) + 1);
                total1 = total1 + diceOne;
                yVal1 = (total1 / xVal1);

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
                chart.render();

                total2 = total2 + diceOne;
                avg2 = total2 / xVal2;
                yVal2 = (total2/xVal2);

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
                if(xVal2 == MAX){
                    shuffle(dps2);
                    chart2.render();

                    subtract(dps1,dps2,dps3);
                    chart3.render();

                }
                

            } else {
                return;
            }
        };
    

    updateDiceCharts(dataLength);
    setInterval(function () {
        updateDiceCharts()
    }, updateInterval);
    




};
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i].y, array[j].y] = [array[j].y, array[i].y]; // swap elements
    }
  }
  function subtract(array,array2,array3) {
    for (let i = array.length - 1; i > 0; i--) {
        array3.push({
            x: array[i].x,
            y: array[i].y - array2[i].y
        });
      
    }
  }