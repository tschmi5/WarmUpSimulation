window.onload = function () {
    
    var MAX = 1000;
    var dps = []; // dataPoints
    var avg = [];
    var mew = 0;
    var stdv = 0;

    for (var i = 0; i < MAX; i++){
        dps.push(Math.floor(Math.random() * (+7 - +1)) + 1);
        total += dps[i];

        avg[i] = (total/(i+1));

        console.log(i + " " + dps[i] + " " + avg[i]);
    }
    mew = total/MAX;
    for (var i = 0; i < MAX; i++){
        var variance = Math.pow(dps[i]-mew,2);
        stdv += Math.sqrt(variance);
    }
    for (var i = 0; i < MAX; i++){
        
    }
    
    
    


    var chart = new CanvasJS.Chart("standardNormal", {
        title :{
            text: "Standard Normal"
        },
        axisY: {
            maximum: 6,
            minimum: 1
        },      
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    
    var xVal = 1;
    var yVal = 0; 
    var updateInterval = .1;
    var dataLength = 20; // number of dataPoints visible at any point
    
    
    var updateChart = function (count) {
    
        if(xVal < 100){
        count = count || 1;
        
            roll = Math.floor(Math.random() *(+7 - +1) + 1);
            total = total + roll;
            yVal =  total/xVal;
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        chart.render();
        } else {
            return;
        }
    };
    
    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);
    
}
    