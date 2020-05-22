// Create overlay layers ###################################################################
//Load Coal Power Plants
function addOverlays(map){

//Add shale play
var shaleStyle = {
		weight: 1,
		color: 'black',
		//fillOpacity: 0.5,
		fillColor: 'black'
		};


var shaleJson = new L.FeatureGroup();
$.getJSON("../webapp/data/shaleplay.json", function(data) {
    var geojson = L.geoJson(data, {
     style: shaleStyle,
     onEachFeature: function(feature,layer){
				layer.bindPopup (feature.properties.Merge)
				}
    }).addTo(shaleJson);
});

//console.log(shaleJson)


//Add shale play
var tightStyle = {
        weight: 1,
        color: 'black',
        fillColor: 'darkorange'
        };

var tightJson = new L.FeatureGroup();
$.getJSON("../webapp/data/tightplay.json", function(data) {
    var geojson = L.geoJson(data, {
     style: tightStyle,
     onEachFeature: function(feature,layer){
				layer.bindPopup (feature.properties.Tight_Play)
				}
    }).addTo(tightJson);//end var geoJson
});


// Add all overlay layers
L.control.layers({
	}, 
	{
		"Shale Plays" : shaleJson,
		"Tight Plays" : tightJson
	},{collapsed: true, position: 'topright'}).addTo(map);

}
