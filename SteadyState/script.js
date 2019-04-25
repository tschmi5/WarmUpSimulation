
function graph()
{

  
  // alert(vals);

  var rolls = [1000];
  var rollNum = [1000];
  var avgs = [1000];
  var total = 0;
  
  //rollNum.push(1000);


  // alert(nums);


  var ctx = document.getElementById("myChart");

  var data = {
    labels: rollNum,
      datasets: [
        { 
            data: [],
            label: "data",
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // fill: false
        }
      ]
    };
  }
  var options = {
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
  };
  var myChart = new Chart(ctx).Line(data,options);

  setInterval(function(){
    setData(data.datasets[0].data);
    var myChart = new Chart(ctx).Line(data,options);
  },2000);

  for (var i = 0; i < 1000; i++){
    rollNum.push((i+1));
    rolls.push(Math.floor(Math.random() * (+7 - +1)) + 1);
    total+= rolls[i];
    data[i]= (total/(i+1));
    console.log(i + " " + rolls[i] + " " + data[i]);
}
}