$(document).ready(function () {

    var kid = $("#selectkid");
    var transaction = $("#selecttransactiontype");
    var amount = $("#amount");
    var currentbalance;



    var url = window.location.search;
    var pid;

    if (url.indexOf("?ParentId=") !== -1) {
    pid = url.split("=")[1];
    }





    $(document).on("submit", "#parent", handleKidFormSubmit);
    
    getKidsList();

    function handleKidFormSubmit(event) {
        event.preventDefault();
        console.log(kid.val());
    console.log(amount.val());
    if(transaction.val()==="Withdraw"){
        console.log("Transaction Withdraw:"+transaction.val())
        var newtotal = {
            kidname:kid.val().trim(),
            total: currentbalance-parseInt(amount.val())
        };
        updatetotal(newtotal);
        currentbalance = currentbalance-parseInt(amount.val());    
    }
    else if(transaction.val()==="Deposit")
    {   console.log("Transaction Deposit:"+transaction.val())
        var newtotal = {
            kidname:kid.val().trim(),
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
        .then(function() {
            console.log("data:"+data);
            window.location.href = "/parent";
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
    }

    
    function createKidRow(Kid) {
        console.log(Kid.kidname);
        var listOption = $("<option>");
        listOption.attr("value", Kid.kidname);
        currentbalance = parseInt(Kid.total);
        console.log(currentbalance);
        listOption.text(Kid.kidname);
        console.log("List Option: >")
        console.log(listOption);
        return listOption;
        
    }



});
