$(document).ready(function () {

var circles;
var userName;
var userNumber;
var userParty;
var name;
var number;
var party;
var container;

$(".circles").on("click", function(event) {
    $(".newReservation").css("display", "flex");
    circles = event;
    container = $(this);
    //console.log(container["0"].innerText);
    if ($(this).hasClass("taken")) {
        alert("I'm sorry, this table is reserved");
        $(".newReservation").css("display", "none");
    }
});

$(".circles").on("mouseenter", function(event) {
    name = $(this).attr("name");
    number = $(this).attr("number");
    party = $(this).attr("party");
    if ($(this).hasClass("taken")) {
        $(this).css("cursor", "not-allowed");
    }

}).on("mouseleave", function(event) {

});

$(".Xend").on("click", function() {
   $(".newReservation").css("display", "none");
});

$("#save").on("click", function(event) {
    userName = $("#userName").val();
    userNumber = $("#userNumber").val();
    userParty = $("#userParty").val();
    circles.target.setAttribute("name", userName);
    circles.target.setAttribute("number", userNumber);
    circles.target.setAttribute("party", userParty);
    container.addClass("taken");
    container.css("background-color", "#ADAAAA").css("color", "#CCCCCC");
    $(".newReservation").css("display", "none");
});

}); // Closing of document

/*

    Objectives:

    //DONE  1. Displays the restaurant’s floor plan.
    //DONE  2. Visually notifies the user that seats are available or not.
    //DONE  3. Displays a form when an open table is clicked on.
    //DONE  4. Hides the form when the user submits the form.

    Build specs:

    //DONE  1. Each table must have either an “available” or a “reserved” class.
    //DONE  2. The form must remain hidden until a user clicks on a table with the class “available”.
    //DONE  3. There should be a way for the user to exit the form without submitting.
    //DONE  4. When the user submits the form, the form is hidden and the class of the selected seat is changed from “available” to “reserved”.
    //DONE  5. Change the cursor property to “not-allowed” if the table has a “reserved” class.
    //DONE  6. Changes the appearance of an open table when the mouse moves over the table, as well as changes the cursor.

*/
