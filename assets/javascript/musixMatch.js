$("#search-button").on("click",function displayResults(event) {
	var band = $("#keyword").val().trim();
	$("#keyword").empty();

console.log("the band" + band);
	event.preventDefault();
	var search = $(this).attr("data-keyword");
	var apiKey = "a1ee39e4164009e54314b8a2ff9d7fd6";
	var queryURL = "matcher.track.get?q_track=a%20te&q_artist=" + band + "&f_has_lyrics=1";

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
})