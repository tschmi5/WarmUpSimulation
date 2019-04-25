window.onload = function(){    
    var MAX = 100;
    var updateInterval = 10;
    var updateInterval2 = 100;
    var dataLength = MAX; // number of dataPoints visible at any point
    var diceOne = 0;

    //Unique Vars
{
    // Chart 1 Unique Vars
    var xVal1 = 1;
    var yVal1 = 0; 
    var total1 = 0;
    var dps1 = []; // dataPoints

    // Chart 2 Unique Vars
    var xVal2 = 1;
    var yVal2 = 0; 
    var total2 = 0;
    var diceTwo = 0;
    var dps2 = []; // dataPoints
    
    // Chart 3 Unique Vars
    var yVal3 = 0; 
    var xVal3 = 0;
    var preData = 100;
    var total3 = 350;
    var dps3 = []; // dataPoints


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
        axisX: {
            minimum: 0,
            maximum: MAX
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
            yVal1 =  (total1/xVal1) - 3.5;
            

            dps1.push({
                x: xVal1,
                y: yVal1
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
            text: "Variance"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            minimum: 0,
            maximum: MAX
        },
        axisY: {
            //maximum: 200,
            //minimum: -200
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
            //diceTwo = Math.floor(Math.random() *(+1001 - +1) + 1);
            total2 = total2 + diceOne;
            var avg = total2/xVal2;
            yVal2 =  Math.sqrt(Math.pow(((3.5 - avg)/3.5),2));
            dps2.push({
                x: xVal1,
                y: yVal2
                });
            xVal2++;
        chart2.render();
        } else {
            return;
        }
    };
} 

{
    var chart3 = new CanvasJS.Chart("preConfig", {
        title :{
            text: "Existing Data"
        },
        axisX: {
            minimum: 0,
            maximum: MAX
        },
        axisY: {
            maximum: 1,
            minimum: -1
        },      
        data: [{
            type: "line",
            dataPoints: dps3
        }
    ]
    });
    
    var updateChart3 = function (count) {
    
        if(xVal3 < MAX){
        count = count || 1;
        
            diceOne = Math.floor(Math.random() *(+7 - +1) + 1);
            total3 = total3 + diceOne;
            yVal3 =  (total3/(xVal3+preData)) - 3.5;
            

            dps3.push({
                x: xVal3,
                y: yVal3
            });
            xVal3++;
        chart3.render();
        } else {
            return;
        }
    };
}
    
    
    
    
    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);

    updateChart2(dataLength);
    setInterval(function(){updateChart2()}, updateInterval);

    updateChart3(dataLength);
    setInterval(function(){updateChart3()}, updateInterval);
    
}



       