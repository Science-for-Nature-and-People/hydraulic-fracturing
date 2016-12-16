// Create overlay layers ###################################################################
//Load Coal Power Plants
function addOverlays(map){
var wellStyle = {
		radius: 3,
		fillOpacity: 0.2,
		fillColor: "lightgray",
		color: "black",
		weight: 2
	};

var co_wells = new L.LayerGroup();
$.getJSON("../NCEAS/data/Allwells.json", function(data) {
	var plants = L.geoJson(data, {
		pointToLayer: function(feature, latlng) {
			return L.circleMarker(latlng, wellStyle);
		} // end pointtoLayer
	}).addTo(co_wells);//end L.geoJson
}); //end get Json coal plants	


//Add shale play
var shaleStyle = {
		weight: 1,
		color: 'black',
		//fillOpacity: 0.5,
		fillColor: 'black'
		};


var shaleJson = new L.FeatureGroup();
$.getJSON("../NCEAS/data/shaleplay.json", function(data) {
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
$.getJSON("../NCEAS/data/tightplay.json", function(data) {
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
		"Unconventional Wells": co_wells,
		"Shale Plays" : shaleJson,
		"Tight Plays" : tightJson
	},{collapsed: true, position: 'topright'}).addTo(map);

}