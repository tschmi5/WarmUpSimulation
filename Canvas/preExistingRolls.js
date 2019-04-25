function preExistingRolls(){
    var MAX = 100;
    var updateInterval = 10;
    var dataLength = MAX; // number of dataPoints visible at any point
    var diceOne = 0;  
    
     // Chart 3 Unique Vars
     var yVal3 = 1; 
     var xVal3 = 0;
     var preData3 = 100;
     var total3 = 350;
     var dps3 = []; // dataPoints
 
 
     // Chart 2 Varience Unique Vars
 
     var xVal4 = 1;
     var yVal4 = 0; 
     var preDate4 = 100;
     var total4 = 350;
     var dps4 = []; // dataPoints

     var chart3 = new CanvasJS.Chart("preConfig", {
        title :{
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
            dataPoints: dps3
        }
    ]
    });
    var chart4 = new CanvasJS.Chart("preConfigStdv", {
        title :{
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
            maximum: 1,
            minimum: 0
        },      
        data: [
                {
                type: "line",
                dataPoints: dps4
                }
            ]
        
    });


    {
    
        var updatePreconfigCharts = function (count) {
        
            if(xVal3 < MAX){
            count = count || 1;
            
                diceOne = Math.floor(Math.random() *(+7 - +1) + 1);
                total3 = total3 + diceOne;
                yVal3 =  (total3/(xVal3+preData3));
    
                dps3.push({
                    x: xVal3,
                    y: yVal3
                    });       
                xVal3++;
                chart3.render();
                
                total4 = total4 + diceOne;
                avg4 = total4/(xVal4 + preDate4);
                yVal4 =  Math.sqrt(Math.pow(((3.5 - avg4)/3.5),2));
    
    
                dps4.push({
                    x: xVal4,
                    y: yVal4
                });
                
                xVal4++;
                chart4.render();
            } else {
                return;
            }
        };
    }

    updatePreconfigCharts(dataLength);
    setInterval(function(){updatePreconfigCharts()}, updateInterval);
}