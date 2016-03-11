
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
            row = i+2;
            break;
        }
    }

    var colorTd = tr[row].getElementsByTagName("td");
    colorTd[0].style.backgroundColor = "grey";
    colorTd[1].style.backgroundColor = "grey";
}
