function createPathway(mapState, mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapPathway, mapCause) {
d3.csv("../webapp/data/" + mapState + "_spills_final_dataviz.csv", function (spillsData) {

// If Spud Year is All
if (mapSpudYr=="All"){
    if (mapSpillYear =="All") {
        if (mapLifeYear=="All"){            
            if (mapVolume=="All"){
               
                if (mapPathway=="All" & mapCause!="All"){
                         var filterData = spillsData.filter(function(d, i){
                         if (d["cause"] == mapCause) { return d; }
                        }) // end filter Data
                }// end mapCause Only
                           
                if (mapPathway != "All" & mapCause=="All"){
                        var filterData = spillsData.filter(function(d, i){
                        if (d["pathway"] == mapPathway) { return d; }
                            }) // end filter Data
                 } //end mapPathwayOnly

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["pathway"] == mapPathway & d["cause"] == mapCause) { return d; }
                    }) // end filter Data
                } //end mapPathwayCause

                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData;
                }
            } //end map volume all

        if (mapSpudYr=="All" & mapSpillYear=="All" & mapLifeYear=="All" & mapVolume !="All") {
                if (mapPathway=="All" & mapCause =="All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume) { return d; }
                    }) // end filter Data
                }// end mapVolume Only

                if (mapPathway=="All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["cause"] == mapCause) { return d; }
                    }) // end filter Data
                }// end mapVolumeCause Only

                if (mapPathway !="All" & mapCause=="All"){
                     var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
                }// end mapPathwayVolume Only


                if (mapPathway !="All" & mapCause != "All"){
                        var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["cause"] == mapCause & d["pathway"]== mapPathway) { return d; }
                    }) // end filter Data
                }// end mapPathwayVolumeCause
           }//end mapVolume != All
        } //end LifeYear all      
    
    
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All" & mapPathway== "All" & mapCause == "All"){            
                var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear) { return d; }
                    }) // end filter Data
            }

            if (mapVolume == "All" & mapPathway== "All" & mapCause != "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["cause"] == mapCause) { return d; }
                    }) // end filter Data
            }//end mapLifeYearCause

            if (mapVolume == "All" & mapPathway != "All" & mapCause == "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
            }//end mapPathwayLifeYear

            if (mapVolume == "All" & mapPathway != "All" & mapCause != "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["cause"] == mapCause & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
            }//end mapPathwayLifeYearCause

            if (mapVolume != "All" & mapPathway == "All" & mapCause == "All"){
                var filterData = spillsData.filter(function(d, i){
                   if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear) { return d; }
                    }) // end filter Data
            }//end mapLifeYearVolume
            
            if (mapVolume != "All" & mapPathway == "All" & mapCause != "All"){
                var filterData = spillsData.filter(function(d, i){
                  if (d["volume_gal"] >= +mapVolume & d["cause"] == mapCause & d["LifeYear"]== mapLifeYear) { return d; }
                    }) // end filter Data
            }//end mapLifeYearVolumeCause

            if (mapVolume != "All" & mapPathway != "All" & mapCause == "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear & d["pathway"]== mapPathway) { return d; }
                    }) // end filter Data
            }//end mapLifeYearVolumeCause

            if (mapVolume != "All" & mapPathway != "All" & mapCause != "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["cause"] == mapCause & d["pathway"]== mapPathway & d["LifeYear"] == mapLifeYear) { return d; }
                    }) // end filter Data;
            }//end mapLifeYearVolumeCausePathway
        }// end mapLifeYear         
    } // end if mapSpudYr mapSpillYr
//--------------------------------------------------------------

    if (mapSpillYear !="All") {
        if (mapLifeYear == "All"){
            if (mapVolume == "All"){
                if (mapPathway== "All" & mapCause== "All"){
                var filterData = spillsData.filter(function(d, i){
                    if (d["year"] == mapSpillYear) { return d; }
                    }) // end filter Data;
                }//end mapSpillYearOnly

                if (mapPathway== "All" & mapCause != "All"){
                   var filterData = spillsData.filter(function(d, i){
                    if (d["year"] == mapSpillYear & d["cause"] == mapCause) { return d; }
                    }) // end filter Data;
                }//end mapSpillYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["year"] == mapSpillYear & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data;
                }//end mapSpillYearCause

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["year"] == mapSpillYear & d["pathway"] == mapPathway & d["cause"] == mapCause) { return d; }
                    }) // end filter Data;
                }//end mapSpillYearPathwayCause
            } //end volume is all
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                 var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["year"] == mapSpillYear) { return d; }
                    }) // end filter Data
                }// end map SpillYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["year"] == mapSpillYear & d["cause"] == mapCause) { return d; }
                    }) // end filter Data
                }// end map SpillYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["year"] == mapSpillYear & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
                }// end map SpillYearVolumeCause

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["year"] == mapSpillYear & d["pathway"] == mapPathway & d["cause"] == mapCause) { return d; }
                    }) // end filter DatamapState);
                }// end map SpillYearVolumeCause
            }// end Volume != All
        } // end mapLifeYear is all

