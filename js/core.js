var mb01 = document.getElementById("m01");
var mb02 = document.getElementById("m02");
var mb03 = document.getElementById("m03");
var mb04 = document.getElementById("m04");
var mb05 = document.getElementById("m05");
var newester = document.getElementById("neuest");

mb01.addEventListener("click", function() {
    window.location.href = "./aundc/";
}, false);
mb02.addEventListener("click", function() {
    window.location.href = "./releases/";
}, false);
mb03.addEventListener("click", function() {
    window.open("https://csoundc.bandcamp.com/releases", "_blank");
}, false);
mb04.addEventListener("click", function() {
    window.open("https://twitter.com/c_sc_inforoom", "_blank");
}, false);
mb05.addEventListener("click", function() {
    window.location.href = "./news/";
}, false);
fetch("./news/newslist.json").then(function(response) {
    return response.json();
}).then(function(newslis) {
    var nwstdate = newslis[0].data;
    var descs = newslis[0].description;
    var target = newslis[0].linktarget;

    newester.innerHTML = "Latest: <a href=\"./news/" + target + "\">" + descs + " (" + nwstdate + ")</a>";
});