function createTrace(target){
    //console.log("clicked");
var selection = document.boxplot.boxplotList;
    for (i=0; i<selection.length; i++)
        if (selection[i].checked==true)
        plotThisBox = selection[i].value; 

 /*   if (plotThisBox == "Material"){
        createBoxplotMaterials(mapState);
    }

    if (plotThisBox == "Contained"){
        createBoxplotContained(mapState);
    }

    if (plotThisBox == "Water"){
        createBoxplotWater(mapState);
    }

    return plotThisBox;
    */
    createPathwayforMaterials(mapState, mapMaterial, mapVolume, mapContain, mapWater);
    return plotThisBox;
} // end create trace



//Load data
function createBoxplotMaterials(filterData, mapState){
   // var spills = $.get("../webapp/data/" + mapState + "_spills_final_dataviz.csv", function(csvString){
   //   var objectsData = $.csv.toObjects(csvString);

    object = filterData;
    var objectsData = Object.keys(object).map(function(key) {return object[key]});
    //console.log(objectsData);

if (plotThisBox == "Material"){
   // console.log("material")
 //subset out data by cause for Causal Mechanism Boxplot
      var chem = objectsData.filter(function (el){
        return el.material == "Chemicals" & el.volume_gal>0;
      });//end filter

      var crude = objectsData.filter(function (el){
        return el.material == "Crude Oil" & el.volume_gal>0 || el.material == "Condensate" & el.volume_gal>0;
      });//end filter
        
      var diesel = objectsData.filter(function (el){
        return el.material == "Diesel" & el.volume_gal>0;
      });//end filter
      
      var eq = objectsData.filter(function (el){
        return el.material == "Equipment Oil" & el.volume_gal>0;
      });//end filter

      var fresh = objectsData.filter(function (el){
        return el.material == "Freshwater" & el.volume_gal>0;
      });//end filter

      var hfs = objectsData.filter(function (el){
        return el.material == "Hydraulic Fracture Solution" & el.volume_gal>0;
      });//end filter

      var oilsalt = objectsData.filter(function (el){
        return el.material == "Oil & Saltwater" & el.volume_gal>0;
      });//end filter

      var salt = objectsData.filter(function (el){
        return el.material == "Saltwater" & el.volume_gal>0;
      });//end filter

      var unk = objectsData.filter(function (el){
        return el.material == "Unknown" & el.volume_gal>0;
      });//end filter
      

//create boxplot arrays of volume
var chemVol = chem.map(function(a) {return a.volume_gal;});
var crudeVol = crude.map(function(a) {return a.volume_gal;});
var dieselVol = diesel.map(function(a) {return a.volume_gal;});
var eqVol = eq.map(function(a) {return a.volume_gal;});
var freshVol = fresh.map(function(a) {return a.volume_gal;});
var hfsVol = hfs.map(function(a) {return a.volume_gal;});
var oilsaltVol = oilsalt.map(function(a) {return a.volume_gal;});
var saltVol = salt.map(function(a) {return a.volume_gal;});
var unkVol = unk.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: chemVol,
    x: "Chemicals",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Chemicals",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace2 = {
    y: crudeVol,
    x: "Crude Oil",
    marker: {color: '#273746'},
    type: 'box',
    name: "Crude Oil",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace3 = {
    y: dieselVol,
    x: "Diesel",
    marker: {color: '#616A6B'},
    type: 'box',
    name: "Diesel",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace4 = {
    y: eqVol,
    x: "Equip. Oil",
    marker: {color: '#848482'},
    type: 'box',
    name: "Equip. Oil",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace5 = {
    y: freshVol,
    x: "Freshwater",
    marker: {color: '#3498DB'},
    type: 'box',
    name: "Freshwater",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace6 = {
    y: hfsVol,
    x: "HF Solution",
    marker: {color: '#BA4A00'},
    type: 'box',
    name: "HF Solution",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace7 = {
    y: oilsaltVol,
    x: "Oil & Saltwater",
    marker: {color: '#D4AC0D'},
    type: 'box',
    name: "Oil & Saltwater",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace8 = {
    y: saltVol,
    x: "Saltwater",
    marker: {color: '#138D75'},
    type: 'box',
    name: "Saltwater",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var trace9 = {
    y: unkVol,
    x: "Unknown",
    marker: {color: '#B3B6B7'},
    type: 'box',
    name: "Unknown",
    boxpoints: 'all',
    jitter: 0.5,
    pointpos: -1.8,
    marker: {size: 2}
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        showline: true,
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
        showline: true,
      tickfont: {
        size: 15,
        color: "black",
      },
    },  
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 80,
        r: 25,
        l: 80
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
}//end plot MATERIALS




if (plotThisBox == "Contained"){
 //subset out data by cause for Causal Mechanism Boxplot
      var cyes = objectsData.filter(function (el){
        return el.contained == "Yes" & el.volume_gal>0;
      });//end filter

      var cno = objectsData.filter(function (el){
        return el.contained == "No" & el.volume_gal>0;
      });//end filter
        
      var cunk = objectsData.filter(function (el){
        return el.contained == "Unknown" & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var cyesVol = cyes.map(function(a) {return a.volume_gal;});
var cnoVol = cno.map(function(a) {return a.volume_gal;});
var cunkVol = cunk.map(function(a) {return a.volume_gal;});

//console.log(humanVol.length);
//create boxplot wiht plotly
var trace1 = {
    y: cyesVol,    x: "Contained",
    marker: {color: '#0041C2'},
    type: 'box',
    name: "Contained",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: cnoVol,    x: "Not Contained",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Not Contained",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: cunkVol,    x: "Unknown",
    marker: {color: '#B3B6B7'},
    type: 'box',
    name: "Unknown",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var data = [trace1, trace2, trace3];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        showline: true,
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
      showline: true,
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 50,
        r: 30,
        l: 80
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
}//END CONTAINED PLOT




if (plotThisBox == "Water"){
 //subset out data by cause for Causal Mechanism Boxplot
      var wyes = objectsData.filter(function (el){
        return el.waterimpact == "Yes" & el.volume_gal>0;
      });//end filter

      var wno = objectsData.filter(function (el){
        return el.waterimpact == "No" & el.volume_gal>0;
      });//end filter
        
      var wunk = objectsData.filter(function (el){
        return el.waterimpact == "Unknown" & el.volume_gal>0;
      });//end filter


//create boxplot arrays of volume
var wyesVol = wyes.map(function(a) {return a.volume_gal;});
var wnoVol = wno.map(function(a) {return a.volume_gal;});
var wunkVol = wunk.map(function(a) {return a.volume_gal;});

//create boxplot wiht plotly
var trace1 = {
    y: wnoVol,    x: "No Water Impact",
    marker: {color: '#0041C2'},
    type: 'box',
    name: "No Water Impact",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace2 = {
    y: wyesVol,    x: "Water Impact",
    marker: {color: '#FF4136'},
    type: 'box',
    name: "Water Impact",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var trace3 = {
    y: wunkVol,    x: "Unknown",
    marker: {color: '#B3B6B7'},
    type: 'box',
    name: "Unknown",
    boxpoints: 'all',    jitter: 0.5,
    pointpos: -1.8,    marker: {size: 2}
};

var data = [trace1, trace2, trace3];

var layout = {
    yaxis: {
        title: 'Volume (gal)',
        zeroline: true,
        showgrid: false,
        showline: true,
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
      showline: true,
      tickfont: {
        size: 15,
        color: "black",
      },
    },
    showlegend: false,
    height: 400,
    margin: {
        t: 25,
        b: 50,
        r: 30,
        l: 50
    },
    fixedrange: false
};

Plotly.newPlot('volumeBoxplot', data, layout);
    }//end WATER IF
}//end create box plot for contained

