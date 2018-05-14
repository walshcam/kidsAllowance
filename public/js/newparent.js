$(document).ready(function() {
   
    var nameinput = $("#newparentname");
    var usernameinput = $("#newparentusername");
    var passwordinput = $("#newparentpassword");
    
    
    $(document).on("submit", "#newformparent", handleparentFormSubmit);
   
   
  
   
    function handleparentFormSubmit(event) {
      event.preventDefault();
     
      if (!nameinput.val().trim().trim()) {
        alert("Name cannot be empty")
        return;
      }
     
      insertparent({
        parentname: nameinput.val().trim(),
        username:usernameinput.val().trim(),
        parentpassword:passwordinput.val().trim(),
      });

      $( '#newsletterform' ).each(function(){
        this.reset();
    });
    }
  
    
    function insertparent(parentData) {
      $.post("/api/newparent", parentData).then(function(data) {
        window.location = "/parentspage?username=" + usernameinput.val().trim();
    });

        
    }  

    //Initialize Materialize Components
    M.AutoInit();


  });
  