$(".fb-share-button").on("click", function (){
    FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(response){});
});

