//© This script is copyright, April 2016 by Lauren Patterson, Nicholas Institute, Duke University

function mapDataChemicalOnly(mapState, mapChemical){
geojsonLayer.clearLayers();

//load in spills data
if (mapChemical=="water"){
    function getColor(d) {
            return d > 10 ? '#C0392B' :
                   d > 7  ? '#E67E22' :
                   d > 4  ? '#F1C40F' :
                   d > 2   ? '#48C9B0' :
                   d > 1   ? '#3498DB' :
                   d > 0.1 ? '#1A5276' :
                   '#ffffff' ;
        } //getColor
    function style(feature) {
            return {
                weight: 1,
                radius: 3,
                color: 'black',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.Mgal)
            };
        }//end style

    // filter data based on what is selected
    var counter=0;

    var cospills = $.getJSON("../webapp/data/fracfocus/" + mapState + mapChemical + ".json");
    cospills.then(function(data) {
        var coSpills = L.geoJson(data, {
           style: style,
            pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
            },//end pointtoLayer
         onEachFeature: function(feature,layer){
                    layer.bindPopup ("Year: " +feature.properties.endyear +
                        "<br>"+"Volume: "+ feature.properties.Mgal + " Mgal")
                    counter++;
                    }//end onEachFeature
        });//end var geoJson
        geojsonLayer.addLayer(coSpills);
        map.addLayer(geojsonLayer);
        mapComment(counter);
    }); //end then function
} // end if



if (mapChemical!="water"){
function getColor(d) {
            return d > 5000 ? '#C0392B' :
                   d > 1000  ? '#E67E22' :
                   d > 500  ? '#F1C40F' :
                   d > 100   ? '#48C9B0' :
                   d > 50   ? '#3498DB' :
                   d > 10 ? '#1A5276' :
                   '#ffffff' ;
        } //getColor

function style(feature) {
            return {
                weight: 1,
                radius: 5,
                color: 'black',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.casvol)
            };
        }//end style

        // filter data based on what is selected
        var counter=0;

        var cospills = $.getJSON("../webapp/data/fracfocus/" + mapState + mapChemical + ".json");
        cospills.then(function(data) {
            var coSpills = L.geoJson(data, {
               style: style,
                pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng);
                },//end pointtoLayer
             onEachFeature: function(feature,layer){
                        layer.bindPopup ("Year: " +feature.properties.endyear +
                            "<br>"+"Volume: "+ feature.properties.casvol + " gal")
                        counter++;
                        }//end onEachFeature
            });//end var geoJson
            geojsonLayer.addLayer(coSpills);
            map.addLayer(geojsonLayer);
            mapComment(counter);
        }); //end then function
} // end if

}//end function mapDataCauseOnly//
//###################################################################################################


function mapDataYear(mapState, mapYear, mapChemical){
geojsonLayer.clearLayers();

//load in spills data
if (mapChemical=="water"){
function getColor(d) {
            return d > 10 ? '#C0392B' :
                   d > 7  ? '#E67E22' :
                   d > 4  ? '#F1C40F' :
                   d > 2   ? '#48C9B0' :
                   d > 1   ? '#3498DB' :
                   d > 0.1 ? '#1A5276' :
                   '#ffffff' ;
        } //getColor

        function style(feature) {
            return {
                weight: 1,
                radius: 3,
                color: 'black',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.Mgal)
            };
        }//end style

// filter data based on what is selected
var counter=0;

var cospills = $.getJSON("../webapp/data/fracfocus/" + mapState + mapChemical + ".json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.endyear==mapYear;
        }, //end L.geoJson
       style: style,
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("Year: " +feature.properties.endyear +
                    "<br>"+"Volume: "+ feature.properties.Mgal + " Mgal")
                counter++;
                }//end onEachFeature
    });//end var geoJson

    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
} // end if

if (mapChemical!="water"){
function getColor(d) {
            return d > 5000 ? '#C0392B' :
                   d > 1000  ? '#E67E22' :
                   d > 500  ? '#F1C40F' :
                   d > 100   ? '#48C9B0' :
                   d > 50   ? '#3498DB' :
                   d > 10 ? '#1A5276' :
                   '#ffffff' ;
        } //getColor

function style(feature) {
            return {
                weight: 1,
                radius: 5,
                color: 'black',
                fillOpacity: 0.5,
                fillColor: getColor(feature.properties.casvol)
            };
        }//end style

// filter data based on what is selected
var counter=0;

var cospills = $.getJSON("../webapp/data/fracfocus/" + mapState + mapChemical + ".json");
cospills.then(function(data) {
    var coSpills = L.geoJson(data, {
        filter: function(feature, layer) {
            return feature.properties.endyear==mapYear;
        }, //end L.geoJson
       style: style,
        pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
        },//end pointtoLayer
     onEachFeature: function(feature,layer){
                layer.bindPopup ("Year: " +feature.properties.endyear +
                    "<br>"+"Volume: "+ feature.properties.casvol + " gal")
                counter++;
                }//end onEachFeature
    });//end var geoJson

    geojsonLayer.addLayer(coSpills);
    map.addLayer(geojsonLayer);
    mapComment(counter);
 }); // end GeoJson
} // end if

}//end function mapDataCauseOnly
//###################################################################################################



function mapComment(counter) {
    var percent = Math.round(counter/46925*100);
    var comment = "Your selection resulted in " + counter + " wells (" + percent + "% of data)."
    document.getElementById('commentSelect').innerHTML = "<code>" + comment + "</code>";
}// end function map comment






