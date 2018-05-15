$(document).ready(function () {
    $(document).on("submit", "#returningformkid", getkids);

    //getparents();


    function getkids() {
        // event.preventDefault();
        var usernameinput = $("#returningkidusername").val().trim();
        var passwordinput = $("#returningkidpassword").val().trim();
        var matchFound = false;
        console.log(usernameinput);
        // window.location = "/kidspage?username=" + usernameinput;
        // window.location = "/kidspage?username=" + usernameinput;
        // $.get("/api/kidslist", function (data) {
        //     console.log("USER ENTERED:"+usernameinput + "," + passwordinput);
        //     for (var i = 0; i < data.length; i++) {
        //         console.log("data[i].username:" + data[i].username + ",data[i].parentpassword:" + data[i].parentpassword);
        //         if (usernameinput == data[i].username && passwordinput == data[i].parentpassword) {
        //             matchFound = true;
        //         } 
        //     }

        //     if (matchFound) {
        //         alert("LOGGED IN");
        //     } else {
        //         alert("Invalid credentials");
        //     }

        // });
    }

    //Initialize Materialize Components
    M.AutoInit();


});
