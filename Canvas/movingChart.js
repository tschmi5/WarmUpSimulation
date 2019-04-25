window.onload = function(){    
    var MAX = 100;
    var updateInterval = .001;
    var dataLength = MAX; // number of dataPoints visible at any point
    var diceOne = 0;

    //Unique Vars
{
    // Chart 1 Unique Vars
    var xVal1 = 1;
    var yVal1 = 0; 
    var total1 = 0;
    var dps1 = []; // dataPoints
    
    // Chart 1 Varience Unique Vars
    var yVal1v = 0; 
    var xVal1v = 0;
    var total1v = 0;
    var dps1v = []; // dataPoints


    // Chart 2 Unique Vars
    var xVal2 = 1;
    var yVal2 = 0; 
    var total2 = 0;
    var diceTwo = 0;
    var dps2 = []; // dataPoints

    // Chart 2 Varience Unique Vars

    var xVal2v = 1;
    var yVal2v = 0; 
    var total2v = 0;
    var dps2v = []; // dataPoints
}
    
    //Chart 1 Dice
{
    var chart = new CanvasJS.Chart("oneDice", {
        title :{
            text: "Dice Average"
        },
        axisY: {
            maximum: 4,
            minimum: -4
        },      
        data: [{
            type: "line",
            dataPoints: dps1
        }
    ]
    });
    
    var updateChart = function (count) {
    
        if(xVal1 < MAX){
        count = count || 1;
        
            diceOne = Math.floor(Math.random() *(+7 - +1) + 1);
            total1 = total1 + diceOne;
            yVal1 =  total1/xVal1;
            yVal1v = 3.5 - yVal1;

            dps1.push({
                x: xVal1,
                y: yVal1v
            });
            xVal1++;
        chart.render();
        } else {
            return;
        }
    };
}

    //Chart 2 Dice
{
    var chart2 = new CanvasJS.Chart("twoDice", {
        title :{
            text: "Two Dice Average"
        },
        toolTip: {
            shared: true
        },
        axisY: {
            maximum: 5,
            minimum: -5
        },      
        data: [
                {
                type: "line",
                dataPoints: dps2
                }
            ]
        
    });
    var updateChart2 = function (count) {
    
        if(xVal2 < MAX){
        count = count || 1;
        
            diceOne = Math.floor(Math.random() *(+7 - +1) + 1);
            diceTwo = Math.floor(Math.random() *(+7 - +1) + 1);
            total2 = total2 + (diceOne + diceTwo);
            yVal2 =  total2/xVal2;
            yVal2v = yVal2 - 7;
            dps2.push({
                x: xVal1,
                y: yVal2v
            });
            xVal2++;
        chart2.render();
        } else {
            return;
        }
    };
} 
    
    
    
    
    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);

    updateChart2(dataLength);
    setInterval(function(){updateChart2()}, updateInterval);

    
}



       