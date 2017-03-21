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
        url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=3d6mOOKQJKcLtzdmYGpP5rdw45kOwVKG&classificationName=music&keyword=" + city + "&size=20&page="+page,
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
      if (events[i]._embedded.attractions !== undefined){
        item.children('.list-group-item-heading').text(events[i]._embedded.attractions[0].name);
      }
      item.children('.list-group-item-text').text(events[i].dates.start.localDate);
      if (events[i].priceRanges !== undefined){
        $(".price").text(events[i].priceRanges[0].min);
      }
      try {
        item.children(".venue").text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
      } catch (err) {
        console.log(err);
      }
      item.show();
      item.off("click");
      item.click(events[i], function(eventObject) {
        console.log(eventObject.data);
        try {
          getAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
          console.log(err);
        }
      });
      item=item.next();
    }
  }

  $("#prev").click(function() {
    getEvents(--page);
  });

  $("#next").click(function() {
    getEvents(++page);
  });

  getEvents(page);
});