
function graph()
{

  
  // alert(vals);

  var rolls = [];
  var rollNum = [];
  var data = [];
  var total = 0;
  for (var i = 0; i < 1000; i++){
      rollNum.push((i+1));
      rolls.push(Math.floor(Math.random() * (+7 - +1)) + 1);
      total+= rolls[i];
      data.push(total/(i+1));
      console.log(i + " " + rolls[i] + " " + data[i]);

  }
  //rollNum.push(1000);


  // alert(nums);


  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: rollNum,
      datasets: [
        { 
            data: data,
            label: "data",
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // fill: false
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            maxTicksLimit: 10,
            
            stepSize: 100
          }
        }],
        yAxes: [{
          ticks: {
            min: 1,
            max: 6,
            stepSize: 0.5
          }
          
        }]
      }
    }
  });
}