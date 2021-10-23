function showhide(id){
    var div = document.getElementById(id);
    if (div.className === "hidden") {
        div.className = "hidden  active";
    } else {
        div.className = "hidden";
    }
}
function showhide2(id){
    var div = document.getElementById(id);
    if (div.className === "hidden2") {
        div.className = "hidden2  active";
    } else {
        div.className = "hidden2";
    }
}