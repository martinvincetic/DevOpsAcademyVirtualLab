$(document).ready(function() {
  /*
      $(".testButton2").on("click", function() {

        $.get('http://127.0.0.1:8888/YT/rest/channels/getChannelList?callback=parseResponse', function( data ) {
           $.each(data, function(index, element) {
               $("#channelId").append("<option value=\"" + element.EcomOutletId + "\">" + element.channelName + "</option>");
           });
       });

     });*/
  $(".testButton2").on("click", function() {
    var url = 'http://127.0.0.1:8888/YT/rest/channels/getChannelList?callback=parseResponse';
    $.getJSON(url, function(data){
        alert(data);
    });
  });
});
