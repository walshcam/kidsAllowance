// Waiting for the document to load before running
$(document).ready(function() {
    //Input Row Variable
    let inputRow = $("#inputRow");
    //Placeholder for kid input
    let kidID;



//    =======================================================================
//     OVERALL FUNCTIONS
//    =======================================================================
    


    //Display Children (GET)
    // generateChildrenCards();

    //Deposit On-Click (UPDATE)
    $(document).on("click",".depositButton", appendDepositField);

    //Withdrawal On-Click (UPDATE)
    $(document).on("click",".withdrawButton", appendWithdrawalField);

    //Delete On-Click (DELETE)
    $(document).on("click",".deleteButton", handleDeleteButtonPress);



//    =======================================================================
//     GENERATE CHILDREN FUNCTIONS
//    =======================================================================


    //Function to Generate Children Cards
    function generateChildrenCards() {
        $("#inputRow").empty();
        $("#childrenContainer").empty();

        // $.get("/api/kid", function(data){
        //     let childrenToAdd = [];
        //     for (let i = 0; i < data.length; i++) {
        //         rowsToAdd.push(createChildren(data[i]));
        //     } 
        // })
    };    

    //Function to Create Children Divs
    function createChildren(childData) {
        //Create Parent Div
        let parentDiv = $("<div>");
        parentDiv.addClass("col s12 m6 l4");
        
        //Create Card
        let cardDiv = $("<div>");
        cardDiv.addClass("card teal darken-1");

        //Create Content In Card
        let cardContentDiv = $("<div>");
        cardContentDiv.addClass("card-content white-text")

        //Create Card Title
        let titleSpan = $("<span>");
        titleSpan.addClass("card-title");
        titleSpan.text(childData[i].name);
        
        //Create Card Paragraph
        let currentBalanceParagraph = $("<p>");
        currentBalanceParagraph.text("Current Balance Is: " + childData[i].total);

        //Create Card Actions
        let cardActionDiv = $("<div>");
        cardActionDiv.addClass("card-action")

        //Create Actions
        let depositDiv = $("<a>");
        depositDiv.attr("value", data[i].id);
        depositDiv.addClass("depositButton");

        let withdrawalDiv = $("<a>");
        withdrawalDiv.attr("value", data[i].id);
        withdrawalDiv.addClass("withdrawButton");

        let deleteDiv = $("<a>");
        deleteDiv.attr("value", data[i].id);
        deleteDiv.addClass("deleteButton");

        //Append The Elements
        cardActionDiv.append(depositDiv);
        cardActionDiv.append(withdrawalDiv);
        cardActionDiv.append(deleteDiv);

        cardContentDiv.append(titleSpan);
        cardContentDiv.append(currentBalanceParagraph);

        cardDiv.append(cardContentDiv);
        cardDiv.append(cardActionDiv);

        parentDiv.append(cardDiv);

        //Append Card To Page
        $("#childrenContainer").append(parentDiv)
    }



//    =======================================================================
//     DEPOSIT FUNCTIONS
//    =======================================================================



    //Deposit Function
    function appendDepositField () {
        inputRow.empty();
        kidID = $(this).attr("value");

        //overall div
        let inputDiv = $("<div>").addClass("input-field col s12");
        console.log(kidID);

        //contents for overall div
        let input = $("<input>").attr("type","number").attr("id", "depositAmount").addClass("validate");
        let label = $("<label>").attr("for","depositAmount").text("Deposit Amount");
        
        inputDiv.append(input);
        inputDiv.append(label);
        inputRow.append(inputDiv);

        //input buttons
        let buttonDiv = $("<div>")

        //buttons for button div
        let depositButton = $("<button>").attr("id","confirmDepositButton").addClass("waves-effect waves-green btn-flat").attr("min","0").text("Deposit");
        let cancelButton = $("<button>").addClass("cancelButton waves-effect waves-green btn-flat").text("Cancel");

        buttonDiv.append(depositButton);
        buttonDiv.append(cancelButton);
        inputRow.append(buttonDiv);
    }

    //Send Deposit to Database
    $(document).on("click","#confirmDepositButton", function() {
        console.log(kidID);

        //get data about kid
        $.get("/api/kid/" + kidID, function(data) {
            console.log(data);

        //alter data to update kid    
        }).then(function(data) {
            let inputValue = $("#depositAmount").val();
            let newTotal = parseInt(data.total) + parseInt(inputValue);
            let updateKid = {
                kidname: data.kidname,
                username: data.username,
                kidpassword: data.kidpassword,
                total: newTotal,
                wish: data.wish
            }
            //PUT updated information into database
            $.ajax({
                method: "PUT",
                url: "/api/kid",
                data: updateKid

            //Regenerate cards on page
            }).then(function() {
                generateChildrenCards();
            })
        })
    });



//    =======================================================================
//     WITHDRAW FUNCTIONS
//    =======================================================================



    //Withdrawal Function
    function appendWithdrawalField () {
        inputRow.empty();
        kidID = $(this).attr("value");

        //overall div
        let inputDiv = $("<div>").addClass("input-field col s12");
        console.log($(this).attr("value"));
        //contents for overall div
        let input = $("<input>").attr("type","number").attr("id", "withdrawAmount").addClass("validate");
        let label = $("<label>").attr("for","withdrawAmount").text("Withdrawal Amount");
        
        inputDiv.append(input);
        inputDiv.append(label);
        inputRow.append(inputDiv);

        //input buttons
        let buttonDiv = $("<div>")

        //buttons for button div
        let withdrawalButton = $("<button>").attr("id","confirmWithdrawalButton").addClass("waves-effect waves-green btn-flat").attr("min","0").text("Deposit");
        let cancelButton = $("<button>").addClass("cancelButton waves-effect waves-green btn-flat").text("Cancel");

        buttonDiv.append(withdrawalButton);
        buttonDiv.append(cancelButton);
        inputRow.append(buttonDiv);
    }

    //Send Withdrawal to Database
    $(document).on("click","#confirmWithdrawalButton", function() {
        console.log(kidID);

        //get data about kid
        $.get("/api/kid/" + kidID, function(data) {
            console.log(data);

        //alter data to update kid    
        }).then(function(data) {
            let inputValue = $("#withdrawAmount").val();
            let newTotal = parseInt(data.total) - parseInt(inputValue);
            let updateKid = {
                kidname: data.kidname,
                username: data.username,
                kidpassword: data.kidpassword,
                total: newTotal,
                wish: data.wish
            }
            //PUT updated information into database
            $.ajax({
                method: "PUT",
                url: "/api/kid",
                data: updateKid

            //Regenerate cards on page
            }).then(function() {
                generateChildrenCards();
            })
        })
    });



//    =======================================================================
//     CANCEL DEPOSIT / WITHDRAW FUNCTION
//    =======================================================================



    //Cancel Button Clears Out Field
    $(document).on("click",".cancelButton", function() {
        inputRow.empty();
    })



//    =======================================================================
//     DELETE FUNCTION
//    =======================================================================

    //Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        kidID = $(this).attr("value");
        console.log(id);
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/kid/" + id
    //     })
    //         .then(
    //             generateChildrenCards()
    //         );
    }

});