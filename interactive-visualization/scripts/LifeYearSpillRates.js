function createLifeYearRate(filterData, mapState) {
data = filterData;

//loop through and count number of words
var lifeyr = data.map(function(a) {return a.LifeYear;});

var countLifeyr = {};
    for (var i=0; i< lifeyr.length; i++){
      var num = lifeyr[i];
      countLifeyr[num]=countLifeyr[num] ? countLifeyr[num]+1 : 1;
    }//end for loop
//console.log(countLifeyr);

var lifeYear = Object.keys(countLifeyr).map(function(k) {
    return +[k]
});
//console.log(lifeYear)

d3.csv("/~lap19/www/NCEAS/data/lifeyearwells.csv", function (wellsData){
   var wellDataMap = wellsData.filter(function(d, i){
// filter dates
      if (d["State"] == mapState) { return d; }
      }) //end filter data

   wellDataMap.forEach(function(d){
      d.Age = +d.Age;
      d.Wells = +d.Wells;
   }); //end forEach

   //filter again
   var wellDataMapFilter = wellDataMap.filter(function(d, i){
    for (k=0; k <= lifeYear.length; k++){
      if (d["Age"] == lifeYear[k]) { return d; }
      }
   });
//   console.log(wellDataMapFilter);

var arr = Object.keys(countLifeyr).map(function(k) { 
    return [k, countLifeyr[k]] });
//convert to csv
//console.log(arr);

var wellsAge = d3.entries(wellDataMapFilter).map(function(d) {return d.value.Age})
var wellsArr = d3.entries(wellDataMapFilter).map(function(d) {return d.value.Wells})
//console.log(wellsAge)
//console.log(wellsArr)

// add third part to array as number of wells
//combine 2 arrays into one
var rates = [];
for(i=0; i < Object.keys(lifeYear).length; i++)
    rates.push([wellsAge[i], arr[i][1], wellsArr[i]]);
//console.log(rates);
//console.log(Object.keys(lifeYear).length)

var max
//var max_array = Math.max.apply(null, wellsAge);
var max_array = lifeYear.length;
if (max_array > 8) { max = Math.round(8) }
if (max_array <= 8) { max = max_array }
if (Object.keys(lifeYear).length ==1 ) { max = Math.round(0) }
//console.log(max_array)
//console.log(max)

var rate = []
if (max == 0) {
  for (var i=0; i <= max; i++){
    rate[i] = Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2');
    //rate.push(Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2'));
    //console.log(rate[i]); //--> not sure where the problem is - it works for spills if i < max but not life year
  }

}
if (max > 0) {
  for (var i=0; i < max; i++){
    rate[i] = Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2');
    //rate.push(Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2'));
    //console.log(rate[i]); //--> not sure where the problem is - it works for spills if i < max but not life year
  }
}// end if for max = 0;

var rate2 = []
for (var i=8; i<rates.length; i++){
  rate2[i] = Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2');
}

//console.log(rate);
//console.log(rate2);

var mapRates = []
for(i =0; i < max; i++)
  mapRates.push([wellsAge[i], rates[i][1], rates[i][2], rate[i]])
//console.log(mapRates)

var maxWells = Math.max.apply(null, wellsArr);

//PLOTLY.JS
trace1 = {
  type: 'scatter',
  x: wellsAge,
  y: rate,
  mode: 'line + markers',
  name: 'Rate',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace2 = {
  type: 'scatter',
  x: wellsAge,
  y: rate2,
  mode: 'markers',
  name: 'Rate',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
};


/*trace3 = {
  type: 'scatter',
  x: wellsAge,
  y: wellsArr,
  mode: 'lines',
  name: 'Wells',
  line: {
    color: 'rgb(40, 55, 71)',
    width: 3
  },
  yaxis: "y2"
};
*/
var layout = {
    yaxis: {
        title: 'Life Year Spill Rate (%)',
        titlefont: {color: 'rgb(219, 64, 82)', size: 18,},
        tickfont: {color: 'rgb(219, 64, 82)', size: 15,},
        showline: true,
        showgrid: false,
        range: [0,18],
    },

     /*yaxis2: {
        title: 'Number of wells',
        titlefont: {color: 'rgb(40, 55, 71)'},
        tickfont: {color: 'rgb(40, 55, 71)'},
        overlaying: 'y',
        side: 'right',
        showline: true,
        showgrid: false,
        range: [0, maxWells + 1000]
    },*/

    xaxis: {
      title: 'Age of Well',
      titlefont: {color: 'black', size: 18,},
      tickfont: {color: 'black', size: 15,},
      range: [0,20],
      showline: true,
    },
    height: 300,
    //width: document.getElementById('annualrate').offsetWidth - 20,
    margin: {
        t: 25,
        b: 50,
        r: 20,
        l: 45
    },
    fixedrange: false, 
    showlegend: false
};

//var data = [trace1, trace2, trace3];
var data = [trace1, trace2];
//console.log(data);
Plotly.newPlot('lifeyearrate', data, layout);

});// end D3


} // END CREATE LIFEYEARRATE FUNCTION ###############################################

