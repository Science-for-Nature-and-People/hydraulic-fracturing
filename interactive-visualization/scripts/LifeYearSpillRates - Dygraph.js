//.Load Data and get correct########################################################
function createLifeYearRate() {
g2 = new Dygraph(
    document.getElementById("lifeyearrate"),
    "../NCEAS/data/lifeyearrates.csv",
   
    //options
    {
        ylabel: 'Spill Rate (%)',
        yAxisLabelWidth: 20,
        xLabelHeight: 14,
        yLabelWidth: 14,
        axisLabelFontSize: 10,
        xAxisHeight: 15,
        drawGrid: false,
        rightGap: 10,

        colors: ['black','orange','red','blue'],

    highlightSeriesOpts: {
        highlightCircleSize: 5,
        strokeWidth: 3,
        highlightSeriesBackgroundAlpha: 0.2,
    },

      // labels: ['Age','CO','NM',"ND","PA"],
      //  labelsDiv: document.getElementById("chart_legend"),
        labelsShowZeroValues: true,
        labelsSeparateLines: true,
        labelsDivWidth: 70
   }); //end new Dygraph

} //END CREATE CHART FUNCTION ##########################################################
createLifeYearRate();
