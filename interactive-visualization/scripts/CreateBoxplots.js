function createTrace(target){
var selection = document.boxplot.boxplotList;
    for (i=0; i<selection.length; i++)
        if (selection[i].checked==true)
        plotThisBox = selection[i].value; 

   /* if (plotThisBox == "Cause"){
       // createBoxplot(filterData, mapState);
    }

    if (plotThisBox == "Pathway"){
       // createBoxplotPathway(mapState);
    }

    if (plotThisBox == "LessPathway"){
       // createBoxplotLessPathway(mapState);
    }

    if (plotThisBox == "LifeYear"){
      //  createBoxplotLifeYear(mapState);
    }

    if (plotThisBox == "SpillYear"){
        //createBoxplotSpillYear(mapState);
    }

    if (plotThisBox == "SpudYear"){
        createBoxplotSpudYear(mapState);
    }
*/
    createPathway(mapState, mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapPathway, mapCause);
    return plotThisBox;
} // end create trace


//Load data
//function createBoxplot(mapState){
  //var spills = $.get("../NCEAS/data/" + mapState + "_spills_final_dataviz.csv", function(csvString){
  //var objectsData = $.csv.toObjects(csvString);

function createBoxplot(filterData, mapState){
  //createTrace();
  object = filterData;
  var objectsData = Object.keys(object).map(function(key) {return object[key]});
   //console.log(arr);

 if (plotThisBox == "Cause"){
  //subset out data by cause for Causal Mechanism Boxplot
      var eq = objectsData.filter(function (el){
        return el.cause == "Equipment Failure" & el.volume_gal>0;
      });//end filter

      var human = objectsData.filter(function (el){
        return el.cause == "Human Error" & el.volume_gal>0;
      });//end filter
        
      var env = objectsData.filter(function (el){
        return el.cause == "Environmental Conditions" & el.volume_gal>0;
      });//end filter
      
      var unk = objectsData.filter(function (el){
        return el.cause == "Unknown" & el.volume_gal>0;
      });//end filter
      

//create boxplot arrays of volume
var eqVol = eq.map(function(a) {return a.volume_gal;});
var humanVol = human.map(function(a) {return a.volume_gal;});
var envVol = env.map(function(a) {return a.volume_gal;});
var unkVol = unk.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: eqVol,
    x: "Equipment Failure",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Equipment Failure",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace2 = {
    y: humanVol,
    x: "Human Error",
    marker: {color: '#0041C2'},
    type: 'box',
    name: "Human Error",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace3 = {
    y: envVol,
    x: "Environmental",
    marker: {color: '#3D9970'},
    type: 'box',
    name: "Environmental",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};


var trace4 = {
    y: unkVol,
    x: "Unknown",
    marker: {color: '#848482'},
    type: 'box',
    name: "Unknown",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
          tickfont: {
            size: 15,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
        //type: "log",
    },
    xaxis: {
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 40,
        r: 10,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
  }//end if statement CAUSE



if (plotThisBox == "Pathway"){
 //subset out data by cause for Causal Mechanism Boxplot
      var blowout = objectsData.filter(function (el){
        return el.pathway == "Blowout" & el.volume_gal>0;
      });//end filter

      var flowline = objectsData.filter(function (el){
        return el.pathway == "Flowline" & el.volume_gal>0;
      });//end filter
        
      var heatertreater = objectsData.filter(function (el){
        return el.pathway == "Heater Treater" & el.volume_gal>0;
      });//end filter
      
      var pit = objectsData.filter(function (el){
        return el.pathway == "Pit" & el.volume_gal>0;
       });//end filter

      var pump = objectsData.filter(function (el){
        return el.pathway == "Pump" & el.volume_gal>0;
      });//end filter

      var stuffingbox = objectsData.filter(function (el){
        return el.pathway == "Stuffing Box" & el.volume_gal>0;
      });//end filter

      var tank = objectsData.filter(function (el){
        return el.pathway == "Tank" & el.volume_gal>0;
      });//end filter

      var transport = objectsData.filter(function (el){
        return el.pathway == "Transport" & el.volume_gal>0;
      });//end filter

      var wellhead = objectsData.filter(function (el){
        return el.pathway == "Wellhead" & el.volume_gal>0;
      });//end filter

      var unknown = objectsData.filter(function (el){
        return el.pathway == "Unknown" & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var blowoutVol = blowout.map(function(a) {return a.volume_gal;});
var flowlineVol = flowline.map(function(a) {return a.volume_gal;});
var heatertreaterVol = heatertreater.map(function(a) {return a.volume_gal;});
var pitVol = pit.map(function(a) {return a.volume_gal;});
var pumpVol = pump.map(function(a) {return a.volume_gal;});
var stuffingboxVol = stuffingbox.map(function(a) {return a.volume_gal;});
var tankVol = tank.map(function(a) {return a.volume_gal;});
var transportVol = transport.map(function(a) {return a.volume_gal;});
var wellheadVol = wellhead.map(function(a) {return a.volume_gal;});
var unknownVol = unknown.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: blowoutVol,    x: "Blowout",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Blowout",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: flowlineVol,    x: "Flowline",
    marker: {color: '#0041C2'},
    type: 'box',
    name: "Flowline",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: heatertreaterVol,    x: "Heater Treater",
    marker: {color: '#3D9970'},
    type: 'box',
    name: "Heater Treater",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace4 = {
    y: pitVol,    x: "Pit",
    marker: {color: '#DC7633'},
    type: 'box',
    name: "pit",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace5 = {
    y: pumpVol,    x: "Pump",
    marker: {color: '#34495E'},
    type: 'box',
    name: "Pump",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace6 = {
    y: stuffingboxVol,    x: "Stuffing Box",
    marker: {color: '#17A589'},
    type: 'box',
    name: "Stuffing Box",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace7 = {
    y: tankVol,    x: "Tank",
    marker: {color: '#C0392B  '},
    type: 'box',
    name: "Tank",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace8 = {
    y: transportVol,    x: "Transport",
    marker: {color: '#8E44AD'},
    type: 'box',
    name: "Transport",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace9 = {
    y: wellheadVol,    x: "Wellhead",
    marker: {color: '#B7950B'},
    type: 'box',
    name: "Wellhead",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace10 = {
    y: unknownVol,    x: "Unknown",
    marker: {color: '#848482'},
    type: 'box',
    name: "Unknown",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
          tickfont: {
            size: 15,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
        xaxis: {
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 65,
        r: 30,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
  }//end if COMMON PATHWAYS



if (plotThisBox == "LessPathway"){
 //subset out data by cause for Causal Mechanism Boxplot
      var bop = objectsData.filter(function (el){
        return el.pathway == "Blowout Preventer" & el.volume_gal>0;
      });//end filter

      var drillrig = objectsData.filter(function (el){
        return el.pathway == "Drill Rig" & el.volume_gal>0;
      });//end filter
        
      var fwko = objectsData.filter(function (el){
        return el.pathway == "Free Water Knockout" & el.volume_gal>0;
      });//end filter
      
      var sep = objectsData.filter(function (el){
        return el.pathway == "Separator" & el.volume_gal>0;
       });//end filter

      var container = objectsData.filter(function (el){
        return el.pathway == "Storage Container" & el.volume_gal>0;
      });//end filter

      var casing = objectsData.filter(function (el){
        return el.pathway == "Well Casing" & el.volume_gal>0;
      });//end filter

      var communicate = objectsData.filter(function (el){
        return el.pathway == "Well Communication" & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var bopVol = bop.map(function(a) {return a.volume_gal;});
var drillrigVol = drillrig.map(function(a) {return a.volume_gal;});
var fwkoVol = fwko.map(function(a) {return a.volume_gal;});
var sepVol = sep.map(function(a) {return a.volume_gal;});
var containerVol = container.map(function(a) {return a.volume_gal;});
var casingVol = casing.map(function(a) {return a.volume_gal;});
var communicateVol = communicate.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: bopVol,    x: "Blowout Preventer",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Blowout Preventer",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: drillrigVol,    x: "Drill Rig",
    marker: {color: '#0041C2'},
    type: 'box',
    name: "Drill Rig",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: fwkoVol,    x: "Free Water Knockout",
    marker: {color: '#3D9970'},
    type: 'box',
    name: "Free Water Knockout",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace4 = {
    y: sepVol,    x: "Separator",
    marker: {color: '#DC7633'},
    type: 'box',
    name: "Separator",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace5 = {
    y: containerVol,    x: "Storage Container",
    marker: {color: '#B7950B'},
    type: 'box',
    name: "Storage Container",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace6 = {
    y: casingVol,    x: "Well Casing",
    marker: {color: '#34495E'},
    type: 'box',
    name: "Well Casing",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace7 = {
    y: communicateVol,    x: "Well Comm.",
    marker: {color: '#8E44AD'},
    type: 'box',
    name: "Well Comm.",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
       tickfont: {
            size: 14,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
    xaxis: {
       tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 100,
        r: 40,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
}//end If LESSPATHWAY






if (plotThisBox == "LifeYear"){ 
//subset out data by cause for Causal Mechanism Boxplot
      var yr0 = objectsData.filter(function (el){
        return el.LifeYear == 0 & el.volume_gal>0;
      });//end filter

      var yr1 = objectsData.filter(function (el){
        return el.LifeYear == 1 & el.volume_gal>0;
      });//end filter
        
      var yr2 = objectsData.filter(function (el){
        return el.LifeYear == 2 & el.volume_gal>0;
      });//end filter
      
      var yr3 = objectsData.filter(function (el){
        return el.LifeYear == 3 & el.volume_gal>0;
       });//end filter

      var yr4 = objectsData.filter(function (el){
        return el.LifeYear == 4 & el.volume_gal>0;
      });//end filter

      var yr5 = objectsData.filter(function (el){
        return el.LifeYear == 5 & el.volume_gal>0;
      });//end filter

      var yr6 = objectsData.filter(function (el){
        return el.LifeYear == 6 & el.volume_gal>0;
      });//end filter

      var yr7 = objectsData.filter(function (el){
        return el.LifeYear == 7 & el.volume_gal>0;
      });//end filter

      var yr8to10 = objectsData.filter(function (el){
        return el.LifeYear >= 8 & el.LifeYear<=10 & el.volume_gal>0;
      });//end filter

      var yr11up = objectsData.filter(function (el){
        return el.LifeYear >= 11 & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var yr0Vol = yr0.map(function(a) {return a.volume_gal;});
var yr1Vol = yr1.map(function(a) {return a.volume_gal;});
var yr2Vol = yr2.map(function(a) {return a.volume_gal;});
var yr3Vol = yr3.map(function(a) {return a.volume_gal;});
var yr4Vol = yr4.map(function(a) {return a.volume_gal;});
var yr5Vol = yr5.map(function(a) {return a.volume_gal;});
var yr6Vol = yr6.map(function(a) {return a.volume_gal;});
var yr7Vol = yr7.map(function(a) {return a.volume_gal;});
var yr8to10Vol = yr8to10.map(function(a) {return a.volume_gal;});
var yr11upVol = yr11up.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: yr0Vol,    x: "Spud Year",
    marker: {color: '#151515'},
    type: 'box',
    name: "Spud Year",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: yr1Vol,    x: "Year 1",
    marker: {color: '#1C1C1C'},
    type: 'box',
    name: "Year 1",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: yr2Vol,    x: "Year 2",
    marker: {color: '#2E2E2E'},
    type: 'box',
    name: "Year 2",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace4 = {
    y: yr3Vol,    x: "Year 3",
    marker: {color: '#424242'},
    type: 'box',
    name: "Year 3",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace5 = {
    y: yr4Vol,    x: "Year 4",
    marker: {color: '#585858'},
    type: 'box',
    name: "Year 4",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace6 = {
    y: yr5Vol,    x: "Year 5",
    marker: {color: '#6E6E6E'},
    type: 'box',
    name: "Year 5",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace7 = {
    y: yr6Vol,    x: "Year 6",
    marker: {color: '#848484'},
    type: 'box',
    name: "Year 6",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace8 = {
    y: yr7Vol,    x: "Year 7",
    marker: {color: '#A4A4A4'},
    type: 'box',
    name: "Year 7",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace9 = {
    y: yr8to10Vol,    x: "Years 8-10",
    marker: {color: '#BDBDBD'},
    type: 'box',
    name: "Years 8-10",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace10 = {
    y: yr11upVol,    x: "Years 11 up",
    marker: {color: '#D8D8D8'},
    type: 'box',
    name: "Years 11 up",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {
  yaxis: {
    title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
      tickfont: {
            size: 15,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
        xaxis: {
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 55,
        r: 40,
        l: 55
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
}//end LifeYearPlot





if (plotThisBox == "SpillYear"){
 //subset out data by cause for Causal Mechanism Boxplot
      var yr2005 = objectsData.filter(function (el){
        return el.year == 2005 & el.volume_gal>0;
      });//end filter

      var yr2006 = objectsData.filter(function (el){
        return el.year == 2006 & el.volume_gal>0;
      });//end filter
        
      var yr2007 = objectsData.filter(function (el){
        return el.year == 2007 & el.volume_gal>0;
      });//end filter
      
      var yr2008 = objectsData.filter(function (el){
        return el.year == 2008 & el.volume_gal>0;
       });//end filter

      var yr2009 = objectsData.filter(function (el){
        return el.year == 2009 & el.volume_gal>0;
      });//end filter

      var yr2010 = objectsData.filter(function (el){
        return el.year == 2010 & el.volume_gal>0;
      });//end filter

      var yr2011 = objectsData.filter(function (el){
        return el.year == 2011 & el.volume_gal>0;
      });//end filter

      var yr2012 = objectsData.filter(function (el){
        return el.year == 2012 & el.volume_gal>0;
      });//end filter

      var yr2013 = objectsData.filter(function (el){
        return el.year == 2013 & el.volume_gal>0;
      });//end filter

      var yr2014 = objectsData.filter(function (el){
        return el.year == 2014 & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var yr2005Vol = yr2005.map(function(a) {return a.volume_gal;});
var yr2006Vol = yr2006.map(function(a) {return a.volume_gal;});
var yr2007Vol = yr2007.map(function(a) {return a.volume_gal;});
var yr2008Vol = yr2008.map(function(a) {return a.volume_gal;});
var yr2009Vol = yr2009.map(function(a) {return a.volume_gal;});
var yr2010Vol = yr2010.map(function(a) {return a.volume_gal;});
var yr2011Vol = yr2011.map(function(a) {return a.volume_gal;});
var yr2012Vol = yr2012.map(function(a) {return a.volume_gal;});
var yr2013Vol = yr2013.map(function(a) {return a.volume_gal;});
var yr2014Vol = yr2014.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: yr2005Vol,    x: "2005",
    marker: {color: '#DF0101'},
    type: 'box',
    name: "2005",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: yr2006Vol,    x: "2006",
    marker: {color: '#DF7401'},
    type: 'box',
    name: "2006",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: yr2007Vol,    x: "2007",
    marker: {color: '#86B404'},
    type: 'box',
    name: "2007",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace4 = {
    y: yr2008Vol,    x: "2008",
    marker: {color: '#3ADF00'},
    type: 'box',
    name: "2008",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace5 = {
    y: yr2009Vol,    x: "2009",
    marker: {color: '#01DFD7'},
    type: 'box',
    name: "2009",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace6 = {
    y: yr2010Vol,    x: "2010",
    marker: {color: '#0174DF'},
    type: 'box',
    name: "2010",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace7 = {
    y: yr2011Vol,    x: "2011",
    marker: {color: '#0101DF'},
    type: 'box',
    name: "2011",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace8 = {
    y: yr2012Vol,    x: "2012",
    marker: {color: '#A901DB'},
    type: 'box',
    name: "2012",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace9 = {
    y: yr2013Vol,    x: "Yr 2013",
    marker: {color: '#DF01A5'},
    type: 'box',
    name: "2013",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace10 = {
    y: yr2014Vol,    x: "Yr 2014",
    marker: {color: '#DF013A'},
    type: 'box',
    name: "2014",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {
    yaxis: {
      title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
      tickfont: {
            size: 15,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
        xaxis: {
          autotick: false,
          dtick: 1,
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 55,
        r: 30,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
} //end if SPILLYEAR




if (plotThisBox == "SpudYear"){
 //subset out data by cause for Causal Mechanism Boxplot
      var yr2005 = objectsData.filter(function (el){
        return el.spudyr == 2005 & el.volume_gal>0;
      });//end filter

      var yr2006 = objectsData.filter(function (el){
        return el.spudyr == 2006 & el.volume_gal>0;
      });//end filter
        
      var yr2007 = objectsData.filter(function (el){
        return el.spudyr == 2007 & el.volume_gal>0;
      });//end filter
      
      var yr2008 = objectsData.filter(function (el){
        return el.spudyr == 2008 & el.volume_gal>0;
       });//end filter

      var yr2009 = objectsData.filter(function (el){
        return el.spudyr == 2009 & el.volume_gal>0;
      });//end filter

      var yr2010 = objectsData.filter(function (el){
        return el.spudyr == 2010 & el.volume_gal>0;
      });//end filter

      var yr2011 = objectsData.filter(function (el){
        return el.spudyr == 2011 & el.volume_gal>0;
      });//end filter

      var yr2012 = objectsData.filter(function (el){
        return el.spudyr == 2012 & el.volume_gal>0;
      });//end filter

      var yr2013 = objectsData.filter(function (el){
        return el.spudyr == 2013 & el.volume_gal>0;
      });//end filter

      var yr2014 = objectsData.filter(function (el){
        return el.spudyr == 2014 & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var yr2005Vol = yr2005.map(function(a) {return a.volume_gal;});
var yr2006Vol = yr2006.map(function(a) {return a.volume_gal;});
var yr2007Vol = yr2007.map(function(a) {return a.volume_gal;});
var yr2008Vol = yr2008.map(function(a) {return a.volume_gal;});
var yr2009Vol = yr2009.map(function(a) {return a.volume_gal;});
var yr2010Vol = yr2010.map(function(a) {return a.volume_gal;});
var yr2011Vol = yr2011.map(function(a) {return a.volume_gal;});
var yr2012Vol = yr2012.map(function(a) {return a.volume_gal;});
var yr2013Vol = yr2013.map(function(a) {return a.volume_gal;});
var yr2014Vol = yr2014.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: yr2005Vol,    x: "2005",
    marker: {color: '#DF0101'},
    type: 'box',
    name: "2005",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: yr2006Vol,    x: "2006",
    marker: {color: '#DF7401'},
    type: 'box',
    name: "2006",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: yr2007Vol,    x: "2007",
    marker: {color: '#86B404'},
    type: 'box',
    name: "2007",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace4 = {
    y: yr2008Vol,    x: "2008",
    marker: {color: '#3ADF00'},
    type: 'box',
    name: "2008",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace5 = {
    y: yr2009Vol,    x: "2009",
    marker: {color: '#01DFD7'},
    type: 'box',
    name: "2009",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace6 = {
    y: yr2010Vol,    x: "2010",
    marker: {color: '#0174DF'},
    type: 'box',
    name: "2010",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace7 = {
    y: yr2011Vol,    x: "2011",
    marker: {color: '#0101DF'},
    type: 'box',
    name: "2011",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var trace8 = {
    y: yr2012Vol,    x: "2012",
    marker: {color: '#A901DB'},
    type: 'box',
    name: "2012",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace9 = {
    y: yr2013Vol,    x: "Yr 2013",
    marker: {color: '#DF01A5'},
    type: 'box',
    name: "2013",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace10 = {
    y: yr2014Vol,    x: "Yr 2014",
    marker: {color: '#DF013A'},
    type: 'box',
    name: "2014",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};


var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

var layout = {
    yaxis: {
      title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        range: [0,10000],
      tickfont: {
            size: 15,
            color: "black",
          },
        titlefont: {
            size: 18,
            color: "black",
          },
    },
        xaxis: {
          autotick: false,
          dtick: 1,
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 55,
        r: 30,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
//});//end csv string
  }//end SPUDYEAR
}//end create box plot
