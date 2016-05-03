$(document).ready(function() {

  $(".testButton2").on("click", function() {

    $.getJSON('http://127.0.0.1:8888/YT/rest/channels/getChannelList', function( data ) {
       $.each(data, function(index, element) {
           $("#channelId").append("<option value=\"" + element.EcomOutletId + "\">" + element.channelName + "</option>");
       });
   });

  });

});
