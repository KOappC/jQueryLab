$(document).ready(function () {

var saveState = false;

$(".circles").on("click", function() {
    $(".newReservation").css("display", "flex");
    if (saveState === true) {
        alert("I'm sorry, this table is reserved");
    }
});

$(".Xend").on("click", function() {
   $(".newReservation").css("display", "none");
});

$("#save").on("click", function() {
    
})

}); // Closing of document

/*

    Objectives:

    1. Displays the restaurant’s floor plan.
    2. Visually notifies the user that seats are available or not.
    3. Displays a form when an open table is clicked on.
    4. Hides the form when the user submits the form.

    Build specs:

    1. Each table must have either an “available” or a “reserved” class.
    2. The form must remain hidden until a user clicks on a table with the class “available”.
    //DONE  3. There should be a way for the user to exit the form without submitting.
    4. When the user submits the form, the form is hidden and the class of the selected seat is changed from “available” to “reserved”.
    5. Change the cursor property to “not-allowed” if the table has a “reserved” class.
    6. Changes the appearance of an open table when the mouse moves over the table, as well as changes the cursor.

*/