//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume=="All"){
                if (mapPathway=="All" & mapCause=="All"){
                   var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear) { return d; }
                    }) // end filter Data
                }// end mapDataSpillYearLifeYear

                if (mapPathway=="All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["cause"] == mapCause) { return d; }
                    }) // end filter Data
                }// end mapDataSpillYearLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
                }// end mapDataSpillYearLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["cause"] == mapCause & d["pathway"] == mapPathway) { return d; }
                    }) // end filter Data
                }// end mapDataSpillYearLifeYearPathwayCause
            } // end mapVolume==All
//--------------------------------------------------------------

            if (mapVolume != "All") {
                if (mapPathway == "All" & mapCause=="All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear) { return d; }
                    }) // end filter Data
                } // end mapDataSpillYearLifeYearVolume

                if (mapPathway == "All" & mapCause !="All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["cause"] == mapCause) { return d; }
                })
                } // end mapDataSpillYearLifeYearVolumeCause

                 if (mapPathway != "All" & mapCause =="All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["pathway"] == mapPathway) { return d; }
                })
                } // end mapDataSpillYearLifeYearPathwayVolume

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                    if (d["volume_gal"] >= +mapVolume & d["LifeYear"] == mapLifeYear & d["year"] == mapSpillYear & d["cause"] == mapCause & d["pathway"] == mapPathway) { return d; }
                    })
                } // end mapDataSpillYearLifeYearPathwayVolumeCause
            } // mapVolume != All
        } // mapLifeYear != All
    } // end SpillYear not all
}// end if mapSpudYr
//--------------------------------------------------------------

if (mapSpudYr != "All"){
    if (mapSpillYear == "All"){
        if (mapLifeYear=="All"){
            if (mapVolume=="All"){

                if (mapPathway == "All" & mapCause == "All"){
                   var filterData = spillsData.filter(function(d, i){
                    if (d["spudyr"] == mapSpudYr) { return d; }
                    }) //end filter data
                }// end mapdDataSpudYr Only

                if (mapPathway == "All" & mapCause != "All"){
                        console.log("picked")
                       var filterData = spillsData.filter(function(d, i){
                        if (d["spudyr"] == mapSpudYr & d["cause"] == mapCause) { return d; }
                        }) //end filter data
                }// end mapdDataSpudYrCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["spudyr"] == mapSpudYr & d["pathway"] == mapPathway) { return d; }
                        }) //end filter data
                }// end mapdDataSpudYrPathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["spudyr"] == mapSpudYr & d["cause"] == mapCause & d["pathway"] == mapPathway) { return d; }
                        }) //end filter data
                }// end mapdDataSpudYrPathwayCause
            }// end if volume is all
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrVolume

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrVolumePathway

                 if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrVolumePathwayCause
            }// end if mapVolume != All
        }//end if mapLifeYear is all
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All"){

                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["LifeYear"] == mapLifeYear & d["spudyr"] == mapSpudYr)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYear

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["LifeYear"] == mapLifeYear & d["spudyr"] == mapSpudYr & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["LifeYear"] == mapLifeYear & d["spudyr"] == mapSpudYr & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["LifeYear"] == mapLifeYear & d["spudyr"] == mapSpudYr & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearPathwayCause
            }//end if mapVolume != "All"
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrLifeYearVolumePathwayCause
            } // end mapVolume !=All
        }// end if mapLifeYear !=All
    }//end if mapSpillYear is all
//--------------------------------------------------------------
    if (mapSpillYear != "All") {
        if (mapLifeYear == "All"){
            if (mapVolume == "All"){
                 if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYear

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearPathwayCause
            }//end if mapVolume == All
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                      var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["year"] == mapSpillYear)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["year"] == mapSpillYear & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["year"] == mapSpillYear & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["volume_gal"] >= +mapVolume & d["spudyr"] == mapSpudYr & d["year"] == mapSpillYear & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearVolumePathwayCause
            }// end mapVolume != All
        }// end if mapLifeYear == All
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYear

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearPathwayCause
            }// end if mapVolume == All
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["volume_gal"] >= +mapVolume)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["volume_gal"] >= +mapVolume & d["cause"] == mapCause)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["volume_gal"] >= +mapVolume & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapDataSpudYrSpillYearLifeYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    var filterData = spillsData.filter(function(d, i){
                        if (d["year"] == mapSpillYear & d["spudyr"] == mapSpudYr & d["LifeYear"] == mapLifeYear & d["volume_gal"] >= +mapVolume & d["cause"] == mapCause & d["pathway"] == mapPathway)  { return d; }
                            }) //end filter data
                } // end mapData
            }
        }// end if mapLifeYear != All
    } // end if mapSpillYear != All
}//end if mapSpudYr is not All


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
createWordCloud(filterData);
createCauseSpill(filterData);
createBoxplot(filterData, mapState);
Plotly.newPlot('pathwayPie', plotData, layout);

//return filterData
});// end d3
}//end createPathway
createPathway(mapState, mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapPathway, mapCause);

