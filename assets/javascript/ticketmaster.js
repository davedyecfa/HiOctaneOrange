    // var startDateTime=2017-03-17;
    // var endDateTime=2017-03-17;
    // var keyword = "atlanta";

    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=atlanta&endDateTime=2017-03-17T17:00:00Z&apikey=3d6mOOKQJKcLtzdmYGpP5rdw45kOwVKG",
      async:true,
      dataType: "json",

      success: function(json) {
        //console.log(json);
        var results = json._embedded.events;
        console.log(results);

        for (var i = 0; i < results.length; i++) {

          var info = $("<div>");

          var name = $("<h3>").text(results[i].name);

          //var price = $("<p>").text(results[i].priceRanges[i].min);

          var dates = $("<p>").text(results[i].dates.start.localDate);

          info.append(name, price, dates);

          $("#name").prepend(info);
        }
      },
    });

// &keyword=atlanta
// &startDateTime=2017-03-17T17:00:00Z
// &endDateTime=2017-03-17T17:00:00Z
// only use start date or end date it does not work
// with both and i think start date will be just fine