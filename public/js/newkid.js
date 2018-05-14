$(document).ready(function () {

    //Initialize Materialize Components
    M.AutoInit();

    var nameinput = $("#newkidname");
    var usernameinput = $("#newkidusername");
    var passwordinput = $("#newkidpassword");
    var parentnameinput = $("#newkidparentname");
    var newkidbalance = $("#newkidbalance");
    var parentSelect = $("#newkidparentname");
    var parentId;
    $(document).on("submit", "#newformkid", handleKidFormSubmit);
    
    getParentsList();

    function handleKidFormSubmit(event) {
        event.preventDefault();

        if (!nameinput.val().trim().trim()) {
            alert("Name cannot be empty")
            return;
        }
       
        insertkid({
            kidname: nameinput.val().trim(),
            username: usernameinput.val().trim(),
            kidpassword: passwordinput.val().trim(),
            parentname: parentnameinput.val().trim(),
            total: newkidbalance.val(),
            ParentId: parentSelect.val()
        });
    
       
       
    }


    function insertkid(kidData) {
        $.post("/api/newkid", kidData).then(function(data) {
            window.location = "/kidspage?username=" + usernameinput.val().trim();
        });

    }  
      

    

    function getParentsList() {
        console.log("Retrieve parents list");
        $.get("/api/parentslist", renderParentsList);
    }
    // Function to  render a list of parents
    function renderParentsList(data) {
      
        console.log("Render parents list, data.length: " + data.length);
        console.log(data);
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            console.log("data: " + data[i]);
            rowsToAdd.push(createParentRow(data[i]));
            parentSelect.append(createParentRow(data[i]));
            parentSelect.val(data[i].id);
        }
       // parentSelect.empty();
        console.log("rowsToAdd: " + rowsToAdd);
        // parentSelect.append(rowsToAdd);
        console.log("Appennodded Rows");
        // parentSelect.val(data.id);
        console.log("Data ID: " + data.id);
        console.log(parentSelect.val());
        //Initialize Materialize Dropdown Components
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }

    // Populates the parents in the dropdown
    function createParentRow(Parent) {
        console.log("Parent's Name: " + Parent.parentname + ", id: " + Parent.id)
        var listOption = $("<option>");
        listOption.attr("value", Parent.id);
        listOption.text(Parent.parentname);
        console.log("List Option: >")
        console.log(listOption);
        return listOption;
        
    }

});
