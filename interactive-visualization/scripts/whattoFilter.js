//                   FUNCTION TO CALL CORRECT MAP FUNCTION TO FILTER DATA                      //
function whattoFilter(mapPathway, mapSpillYear, mapSpudYr, mapLifeYear, mapVolume, mapCause){
//console.log(mapPathway); console.log(mapCause); console.log(mapVolume);
//console.log(mapSpudYr); console.log(mapSpillYear); console.log(mapLifeYear);

// If Spud Year is All
if (mapSpudYr=="All"){
    if (mapSpillYear =="All") {
        if (mapLifeYear=="All"){            
            if (mapVolume=="All"){
               
                if (mapPathway=="All" & mapCause!="All"){
                        mapDataCauseOnly(mapCause, mapState);
                }// end mapCause Only
                           
                if (mapPathway != "All" & mapCause=="All"){
                            mapDataPathwayOnly(mapPathway, mapState);
                 } //end mapPathwayOnly

                if (mapPathway != "All" & mapCause != "All"){
                         mapDataPathwayCause(mapPathway, mapCause, mapState);
                } //end mapPathwayCause

                if (mapPathway == "All" & mapCause=="All"){
                    mapDataState(mapState);
                }
            } //end map volume all
//--------------------------------------------------------------

            if (mapSpudYr=="All" & mapSpillYear=="All" & mapLifeYear=="All" & mapVolume !="All") {
                if (mapPathway=="All" & mapCause =="All"){
                        mapDataVolumeOnly(mapVolume, mapState);
                }// end mapVolume Only

                if (mapPathway=="All" & mapCause != "All"){
                        mapDataVolumeCause(mapVolume, mapCause, mapState);
                }// end mapVolumeCause Only

                if (mapPathway !="All" & mapCause=="All"){
                        mapDataPathwayVolume(mapPathway, mapVolume, mapState);
                }// end mapPathwayVolume Only


                if (mapPathway !="All" & mapCause != "All"){
                        mapDataPathwayVolumeCause(mapPathway, mapVolume, mapCause, mapState);
                }// end mapPathwayVolumeCause
           }//end mapVolume != All
        } //end LifeYear all            
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All" & mapPathway== "All" & mapCause == "All"){            
                mapDataLifeYearOnly(mapLifeYear, mapState);
            }

            if (mapVolume == "All" & mapPathway== "All" & mapCause != "All"){
                mapDataLifeYearCause(mapLifeYear, mapCause, mapState);
            }//end mapLifeYearCause

            if (mapVolume == "All" & mapPathway != "All" & mapCause == "All"){
                mapDataPathwayLifeYear(mapPathway, mapLifeYear, mapState);
            }//end mapPathwayLifeYear

            if (mapVolume == "All" & mapPathway != "All" & mapCause != "All"){
                mapDataPathwayLifeYearCause(mapPathway, mapLifeYear, mapCause, mapState);
            }//end mapPathwayLifeYearCause


            if (mapVolume != "All" & mapPathway == "All" & mapCause == "All"){
                mapDataLifeYearVolume(mapLifeYear, mapVolume, mapState);
            }//end mapLifeYearVolume
            
            if (mapVolume != "All" & mapPathway == "All" & mapCause != "All"){
                mapDataLifeYearVolumeCause(mapLifeYear, mapVolume, mapCause, mapState);
            }//end mapLifeYearVolumeCause

            if (mapVolume != "All" & mapPathway != "All" & mapCause == "All"){
                mapDataPathwayLifeYearVolume(mapPathway, mapLifeYear, mapVolume, mapState);
            }//end mapLifeYearVolumeCause

            if (mapVolume != "All" & mapPathway != "All" & mapCause != "All"){
                mapDataPathwayLifeYearVolumeCause(mapPathway, mapLifeYear, mapVolume, mapCause, mapState);
            }//end mapLifeYearVolumeCausePathway
        }// end mapLifeYear         
    } // end if mapSpudYr mapSpillYr
