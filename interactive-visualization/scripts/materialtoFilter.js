//                   FUNCTION TO CALL CORRECT MAP FUNCTION TO FILTER DATA                      //
function materialtoFilter(mapVolume, mapMaterial, mapContain, mapWater){
//console.log(mapMaterial); console.log(mapContain); console.log(mapWater); console.log(mapVolume);

// If Material is All
if (mapMaterial=="All"){            
    if (mapVolume=="All"){
        if (mapContain=="All" & mapWater!="All"){
            mapDataWaterOnly(mapWater, mapState);
        }// end mapWater Only
                           
        if (mapContain != "All" & mapWater=="All"){
            mapDataContainOnly(mapContain, mapState);
        } //end mapContainOnly

        if (mapContain != "All" & mapWater != "All"){
                mapDataWaterContain(mapContain, mapWater, mapState);
        } //end mapPathwayCause

        if (mapContain == "All" & mapWater =="All"){
                    mapDataState(mapState);
        }
    } //end map volume all

//--------------------------------------------------------------

    if (mapVolume != "All") {
        if (mapContain=="All" & mapWater =="All"){
           mapDataVolumeOnly(mapVolume, mapState);
        }// end mapVolume Only

        if (mapContain=="All" & mapWater != "All"){
            mapDataVolumeWater(mapVolume, mapWater, mapState);
        }// end mapVolumeWater Only

        if (mapContain !="All" & mapWater == "All"){
            mapDataVolumeContain(mapVolume, mapContain, mapState);
        }// end mapVolumeContain Only

        if (mapContain !="All" & mapWater != "All"){
             mapDataVolumeContainWater(mapVolume, mapContain, mapWater, mapState);
        }// end mapVolumeContainWater
    }//end mapVolume != All
} //end Material all            

//--------------------------------------------------------------
if (mapMaterial != "All"){
    if (mapVolume == "All"){
        if (mapContain== "All" & mapWater== "All"){
            mapDataMaterialOnly(mapMaterial, mapState);
        }//end mapMaterialOnly

        if (mapContain== "All" & mapWater != "All"){
            mapDataMaterialWater(mapMaterial, mapWater, mapState);
        }//end mapMaterialWater

        if (mapContain != "All" & mapWater == "All"){
            mapDataMaterialContain(mapMaterial, mapContain, mapState);
        }//end mapMaterialContain

        if (mapContain != "All" & mapWater != "All"){
            mapDataMaterialContainWater(mapMaterial, mapContain, mapWater, mapState);
        }//end mapMaterialContainWater
    } //end volume is all
//--------------------------------------------------------------
    if (mapVolume != "All"){
        if (mapContain == "All" & mapWater == "All"){
            mapDataMaterialVolume(mapMaterial, mapVolume, mapState);
        }// end map MaterialVolume

        if (mapContain == "All" & mapWater != "All"){
            mapDataMaterialVolumeWater(mapMaterial, mapVolume, mapWater, mapState);
        }// end map MaterialVolumeWater

        if (mapContain != "All" & mapWater == "All"){
            mapDataMaterialVolumeContain(mapMaterial, mapVolume, mapContain, mapState);
        }// end map MaterialVolumeContain

        if (mapContain != "All" & mapWater != "All"){
            mapDataMaterialVolumeContainWater(mapMaterial, mapVolume, mapContain, mapWater, mapState);
        }// end map MaterialVolumeContainWater
    }// end Volume != All
} // end Material is all

}//end function materialtoFilter
