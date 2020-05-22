//© This script is copyright, April 2016 by Lauren Patterson, Nicholas Institute, Duke University

function mapDataState(mapState){
geojsonLayer.clearLayers();
console.log(mapState);
//load in spills data
var spillStyle = {
        radius: 4,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;

var cospills = $.getJSON("../webapp/data/" + mapState + "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################}


function mapDataCauseOnly(mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataPathwayOnly(mapPathway, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataPathwayCause(mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###########################################################




function mapDataVolumeOnly(mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataVolumeCause(mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "red",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataPathwayVolume(mapPathway, mapVolume, mapState){
    console.log(mapPathway); console.log(mapVolume)
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "red",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return  feature.properties.pathway==mapPathway & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataPathwayVolumeCause(mapPathway, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "red",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return  feature.properties.pathway==mapPathway & feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataLifeYearOnly(mapLifeYear, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState + "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataLifeYearCause(mapLifeYear, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly



function mapDataPathwayLifeYear(mapPathway, mapLifeYear, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################




function mapDataPathwayLifeYearCause(mapPathway, mapLifeYear, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataLifeYearVolume(mapLifeYear, mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear &  feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataLifeYearVolumeCause(mapLifeYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear &  feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataPathwayLifeYearVolume(mapPathway, mapLifeYear, mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear &  feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataPathwayLifeYearVolumeCause(mapPathway, mapLifeYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.LifeYear==mapLifeYear &  feature.properties.volume_gal>=mapVolume & 
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearOnly(mapSpillYear, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearCause(mapSpillYear, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearPathway(mapSpillYear, mapPathway, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearPathwayCause(mapSpillYear, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearVolume(mapSpillYear, mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter ++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearVolumeCause(mapSpillYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearVolumePathway(mapSpillYear, mapVolume, mapPathway, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearVolumePathwayCause(mapSpillYear, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.volume_gal>=mapVolume & 
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearLifeYear(mapSpillYear, mapLifeYear, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearLifeYearCause(mapSpillYear, mapLifeYear, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearLifeYearPathway(mapSpillYear, mapLifeYear, mapPathway, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState + "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpillYearLifeYearPathwayCause(mapSpillYear, mapLifeYear, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & 
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearLifeYearVolume(mapSpillYear, mapLifeYear, mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & 
            feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearLifeYearVolumeCause(mapSpillYear, mapLifeYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & 
            feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearLifeYearPathwayVolume(mapSpillYear, mapLifeYear, mapPathway, mapVolume, mapState){
geojsonLayer.clearLayers();
console.log("found me")
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway
            feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpillYearLifeYearPathwayVolumeCause(mapSpillYear, mapLifeYear, mapPathway, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();
console.log(mapCause)
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.year==mapSpillYear & feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway &
            feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpudYrOnly(mapSpudYr, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################



function mapDataSpudYrCause(mapSpudYr, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################


function mapDataSpudYrPathway(mapSpudYr, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrPathwayCause(mapSpudYr, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.pathway==mapPathway & 
            feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrVolume(mapSpudYr, mapVolume, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrVolumeCause(mapSpudYr, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrVolumePathway(mapSpudYr, mapVolume, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.volume_gal>=mapVolume & 
            feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrVolumePathwayCause(mapSpudYr, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.volume_gal>=mapVolume & 
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrLifeYear(mapSpudYr, mapLifeYear, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrLifeYearCause(mapSpudYr, mapLifeYear, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrLifeYearPathway(mapSpudYr, mapLifeYear, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrLifeYearPathwayCause(mapSpudYr, mapLifeYear, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrLifeYearVolume(mapSpudYr, mapLifeYear, mapVolume, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter)
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrLifeYearVolumeCause(mapSpudYr, mapLifeYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrLifeYearVolumePathway(mapSpudYr, mapLifeYear, mapVolume, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrLifeYearVolumePathwayCause(mapSpudYr, mapLifeYear, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState + "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.LifeYear==mapLifeYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway &
            feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYear(mapSpudYr, SpillYear, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearCause(mapSpudYr, SpillYear, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearPathway(mapSpudYr, SpillYear, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearPathwayCause(mapSpudYr, SpillYear, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number + 
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearVolume(mapSpudYr, SpillYear, mapVolume, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearVolumeCause(mapSpudYr, SpillYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearVolumePathway(mapSpudYr, SpillYear, mapVolume, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrSpillYearVolumePathway
//###################################################################################################


function mapDataSpudYrSpillYearVolumePathwayCause(mapSpudYr, SpillYear, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
            feature.properties.volume_gal>=mapVolume & feature.properties.pathway==mapPathway & 
            feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrSpillYearLifeYear(mapSpudYr, SpillYear, mapLifeYear, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapDataSpudYrSpillYearLifeYearCause(mapSpudYr, SpillYear, mapLifeYear, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrSpillYearLifeYearPathway(mapSpudYr, SpillYear, mapLifeYear, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrSpillYearLifeYearPathwayCause(mapSpudYr, SpillYear, mapLifeYear, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.pathway==mapPathway & 
               feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################

function mapDataSpudYrSpillYearLifeYearVolume(mapSpudYr, SpillYear, mapLifeYear, mapVolume, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################

function mapDataSpudYrSpillYearLifeYearVolumeCause(mapSpudYr, SpillYear, mapLifeYear, mapVolume, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.volume_gal>=mapVolume & 
               feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapDataSpudYrSpillYearLifeYearVolumePathway(mapSpudYr, SpillYear, mapLifeYear, mapVolume, mapPathway, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.volume_gal>=mapVolume & 
               feature.properties.pathway==mapPathway;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################


function mapData(mapSpudYr, SpillYear, mapLifeYear, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "red",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.spudyr==mapSpudYr & feature.properties.year==mapSpillYear &
               feature.properties.LifeYear==mapLifeYear & feature.properties.volume_gal>=mapVolume & 
               feature.properties.pathway==mapPathway & feature.properties.cause==mapCause;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Spill Year: "+ feature.properties.year +
                    "<br>"+"Spud Year: "+ feature.properties.spudyr + 
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Cause: "+ feature.properties.cause + 
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataSpudYrPathway
//###################################################################################################



function mapComment(counter) {
    var percent = Math.round(counter/6648*100);
    var comment = "Your selection resulted in " + counter + " spills ("+percent+"% of data)."
    document.getElementById('commentSelect').innerHTML = "<code>" + comment + "</code>";
    //return counter;
}// end function map comment






