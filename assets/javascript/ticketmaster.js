$(document).ready(function(){
  $("#events-panel").hide();

  var page = 0;

  function getEvents(page) {

    if (page < 0) {
      page = 0;
      return;
    }
    if (page > 0) {
      if (page > getEvents.json.page.totalPages-1) {
        page=0;
      }
    }

    $("#search-button").on("click", function() {
      $("#events-panel").show();
      var city = $("#city").val();
      console.log("city" + city);

      $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=3d6mOOKQJKcLtzdmYGpP5rdw45kOwVKG&classificationName=music&keyword=" + city + "&size=10&page="+page,
        async:true,
        dataType: "json",
        success: function(json) {
          console.log(json);
          getEvents.json = json;
          showEvents(json);
        },
        error: function(xhr, status, err) {
          console.log(err);
        }
      });
    });
  }

  function showEvents(json) {
    var items = $("#events .list-group-item");
    items.hide();
    var events = json._embedded.events;
    var item = items.first();
    for (var i=0;i<events.length;i++) {

      var info = $("<div>" + "<hr>");

      if (events[i]._embedded.attractions !== undefined){
        var name = $("<h4>").text(events[i]._embedded.attractions[0].name);
      }

      var dates = $("<p>").text(events[i].dates.start.localDate);
      
      if (events[i].priceRanges !== undefined){
        var price = $("<p>").text("price: " + events[i].priceRanges[0].max);
      }

      var venue = $("<p>").text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);

      var SpotifyImage = $("<img class = 'spotify'>");
           SpotifyImage.attr("src", "assets/images/spotify.png");
            SpotifyImage.attr("data-artist", events[i]._embedded.attractions[0].name);

      var YouTubeImage = $("<img class ='youTube'>");
           YouTubeImage.attr("src", "assets/images/youtube.png");
           YouTubeImage.attr("data-artist", events[i]._embedded.attractions[0].name);
              info.append(name, dates, price, venue, SpotifyImage,YouTubeImage);





                    $("#name").append(info);

                    item.show();
                    item.off("click");
                    item=item.next();
                  }
                }
                getEvents(page);
              });
