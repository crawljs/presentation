(function (w) {

  var d = w.document
    , Chart = w.Chart
    , color = '#586e75'
    , options = {
      scaleOverlay: true,
      scaleOverride : true,
      scaleFontSize: 20,
      scaleLineColor: color,
      scaleGridLineColor: color,
      scaleSteps : 14,
      //Number - The value jump in the hard coded scale
      scaleStepWidth : 100,
      //Number - The scale starting value
      scaleStartValue : 0,
      scaleFontColor: color,

    };

  //color: #586e75

  //exp1
  var data_exp1 = {
    labels : ['1','2','3','4','5'],
    datasets : [
      {
        data : [169,456,850,1069,1326]
      }
    ]
  };
  new Chart(d.getElementById('chart_exp1').getContext("2d")).Bar(data_exp1, options);

  //exp2
  var data_exp2 = {
    labels: ['Configuration 1', 'Configuration 2'],
    datasets: [ { data: [210, 983]}, { data: [1069], fillColor: 'rgba(220,220,220,0.5)'} ]
  };
  options.scaleSteps = 12;
  new Chart(d.getElementById('chart_exp2').getContext("2d")).Bar(data_exp2, options);

})(this);
