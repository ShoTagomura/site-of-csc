var newester = document.getElementById("neuslister");

fetch("./newslist.json").then(function(response) {
    return response.json();
}).then(function(newslis) {
    var nwstdate = newslis[0].data;
    var descs = newslis[0].description;
    var target = newslis[0].linktarget;
    var otex = "";
    
    for(var j = 0; j < newslis.length; j++) {
        var nwstdate = newslis[j].data;
        var descs = newslis[j].description;
        var target = newslis[j].linktarget;
        
        if(j == (newslis.length-1)) {
            otex += "<li>"+nwstdate+"</li>\n<p><a href=\"./"+target+"\">"+descs+"</a></p>";
        }
        else {
            otex += "<li>"+nwstdate+"</li>\n<p><a href=\"./"+target+"\">"+descs+"</a></p>\n";
        }
    }

    newester.innerHTML = otex;
});