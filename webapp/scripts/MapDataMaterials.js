//© This script is copyright, April 2016 by Lauren Patterson, Nicholas Institute, Duke University

function mapDataState(mapState){
geojsonLayer.clearLayers();
//console.log(mapState);
//load in spills data
var spillStyle = {
        radius: 4,
        fillOpacity: 0.8,
        fillColor: "blue",
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
                    "<br>"+"Material: "+ feature.properties.material +
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Contained: "+ feature.properties.contained +
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++;
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataCauseOnly
//###################################################################################################}


function mapDataWaterOnly(mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
      onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Material: "+ feature.properties.material +
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Contained: "+ feature.properties.contained +
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataWaterOnly
//###################################################################################################


function mapDataContainOnly(mapContain, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.contained==mapContain;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
          onEachFeature: function(feature,layer){
                layer.bindPopup ("API: " +feature.properties.api_number +
                    "<br>"+"Wellbore: "+feature.properties.direction +
                    "<br>"+"Material: "+ feature.properties.material +
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Contained: "+ feature.properties.contained +
                    "<br>"+"Water Impact: "+ feature.properties.waterimpact)
                counter++
                }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataContainOnly
//###################################################################################################


function mapDataWaterContain(mapContain, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.waterimpact==mapWater & feature.properties.contained==mapContain;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
       onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataWaterContain
//###########################################################




function mapDataVolumeOnly(mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
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
            "<br>"+"Material: "+ feature.properties.material +
            "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
            "<br>"+"Pathway: "+ feature.properties.pathway +
            "<br>"+"Contained: "+ feature.properties.contained +
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



function mapDataVolumeWater(mapVolume, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "blue",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.volume_gal>=mapVolume & feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataVolumeWaterOnly
//###################################################################################################


function mapDataVolumeContain(mapVolume, mapContain, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "blue",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return  feature.properties.contained==mapContain & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
      onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataVolumeContain
//###################################################################################################



function mapDataVolumeContainWater(mapVolume, mapContain, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {        radius: 5,
                        fillOpacity: 0.8,
                        fillColor: "blue",
                        color: "black",
                        weight: 1    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return  feature.properties.contained==mapContain & feature.properties.volume_gal>=mapVolume & 
            feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
      onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataVolumeContainWater
//###################################################################################################





function mapDataMaterialOnly(mapMaterial, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
      onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataMaterialOnly
//###################################################################################################


function mapDataMaterialWater(mapMaterial, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataMaterialWater
//###################################################################################################


function mapDataMaterialContain(mapMaterial, mapContain, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter=0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.contained==mapContain;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDataMaterialContain
//###################################################################################################



function mapDataMaterialContainWater(mapMaterial, mapContain, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.contained==mapContain & 
            feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
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


function mapDataMaterialVolume(mapMaterial, mapVolume, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.volume_gal>=mapVolume;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
                "<br>"+"Water Impact: "+ feature.properties.waterimpact)
            counter++
            }//end onEachFeature

    });//end var geoJson
    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
}//end function mapDatamaterialVolume
//###################################################################################################


function mapDataMaterialVolumeWater(mapMaterial, mapVolume, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.volume_gal>=mapVolume & 
            feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
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


function mapDataMaterialVolumeContain(mapMaterial, mapVolume, mapContain, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.volume_gal>=mapVolume &
             feature.properties.contained==mapContain;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
           onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
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



function mapDataMaterialVolumeContainWater(mapMaterial, mapVolume, mapContain, mapWater, mapState){
geojsonLayer.clearLayers();

//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
        color: "black",
        weight: 1
    };

// filter data based on what is selected
var counter = 0;
var cospills = $.getJSON("../webapp/data/" + mapState+ "spills.json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.material==mapMaterial & feature.properties.volume_gal>=mapVolume & 
            feature.properties.contained==mapContain & feature.properties.waterimpact==mapWater;
        }, //end L.geoJson
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, spillStyle);
        },//end pointtoLayer
        onEachFeature: function(feature,layer){
            layer.bindPopup ("API: " +feature.properties.api_number +
                "<br>"+"Wellbore: "+feature.properties.direction +
                "<br>"+"Material: "+ feature.properties.material +
                "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                "<br>"+"Pathway: "+ feature.properties.pathway +
                "<br>"+"Contained: "+ feature.properties.contained +
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

function mapData(mapSpudYr, SpillYear, mapLifeYear, mapVolume, mapPathway, mapCause, mapState){
geojsonLayer.clearLayers();
//load in spills data
var spillStyle = {
        radius: 5,
        fillOpacity: 0.8,
        fillColor: "blue",
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
                    "<br>"+"Material: "+ feature.properties.material +
                    "<br>"+"Volume: "+ feature.properties.volume_gal + " gal" +
                    "<br>"+"Pathway: "+ feature.properties.pathway +
                    "<br>"+"Contained: "+ feature.properties.contained +
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
}// end function map comment






