$(document).ready(function () {
  var wishinput = $("#textarea1");
  var costinput = $("#textarea2");
  var wishp = $("#goal");
  var amount = $("#currentbalance");
  var difference = $("#amounttogo");
  var kiduser = $("#kiduser");
    var url = window.location.search;
    var usernm;

// Render the kids page with info
    getkiddata();

// Wish form on submit
    $(document).on("submit", "#wishform", wishformsubmit);


    function wishformsubmit(event) {
      event.preventDefault();
      if (!wishinput.val().trim()) {
          alert("Wish cannot be empty")
          return;
      }
  
      insertwish({
          wish: wishinput.val().trim(),
          cost: costinput.val(),
          username: usernm
      });
      
  }


  function insertwish(data) { 
    // clearfields();
    $.ajax("/api/kidslist", {
     type: "PUT",
     data: data
   }).then(
     function() {
       getkiddata();
      
       console.log("logged new wish");
});
}

// function clearfields() {
//   wishinput.value = "";
//   costinput.value = "";
// }

    function getkiddata() {

      if (url.indexOf("?username=") !== -1) {
        usernm = url.split("=")[1];
        console.log("usernm" + usernm);
      }
      $.get("/api/getkiddetails/"+usernm, renderkidspage);
  }


  function renderkidspage(data) {
    kiduser.html("Welcome " + data.username);
    amount.html(data.total);
    console.log("data cost:" + data.cost)
    if(data.cost === null) {
      difference.html("No goal has been entered")}
      else {
        // var wishnum = parseInt(data.cost);
        // var totalnum = parseInt(data.total);
        var diff = (data.cost - data.total);
        console.log("diff: " + diff)
        difference.html(diff);
      };
      wishp.html(data.wish + " " + data.cost);

    }
     
    });

    // if (url.indexOf("?username=") !== -1) {
    //   usernm = url.split("=")[1];
    // }
  
    // console.log("fetch Logged in kids's details");
    // $.get("/api/getkiddetails/"+usernm, function (data) {
    //   console.log("data:" + JSON.stringify(data));
    //   $("body").append("WELCOME "+data.kidname);
    //   $("body").append("<br> Current Balance:"+data.total);
     
    // });
  
  
  
  // });