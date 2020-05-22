//prior to loading make sure to sort in descending order and filter those less than twice
function createWordCloud(filterData){
wordData = filterData;

//lop through and count number of words
var objectsDetails = {};
      $.each(wordData, function(i,e){
        objectsDetails[this.pathway_detail] = (objectsDetails[this.pathway_detail] || 0) + 1;
      });
//console.log(objectsDetails);

var arrayObject = $.makeArray(objectsDetails);
//var sizeVariable = $.map(objectsDetails, function(v,i) { return i; });
//var textVariable = Object.keys(objectsDetails).map(function (key) { return objectsDetails[key]; });
 
//combine 2 arrays into one
var endResult=[];
var objNew = {};
var counter = 0;

arrayObject.forEach(function(fieldInput){
    for (field in fieldInput){
        objNew.path = field;
        objNew.values = fieldInput[field];
       // objNew.values = arrDetails[counter];
       // counter++;
        endResult.push(objNew);
        objNew={};
    };
})
//console.log(endResult.length);

//console.log(endResult[2].path);
//console.log(endResult[2].values);

//create new array with 2 d arrays inside the length of endResult
var tags = [];
for(i =0; i < endResult.length; i++)
  tags.push([endResult[i].path, endResult[i].values]);
//console.log(tags)
 
//put on map
WordCloud(document.getElementById("cloudWord"), {
    gridSize: 12, //12,
    weightFactor: 2, //2
    rotateRatio: 1, //0.5,
    minSize: 1,
    color: "random-dark",
    shape: "circle",
    ellipticity: 1,
//    list: tags.map(function(word) { return [word[0], Math.round(word[1])]; }),
    list: tags.map(function(word) { return [word[0], Math.round(word[1]/8+4)]; })
    
}); //end WordCloud
//console.log(tags.map(function(word) { return [word[0], Math.round(word[1]/3)]; }));

var clicked = function(ev) {
              if (ev.target.nodeName === "SPAN") {
                var tag = ev.target.textContent;
                var tagElem;
                if (tags.some(function(el) { if (el[0] === tag) {tagElem = el; return true;} return false; })) {
                var comment =   tagElem[1] + " mention(s) of “" + tag +'"' 
                document.getElementById('details').innerHTML = "<code>" + comment + "</code>";
              //  document.getElementById("details").innerText =  tagElem[1] + 
               //     " mention(s) of “" + tag +'"';
                }
              } else {
                var comment = "Scroll over word"
                document.getElementById("details").innerHTML = "<code>" + comment + "</code>";
              }
            }
            document.getElementById("cloudWord").addEventListener("mouseover", clicked)
 
} // end function WordCloud
      
/*$("pathway").on('shown.bs.tab', function(e){
  document.getElementyById(cloudWord).innerHTML = "";
  createWordCloud(filterData);
})
*/
