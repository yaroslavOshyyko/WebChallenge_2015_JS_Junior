
function calcIndex(){
    var tr = document.getElementsByTagName("tr");

    for(var i = 1; i< tr.length; i++){
        tr[i].getElementsByTagName("td")[0].style.backgroundColor = "";
        tr[i].getElementsByTagName("td")[1].style.backgroundColor = "";

    }
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    if(!isFinite(height)) height = 1;
    if(!isFinite(weight)) weight = 0;
    var result = (weight/(height*height)).toFixed(2);
    if(!isFinite(result)) result = 0;
    document.getElementById("result").innerHTML = result;
    color(result);
}

function color(result){
    var indexes = [18.5, 24.9, 29.9, 34.9, 39.9, Number.MAX_VALUE];
    var tr = document.getElementsByTagName("tr");
    var row = 1;
    for (var i = 0; i < indexes.length-1; i++){
        if((result >= indexes[i]) && (result <= indexes[i+1])){
            row = i+2   ;
            break;
        }
    }

    var colorTd = tr[row].getElementsByTagName("td");


    switch (row){
        case 1:
            colorTd[0].style.backgroundColor = "#ffa700";
            colorTd[1].style.backgroundColor = "#ffa700";
            break;
        case 2:
            colorTd[0].style.backgroundColor = "#47e508";
            colorTd[1].style.backgroundColor = "#47e508";
            break;
        case 3:
            colorTd[0].style.backgroundColor = "#ffb400";
            colorTd[1].style.backgroundColor = "#ffb400";
            break;
        case 4:
            colorTd[0].style.backgroundColor = "#ff8100";
            colorTd[1].style.backgroundColor = "#ff8100";
            break;
        case 5:
            colorTd[0].style.backgroundColor = "#ff4d00";
            colorTd[1].style.backgroundColor = "#ff4d00";
            break;
        case 6:
            colorTd[0].style.backgroundColor = "#ff0000";
            colorTd[1].style.backgroundColor = "#ff0000";
            break;
    }
}
