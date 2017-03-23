
$(document).on("click",".youTube", function displayResults(event) {
    var artist = $(this).attr("data-artist");
    console.log(artist);
	var band = artist + " music vevo ";
	$("#youTube-Here").empty();


console.log(band);
	event.preventDefault();
	var apiKey = "AIzaSyDR-djEPImqtWC8bsbIAjvBT2a_0BuC0AY";
	var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ band+ "&maxResults=1&type=video&key=" + apiKey;

    $.ajax({
    	url:queryURL,
    	method: "GET"
 
    })

    .done(function(response){
    	var results = response.items;
    	console.log(results);
    	for (var i =0; i< results.length; i++){
    		var videoID = results[i].id.videoId;
    		console.log(videoID);
    		var videoDiv = $("<div class = 'video'>");
    		var VideoATag = $("<iframe>");
    		VideoATag.attr("src","https://www.youtube.com/embed/" + videoID);
    		videoDiv.prepend(VideoATag);
    		$("#youTube-Here").prepend(videoDiv);
    	}


    });
});

