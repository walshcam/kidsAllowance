$(document).ready(function () {

    //Initialize Materialize Components
    M.AutoInit();

    var kid = $("#selectkid");
    var transaction = $("#selecttransactiontype");
    var amount = $("#amount");
    var currentbalance;



    var url = window.location.search;
    var pid;

    if (url.indexOf("?ParentId=") !== -1) {
    pid = url.split("=")[1];
    console.log("pid: " + pid);
    }





    $(document).on("submit", "#parent", handleKidFormSubmit);
    
    getKidsList();

    function handleKidFormSubmit(event) {
        event.preventDefault();
        console.log(kid.val());
        console.log("EVENT: " + event);
    console.log(amount.val());
    if(transaction.val()==="Withdraw"){
        console.log("Transaction Withdraw:"+transaction.val())
        var newtotal = {
            id: kid.val(),
            // kidname:kid.val().trim(),
            total: currentbalance-parseInt(amount.val())
        };
        updatetotal(newtotal);
        currentbalance = currentbalance-parseInt(amount.val());    
    }
    else if(transaction.val()==="Deposit")
    {   console.log("Transaction Deposit:"+transaction.val())
        var newtotal = {
            id: kid.val(),
            // kidname:kid.val().trim(),
            total: currentbalance+parseInt(amount.val())
        };
        updatetotal(newtotal);
        currentbalance = currentbalance+parseInt(amount.val());
    }
    
    }
    function updatetotal(total) {
        $.ajax({
        method: "PUT",
        url: "/api/transactions",
        data: total
        })
        .then(function(data) {
            console.log("data:"+data);
            // window.location.href = "/parent";
        });
    }

    function getKidsList() {
        console.log("Retrieve Kids list");
        $.get("/api/kidslistrender/"+pid, renderKidsList);
    }
    
    function renderKidsList(data) {
    
        console.log("Render kids list, data.length:"+data.length);
        
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            console.log("data:"+data[i]);
            rowsToAdd.push(createKidRow(data[i]));
        }
    
        console.log("rowsToAdd:"+rowsToAdd);
        kid.append(rowsToAdd);
        console.log("Appended Rows");
        kid.val(data.id);
        //Initialize Materialize Dropdown Components
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }

    
    function createKidRow(Kid) {
        console.log(Kid.kidname);
        var listOption = $("<option>");
        listOption.attr("value", Kid.id);
        currentbalance = parseInt(Kid.total);
        console.log(currentbalance);
        listOption.text(Kid.kidname);
        console.log("List Option: >")
        console.log(listOption);
        return listOption;
        
    }



});
