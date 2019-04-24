var rolls = [];
  var avgs = [];
  var total = 0;
  for (var i = 0; i < 10000; i++){
      rolls.push(Math.floor(Math.random() * (+7 - +1)) + 1);
      total+= rolls[i];
      avgs[i] = total/i;
      console.log(i + " " + rolls[i] + " " + avgs[i]);
  }