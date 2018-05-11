$(document).ready(function () {
    $(document).on("submit", "#returningformparent", getparents);

    //getparents();


    function getparents() {

        var usernameinput = $("#returningparentusername").val().trim();
        var passwordinput = $("#returningparentpassword").val().trim();
        var matchFound = false;

        // $.get("/api/parentslist", function (data) {
        //     console.log("USER ENTERED:"+usernameinput + "," + passwordinput);
        //     for (var i = 0; i < data.length; i++) {
        //         console.log("data[i].username:" + data[i].username + ",data[i].parentpassword:" + data[i].parentpassword);
        //         if (usernameinput == data[i].username && passwordinput == data[i].parentpassword) {
        //             matchFound = true;
        //             window.location.href = "https://www.w3schools.com/js/js_window_location.asp";
        //         } 
        //         else{
        //             alert("invalid");
        //         }
        //     }

        //     // if (matchFound) {
                
        //     // } else {
        //     //     alert("Invalid credentials");
        //     // }

        // });
    }



});
