$('#newlogin').click(function(){
    $("#category").empty();
    $('#category').append('<button id="newparent">Parent</button><br><br>'); 
    $('#category').append('<button id="newkid">Kid</button><br><br>'); 
  });
  $(document).on('click',"#newparent", function(){
    window.location.href = '/newparent';
  });
  $(document).on('click',"#newkid", function(){
    window.location.href = '/newkid';
   });

$('#returnlogin').click(function(){
    $("#category").empty();
    $('#category').append('<button id="returningparent">Parent</button><br><br>'); 
    $('#category').append('<button id="returningkid">Kid</button><br><br>'); 
  });
  $(document).on('click',"#returningparent", function(){
    window.location.href = '/returningparent';
  });
  $(document).on('click',"#returningkid", function(){
    window.location.href = '/returningkid';
   });




   