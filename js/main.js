$(document).ready(function() {

  $.getJSON("../json/getContent.json", function(data) {
    alert(data);
    var output ="<p>";
    for (var i in data.contents){
      output += data.contents[i].content;
    }
    output+="</p>";
    document.getElementById("contentInstallation").innerHTML=output;

  });
});