//--------------------------------------------------------------

    if (mapSpillYear !="All") {
        if (mapLifeYear == "All"){
            if (mapVolume == "All"){
                if (mapPathway== "All" & mapCause== "All"){
                    mapDataSpillYearOnly(mapSpillYear, mapState);
                }//end mapSpillYearOnly

                if (mapPathway== "All" & mapCause != "All"){
                    mapDataSpillYearCause(mapSpillYear, mapCause, mapState);
                }//end mapSpillYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpillYearPathway(mapSpillYear, mapPathway, mapState);
                }//end mapSpillYearCause

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpillYearPathwayCause(mapSpillYear, mapPathway, mapCause, mapState);
                }//end mapSpillYearPathwayCause
            } //end volume is all
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpillYearVolume(mapSpillYear, mapVolume, mapState);
                }// end map SpillYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpillYearVolumeCause(mapSpillYear, mapVolume, mapCause, mapState);
                }// end map SpillYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpillYearVolumePathway(mapSpillYear, mapVolume, mapPathway, mapState);
                }// end map SpillYearVolumeCause

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpillYearVolumePathwayCause(mapSpillYear, mapVolume, mapPathway, mapCause, mapState);
                }// end map SpillYearVolumeCause
            }// end Volume != All
        } // end mapLifeYear is all
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume=="All"){
                if (mapPathway=="All" & mapCause=="All"){
                    mapDataSpillYearLifeYear(mapSpillYear, mapLifeYear, mapState);
                }// end mapDataSpillYearLifeYear

                if (mapPathway=="All" & mapCause != "All"){
                    mapDataSpillYearLifeYearCause(mapSpillYear, mapLifeYear, mapCause, mapState);
                }// end mapDataSpillYearLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpillYearLifeYearPathway(mapSpillYear, mapLifeYear, mapPathway, mapState);
                }// end mapDataSpillYearLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpillYearLifeYearPathwayCause(mapSpillYear, mapLifeYear, mapPathway, mapCause, mapState);
                }// end mapDataSpillYearLifeYearPathwayCause
            } // end mapVolume==All
//--------------------------------------------------------------

            if (mapVolume != "All") {
                if (mapPathway == "All" & mapCause=="All"){
                    mapDataSpillYearLifeYearVolume(mapSpillYear, mapLifeYear, mapVolume, mapState)
                } // end mapDataSpillYearLifeYearVolume

                if (mapPathway == "All" & mapCause !="All"){
                    mapDataSpillYearLifeYearVolumeCause(mapSpillYear, mapLifeYear, mapVolume, mapCause, mapState)
                } // end mapDataSpillYearLifeYearVolumeCause

                 if (mapPathway != "All" & mapCause =="All"){
                    mapDataSpillYearLifeYearPathwayVolume(mapSpillYear, mapLifeYear, mapPathway, mapVolume, mapState)
                } // end mapDataSpillYearLifeYearPathwayVolume

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpillYearLifeYearPathwayVolumeCause(mapSpillYear, mapLifeYear, mapPathway, mapVolume, mapCause, mapState);
                } // end mapDataSpillYearLifeYearPathwayVolumeCause

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpillYearLifeYearPathwayVolumeCause(mapSpillYear, mapLifeYear, mapPathway, mapVolume, mapCause, mapState);
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
                    mapDataSpudYrOnly(mapSpudYr, mapState);
                }// end mapdDataSpudYr Only

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrCause(mapSpudYr, mapCause, mapState);
                }// end mapdDataSpudYrCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrPathway(mapSpudYr, mapPathway, mapState);
                }// end mapdDataSpudYrPathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrPathwayCause(mapSpudYr, mapPathway, mapCause, mapState);
                }// end mapdDataSpudYrPathwayCause
            }// end if volume is all
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrVolume(mapSpudYr, mapVolume, mapState);
                } // end mapDataSpudYrVolume

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrVolumeCause(mapSpudYr, mapVolume, mapCause, mapState);
                } // end mapDataSpudYrVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrVolumePathway(mapSpudYr, mapVolume, mapPathway, mapState);
                } // end mapDataSpudYrVolumePathway

                 if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrVolumePathwayCause(mapSpudYr, mapVolume, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrVolumePathwayCause
            }// end if mapVolume != All
        }//end if mapLifeYear is all
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrLifeYear(mapSpudYr, mapLifeYear, mapState);
                } // end mapDataSpudYrLifeYear

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrLifeYearCause(mapSpudYr, mapLifeYear, mapCause, mapState);
                } // end mapDataSpudYrLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrLifeYearPathway(mapSpudYr, mapLifeYear, mapPathway, mapState);
                } // end mapDataSpudYrLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrLifeYearPathwayCause(mapSpudYr, mapLifeYear, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrLifeYearPathwayCause
            }//end if mapVolume != "All"
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrLifeYearVolume(mapSpudYr, mapLifeYear, mapVolume, mapState);
                } // end mapDataSpudYrLifeYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrLifeYearVolumeCause(mapSpudYr, mapLifeYear, mapVolume, mapCause, mapState);
                } // end mapDataSpudYrLifeYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrLifeYearVolumePathway(mapSpudYr, mapLifeYear, mapVolume, mapPathway, mapState);
                } // end mapDataSpudYrLifeYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrLifeYearVolumePathwayCause(mapSpudYr, mapLifeYear, mapVolume, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrLifeYearVolumePathwayCause
            } // end mapVolume !=All
        }// end if mapLifeYear !=All
    }//end if mapSpillYear is all
