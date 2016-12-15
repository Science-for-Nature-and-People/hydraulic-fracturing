
//Load Data and get correct########################################################
function createSpillRate(filterData, mapState) {
data = filterData;
//console.log(data);
//lop through and count number of words
var spillyr = data.map(function(a) {return a.year;});

var countSpillyr = {};
    for (var i=0; i< spillyr.length; i++){
      var num = spillyr[i];
      countSpillyr[num]=countSpillyr[num] ? countSpillyr[num]+1 : 1;
    }//end for loop
//console.log(countSpillyr);

var spillYear = Object.keys(countSpillyr).map(function(k) {
    return countSpillyr[k]
});

var spillYear2 = Object.keys(countSpillyr).map(function(k) {
    return +[k]
});
//console.log(spillYear2)

d3.csv("../NCEAS/data/annualwells.csv", function (wellsData){
   var wellDataMap = wellsData.filter(function(d, i){
// filter dates
      if (d["State"] == mapState) { return d; }
      }) //end filter data

   wellDataMap.forEach(function(d){
      d.Year = +d.Year;
      d.Wells = +d.Wells;
   }); //end forEach

   //filter again
   var wellDataMapFilter = wellDataMap.filter(function(d, i){
    for (k=0; k< spillYear2.length; k++){
      if (d["Year"] == spillYear2[k]) { return d; }
      }
   });
  //  console.log(wellDataMapFilter);

var arr = Object.keys(countSpillyr).map(function(k) { 
    return [k, countSpillyr[k]] });
//convert to csv
//console.log(arr);


var wellsYear = d3.entries(wellDataMapFilter).map(function(d) {return d.value.Year})
var wellsArr = d3.entries(wellDataMapFilter).map(function(d) {return d.value.Wells})
//console.log(wellsYear)
//console.log(wellsArr)
//console.log(spillYear);

// add third part to array as number of wells
//combine 2 arrays into one
var rates = [];
for(i =0; i < spillYear2.length; i++)
  //rates.push([wellsYear[i], arr[i][1], wellsArr[i]]);
    rates.push([spillYear2[i][0], arr[i][1], wellsArr[i]]);

var rate = []
for (var i=0; i < rates.length; i++){
  rate[i] = Number(Math.round(rates[i][1] / rates[i][2] * 100 + 'e2')+'e-2');
}
//console.log(rates)
//console.log(rate);

var mapRates = []
for(i =0; i < rates.length; i++)
  mapRates.push([spillYear2[i], rates[i][1], rates[i][2], rate[i]])
//console.log(mapRates)

var max = Math.max.apply(null, wellsArr);

//PLOTLY.JS
trace1 = {
  type: 'scatter',
  x: spillYear2,
  y: rate,
  mode: 'lines + markers',
  name: 'Rate',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
};

trace2 = {
  type: 'scatter',
  x: spillYear2,
  y: wellsArr,
  mode: 'lines',
  name: 'Wells',
  line: {
    color: 'rgba(40, 55, 71, 0.4)',
    width: 1,
  },
  yaxis: "y2"
};


var layout = {
    yaxis: {
        title: 'Annual Spill Rate (%)',
        titlefont: {color: 'rgb(219, 64, 82)', size: 18},
        tickfont: {color: 'rgb(219, 64, 82)', size: 15},
        showline: true,
        showgrid: false,
        range: [0,18]
    },

    yaxis2: {
        title: 'Cumulative Number of Wells',
        titlefont: {color: 'rgb(40, 55, 71)', size: 14},
        tickfont: {color: 'rgb(40, 55, 71)', size: 12},
        overlaying: 'y',
        side: 'right',
        showline: true,
        showgrid: false,
        range: [0, max + 1000]
    },

    xaxis: {
      range: [2005,2014],
      showline: true,
      title: 'Year of Spill',
      titlefont: {color: 'rgb(40, 55, 71)', size: 18},
      tickfont: {color: 'rgb(40, 55, 71)', size: 15},
      //zerolinewidth: 1,
    },
    height: 300,
    showlegend: false,
    //width: document.getElementById('annualrate').offsetWidth - 20,
    margin: {
        t: 25,
        b: 50,
        r: 45,
        l: 45
    },
    fixedrange: false
};

var data = [trace1, trace2];
//console.log(data);
Plotly.newPlot('annualrate', data, layout);


});// end D3
} //END CREATE CHART FUNCTION ##########################################################

