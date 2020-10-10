/*var mb01 = document.getElementById("m01");
var mb02 = document.getElementById("m02");
var mb03 = document.getElementById("m03");
var mb04 = document.getElementById("m04");
var mb05 = document.getElementById("m05");*/
var newester = document.getElementById("neuest");

fetch("./news/newslist.json").then(function(response) {
    return response.json();
}).then(function(newslis) {
    var nwstdate = newslis[0].data;
    var descs = newslis[0].description;
    var target = newslis[0].linktarget;

    newester.innerHTML = "Latest: <a href=\"./news/" + target + "\">" + descs + " (" + nwstdate + ")</a>";
});