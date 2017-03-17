$(document).ready(function(){

console.log("linked");

$("#search-button").on("click", function() {
    var city = $("#city").val();
    console.log("city" + city);
    var state= $("#state").val();
    console.log("state" + state);
    var startDate= $("#start-date").val();
    console.log("start-date" + startDate);
    var endDate= $("#end-date").val();
    console.log("end-date" + endDate);
    var keyword= $("#keyword").val();
    console.log("keyword" + keyword);
    $(".side-nav").css("display", "")

 
});
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens\
    }
    );
});
