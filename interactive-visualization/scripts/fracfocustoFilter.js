//                   FUNCTION TO CALL CORRECT MAP FUNCTION TO FILTER DATA                      //
function fracfocustoFilter(mapState, mapYear, mapChemical){
console.log(mapState); console.log(mapYear); console.log(mapChemical);

// If Material is All
if (mapYear=="All"){
            mapDataChemicalOnly(mapState, mapChemical);
        }// end mapWater Only
                           
if (mapYear != "All"){
            mapDataYear(mapState, mapYear, mapChemical);
        } //end mapContainOnly

}//end function materialtoFilter