//--------------------------------------------------------------
    if (mapSpillYear != "All") {
        if (mapLifeYear == "All"){
            if (mapVolume == "All"){
                 if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrSpillYear(mapSpudYr, mapSpillYear, mapState);
                } // end mapDataSpudYrSpillYear

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearCause(mapSpudYr, mapSpillYear, mapCause, mapState);
                } // end mapDataSpudYrSpillYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearPathway(mapSpudYr, mapSpillYear, mapPathway, mapState);
                } // end mapDataSpudYrSpillYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearPathwayCause(mapSpudYr, mapSpillYear, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrSpillYearPathwayCause
            }//end if mapVolume == All
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearVolume(mapSpudYr, mapSpillYear, mapVolume, mapState);
                } // end mapDataSpudYrSpillYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearVolumeCause(mapSpudYr, mapSpillYear, mapVolume, mapCause, mapState);
                } // end mapDataSpudYrSpillYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearVolumePathway(mapSpudYr, mapSpillYear, mapVolume, mapPathway, mapState);
                } // end mapDataSpudYrSpillYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearVolumePathwayCause(mapSpudYr, mapSpillYear, mapVolume, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrSpillYearVolumePathwayCause
            }// end mapVolume != All
        }// end if mapLifeYear == All
//--------------------------------------------------------------
        if (mapLifeYear != "All"){
            if (mapVolume == "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearLifeYear(mapSpudYr, mapSpillYear, mapLifeYear, mapState);
                } // end mapDataSpudYrSpillYearLifeYear

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearLifeYearCause(mapSpudYr, mapSpillYear, mapLifeYear, mapCause, mapState);
                } // end mapDataSpudYrSpillYearLifeYearCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearLifeYearPathway(mapSpudYr, mapSpillYear, mapLifeYear, mapPathway, mapState);
                } // end mapDataSpudYrSpillYearLifeYearPathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearLifeYearPathwayCause(mapSpudYr, mapSpillYear, mapLifeYear, mapPathway, mapCause, mapState);
                } // end mapDataSpudYrSpillYearLifeYearPathwayCause
            }// end if mapVolume == All
//--------------------------------------------------------------
            if (mapVolume != "All"){
                if (mapPathway == "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearLifeYearVolume(mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapState);
                } // end mapDataSpudYrSpillYearLifeYearVolume

                if (mapPathway == "All" & mapCause != "All"){
                    mapDataSpudYrSpillYearLifeYearVolumeCause(mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapCause, mapState);
                } // end mapDataSpudYrSpillYearLifeYearVolumeCause

                if (mapPathway != "All" & mapCause == "All"){
                    mapDataSpudYrSpillYearLifeYearVolumePathway(mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapPathway, mapState);
                } // end mapDataSpudYrSpillYearLifeYearVolumePathway

                if (mapPathway != "All" & mapCause != "All"){
                    mapData(mapSpudYr, mapSpillYear, mapLifeYear, mapVolume, mapPathway, mapCause, mapState);
                } // end mapData
            }
        }// end if mapLifeYear != All
    } // end if mapSpillYear != All
}//end if mapSpudYr is not All

}//end function whattoFilter
