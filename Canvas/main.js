window.onload({

        
        chart : new CanvasJS.Chart("dice", {
            title :{
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
            }
        ]
        }),
        chart2 : new CanvasJS.Chart("diceStdv", {
            title :{
                text: "Dice Standard Deviation"
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
                    dataPoints: dps2
                    }
                ]
            
        }),

    chart3 : new CanvasJS.Chart("preConfig", {
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
    }),
    chart4 : new CanvasJS.Chart("preConfigStdv", {
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
        
    })



});