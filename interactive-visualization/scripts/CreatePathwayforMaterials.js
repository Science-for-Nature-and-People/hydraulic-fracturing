function createPathwayforMaterials(mapState, mapMaterial, mapVolume, mapContain, mapWater) {
d3.csv("../NCEAS/data/" + mapState + "_spills_final_dataviz.csv", function (spillsData) {

// If Materials is All
if (mapMaterial =="All") {
    if (mapVolume=="All"){
       if (mapContain=="All" & mapWater!="All"){
            var filterData = spillsData.filter(function(d, i){
                if (d["waterimpact"] == mapWater) { return d; }
                        }) // end filter Data
                }// end mapWater Only
                           
        if (mapContain != "All" & mapWater=="All"){
                var filterData = spillsData.filter(function(d, i){
                if (d["contained"] == mapContain) { return d; }
                    }) // end filter Data
         } //end mapContainOnly

        if (mapContain != "All" & mapWater != "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["contained"] == mapContain & d["waterimpact"] == mapWater) { return d; }
            }) // end filter Data
        } //end mapPathwayCause

        if (mapContain == "All" & mapWater == "All"){
            var filterData = spillsData;
        }
    } //end map volume all

    if (mapVolume !="All") {
        if (mapContain=="All" & mapWater =="All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume) { return d; }
            }) // end filter Data
        }// end mapVolume Only

        if (mapContain=="All" & mapWater != "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["waterimpact"] == mapWater) { return d; }
            }) // end filter Data
        }// end mapVolumeCause Only

        if (mapContain !="All" & mapWater=="All"){
             var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["contained"] == mapContain) { return d; }
            }) // end filter Data
        }// end mapPathwayVolume Only


        if (mapContain !="All" & mapWater != "All"){
                var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["contained"] == mapContain & d["waterimpact"]== mapWater) { return d; }
            }) // end filter Data
        }// end mapPathwayVolumeCause
    }//end mapVolume != All
} //end mapMaterial = All      
    
    
//--------------------------------------------------------------
if (mapMaterial !="All") {
    if (mapVolume == "All"){
        if (mapContain== "All" & mapWater== "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["material"] == mapMaterial) { return d; }
            }) // end filter Data;
        }//end mapMaterialOnly

        if (mapContain== "All" & mapWater != "All"){
           var filterData = spillsData.filter(function(d, i){
            if (d["material"] == mapMaterial & d["waterimpact"] == mapWater) { return d; }
            }) // end filter Data;
        }//end mapMaterialWater

        if (mapContain != "All" & mapWater == "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["material"] == mapMaterial & d["contained"] == mapContain) { return d; }
            }) // end filter Data;
        }//end mapMaterialContain

        if (mapContain != "All" & mapWater != "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["material"] == mapMaterial & d["contained"] == mapContain & d["waterimpact"] == mapWater) { return d; }
            }) // end filter Data;
        }//end mapMaterialContainWater
    } //end volume is all
//--------------------------------------------------------------
    if (mapVolume != "All"){
        if (mapContain == "All" & mapWater == "All"){
         var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["material"] == mapMaterial) { return d; }
            }) // end filter Data
        }// end map SpillYearVolume

        if (mapContain == "All" & mapWater != "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["material"] == mapMaterial & d["waterimpact"] == mapWater) { return d; }
            }) // end filter Data
        }// end map SpillYearVolumeCause

        if (mapContain != "All" & mapWater == "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["material"] == mapMaterial & d["contained"] == mapContain) { return d; }
            }) // end filter Data
        }// end map SpillYearVolumeCause

        if (mapContain != "All" & mapWater != "All"){
            var filterData = spillsData.filter(function(d, i){
            if (d["volume_gal"] >= +mapVolume & d["material"] == mapMaterial & 
                d["contained"] == mapContain & d["waterimpact"] == mapWater) { return d; }
            }) // end filter DatamapState);
        }// end map SpillYearVolumeCause
    }// end Volume != All
} // end mapMaterial is all



// loop through and count the number of occurrences of a pathway
var objectsPathway = {};
      $.each(filterData, function(i,e){
        objectsPathway[this.pathway] = (objectsPathway[this.pathway] || 0) + 1;
      });
//console.log(objectsPathway);

 var arrPath = $.map(objectsPathway, function(v,i) { return i; });
 var arrayData = Object.keys(objectsPathway).map(function (key) { return objectsPathway[key]; });
 
 var myTotal = 0;
 for (var i = 0, len = arrayData.length; i < len; i++){
    myTotal += arrayData[i];
 }
 // console.log(arrPath)
//console.log(arrayData)
console.log(myTotal);
  
var plotData = [{
    values: arrayData,
    labels: arrPath,
    hoverinfo: 'label+percent',
    textinfo: 'none',
    hole: 0.4,
    type: 'pie'
}];

var layout = {
    //height: 300,
    //width: 300,
    backgroundcolor: "rgba(0,0,0,0)",
    paper_bgcolor: "rgba(0,0,0,0)",
    showlegend: false,
    textinfo: 'none',
    margin: {
        t: 25,
        b: 25,
        r: 25,
        l: 25
    },
    showbackground: false
};

createSpillRate(filterData, mapState);
createLifeYearRate(filterData, mapState);
createMaterialWordCloud(filterData);
createCauseSpill(filterData);
createBoxplotMaterials(filterData, mapState);
Plotly.newPlot('pathwayPie', plotData, layout);

//return filterData
});// end d3
}//end createPathway
createPathwayforMaterials(mapState, mapMaterial, mapVolume, mapContain, mapWater);

