$(document).ready(function () {

    var url = window.location.search;
    var usernm;
  
    if (url.indexOf("?username=") !== -1) {
      usernm = url.split("=")[1];
    }
  
    console.log("fetch Logged in kids's details");
    $.get("/api/getkiddetails/"+usernm, function (data) {
      console.log("data:" + JSON.stringify(data));
      $("body").append("WELCOME "+data.kidname);
      $("body").append("<br> Current Balance:"+data.total);
     
    });
  
  
  
  });