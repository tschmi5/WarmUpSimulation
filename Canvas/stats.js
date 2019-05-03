

var ss = require("simple-statistics");


    
    var MAX = 100;
    var rolls = []; // dataPoints
    var avg = [];
    var total = 0;
    var mew = 0;
    var stdv = 0;

    for (var i = 0; i < MAX; i++){
        rolls.push(Math.floor(Math.random() * (+7 - +1)) + 1);
        total += rolls[i];

        avg[i] = (total/(i+1));

        console.log(i + " " + rolls[i] + " " + avg[i]);
    }
    
    var fit = ss.interquartileRange(rolls);
    
    console.log(fit);
    
    
    
