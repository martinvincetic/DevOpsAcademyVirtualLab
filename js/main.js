$(document).ready(function() {

  $(".testButton2").on("click", function() {

    $.getJSON('172.17.0.2:8888/YT/rest/channels/getChannelList', function( data ) {
       $.each(data, function(index, element) {
           $("#channelId").append("<option value=\"" + element.EcomOutletId + "\">" + element.channelName + "</option>");
       });
   });

  });

});
