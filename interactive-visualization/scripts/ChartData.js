//© This script is copyright, April 2015 by Lauren Patterson, Nicholas Institute, Duke University
function drawChart(subbasinSelect){
	var canvas = document.getElementById('chart');
		canvas.innerHTML="";

	console.log(subbasinSelect);
	

//read in csv and subset
//d3.csv("/~lap19/www/LCA/data/",+subbasinSelect+".csv", function(data) {
	//var filter = data.filter(function(row) { return row["SubBasin"] == subbasinSelect;	}); // end filter

//});
//http://blog.dygraphs.com/2012/04/how-to-download-and-parse-data-for.html

g2 = new Dygraph(
	document.getElementById("chart"), "/~lap19/www/LCA/data/"+subbasinSelect+".csv", 
	//options
	{
		ylabel: 'Water Consumed (Mgal)',
		yAxisLabelWidth: 60,
					
		colors: ['red','#566573','orange','blue','black'],

	highlightSeriesOpts: {
		highlightCircleSize: 5,
		strokeWidth: 3,
        highlightSeriesBackgroundAlpha: 0.2,
        
    },

    	labels: ['Date','Hydraulic Fracturing','Coal Mining',"Coal Power","Natural Gas Power","Total"],
    	labelsDiv: document.getElementById("chart_legend"),
		labelsShowZeroValues: true,
		labelsSeparateLines: true,
	

		showRangeSelector: true,
            rangeSelectorHeight: 30,
            rangeSelectorPlotStrokeColor: 'navy',
            rangeSelectorPlotFillColor: 'lightblue'
		
	});//end Dygraph

} //end function drawChart

//Map: http://leafletjs.com/examples/choropleth-example.html
