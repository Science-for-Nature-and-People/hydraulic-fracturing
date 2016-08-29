
//Load Data and get correct########################################################
function createCauseSpill(filterData) {
data = filterData;
//console.log(data);

var causes = data.map(function(a) {return a.cause;});
var countCause = {};
    for (var i=0; i< causes.length; i++){
      var num = causes[i];
      countCause[num]=countCause[num] ? countCause[num]+1 : 1;
    }//end for loop
//console.log(countCause);

var causeCategory = $.map(countCause, function(v,i) { return i; });
var causeCount = Object.keys(countCause).map(function (key) { return countCause[key]; });
//console.log(causeCount);

var max_cause = 0;
for (var i = 0; i < causeCount.length; i++){
  max_cause += causeCount[i];
}
var max
if (max_cause >= 500) { max = max_cause}
if (max_cause < 500) { max = Math.round(500)}
//console.log(causeCount[0]);
//console.log(causeCategory[0]);
//console.log(max)

// pull out variables
var eq = []; var human = []; var env = []; var unk = [];
for (var i = 0; i < causeCount.length; i++){
  if (causeCategory[i] == "Equipment Failure") { eq = causeCount[i]}
  if (causeCategory[i] == "Human Error") { human = causeCount[i]}
  if (causeCategory[i] == "Environmental Conditions") { env = causeCount[i]}
  if (causeCategory[i] == "Unknown") { unk = causeCount[i]}
}// end for loop
//console.log(eq);
//console.log(human);
//console.log(env);
//console.log(unk);


var trace0 = {
  x: [eq],
  y: ['cause'],
  name: 'Equipment',
  orientation: 'h',
  marker: {
    color: '#FF4136',
    width: 1,
  },
  type: 'bar'
};

var trace1 = {
  x: [human],
  y: ['cause'],
  name: 'Human',
  orientation: 'h',
  marker: {
    color: '#0041C2',
    width: 1
  },
  type: 'bar'
};

var trace2 = {
  x: [env],
  y: ['cause'],
  name: 'Environment',
  orientation: 'h',
  marker: {
    color: '#3D9970',
    width: 1
  },
  type: 'bar'
};

var trace3 = {
  x: [unk],
  y: ['cause'],
  name: 'Unknown',
  orientation: 'h',
  marker: {
    color: '#848482',
    width: 1
  },
  type: 'bar'
};

var data = [trace0, trace1, trace2, trace3];

var layout = {
   xaxis: {
        title: 'Number of Wells',
        range: [0, max+50],
        showgrid: false,
         tickfont: {
            size: 14,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
    yaxis: {
      titlefont: {
        size: 18,
        color: "black",
        },
    },
    showlegend: false,
    hoverinfo: "y+x",
    hovermode: 'closest',
    textinfo: 'none',
    font: {
      size: 18,
      color: "black",
    },
    //height: 100,
    //width: 500,
    margin: {
        t: 20,
        b: 40,
        r: 20,
        l: 60
    },
  barmode: 'stack'
};

//console.log(data);
Plotly.newPlot('causeMech', data, layout);



} //END CREATE CHART FUNCTION ##########################################################

