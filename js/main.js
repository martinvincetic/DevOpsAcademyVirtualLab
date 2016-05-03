$(document).ready(function() {

  $(".testButton2").on("click", function() {

    $.getJSON("/rest/channels/getChannelList", function( data ) {
       $.each(data, function(index, element) {
           $("#channelId").append("<option value=\"" + element.EcomOutletId + "\">" + element.channelName + "</option>");
       });
   });

  });

});
