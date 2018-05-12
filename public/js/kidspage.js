$(document).ready(function () {

  // Variables
  var wishinput = $("#textarea1");
  var costinput = $("#textarea2");
  var wishp = $("#goalitem");
  var wishcost = $("#goalcost");
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
      console.log("this is wishinput: " + wishinput.val().trim());
      console.log("this is costinput: " + costinput.val());
      console.log("usernm: " + usernm);
    
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
    console.log("usernm: " + usernm);
    $.ajax("/api/kidslist", {
     type: "PUT",
     data: data
   }).then(
     function() {
       getkiddata();
      
       console.log("logged new wish");
  });
}

// API request to get data
    function getkiddata() {

      if (url.indexOf("?username=") !== -1) {
        usernm = url.split("=")[1];
        console.log("usernm" + usernm);
      }
      $.get("/api/getkiddetails/"+usernm, renderkidspage);
  }


  function renderkidspage(data) {
    // Inserting data
    kiduser.html("Welcome " + data.username);
    amount.html(data.total);
    console.log("wishinput: " + wishinput.value);
    // Clearing inputs
    $('#textarea1').val('');
    M.textareaAutoResize($('#textarea1'));
    $('#textarea2').val('');
    M.textareaAutoResize($('#textarea2'));
    console.log("data cost:" + data.cost)
    // calculating amount till goal
    if(data.cost === null) {
      difference.html("No goal has been entered")}
      else {
        // var wishnum = parseInt(data.cost);
        // var totalnum = parseInt(data.total);
        var diff = (data.cost - data.total);
        console.log("diff: " + diff)
        difference.html(diff);
      };
      wishp.html(data.wish);
      wishcost.html(data.cost);

    }
     
    });

   