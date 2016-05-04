$(document).ready(function() {

  var url = 'http://127.0.0.1:8888/YT/rest/channels/getChannelList?callback=parseResponse';
  $.getJSON(url, function(data) {
    $.each(data, function(index, element) {
      var newHtml = '<div class="table">' +
        '<div><div id="eID">' + element.ecomOutletId + '</div>' +
        '<div id="chName">' + element.channelName + '</div>' +
        '</div>';
      $("#resultContainer").append(newHtml);
    });
  });

  $(".refresh").on("click", function() {
    $("#resultContainer").empty();
    $.getJSON(url, function(data) {
      $.each(data, function(index, element) {
        var newHtml = '<div class="table">' +
          '<div><div id="eID">' + element.ecomOutletId + '</div>' +
          '<div id="chName">' + element.channelName + '</div>' +
          '</div>';
        $("#resultContainer").append(newHtml);
      });
    });
  });
  $(document).ready(function() {

    $("#createChannelButton").on("click", function() {
      $("#createChannelResponse").empty(),
        $("#createChannelResponse").removeClass("createChannelSuccess")
      $("#createChannelResponse").removeClass("createChannelError");

      // call function defined below to parse the form data
      var dataToSend = formToJson();

      //Debug output to the browsers console
      console.log("Request data: " + dataToSend);

      // Make a ajax call, that posts the Json. Depending on result, the error or success function is called
      $.ajax({
        url: "http://127.0.0.1:8888/YT/rest/channels/upsertChannel",
        type: "POST",
        data: dataToSend,
        contentType: "application/json; charset=utf-8",
        dataType: "",
        success: function() {
          $("#createChannelResponse").html("Channel has been created with success!");
          $("#createChannelResponse").addClass("createChannelSuccess");
        },
        error: function(errorResponse) {
          console.log(errorResponse);
          $("#createChannelResponse").html("Error while creating channel:<br/>" + errorResponse.responseText);
          $("#createChannelResponse").addClass("createChannelError");
        }
      });
    });
  });

  function formToJson() {
    // create a new, empty object
    var formData = new Object();
    // put content of field #ecomOutletId to the object
    formData.ecomOutletId = $("#ecomOutletId").val();
    // put content of field #channelName to the object
    formData.channelName = $("#channelName").val();
    // convert to json and return to caller
    return JSON.stringify(formData);
  }
});
