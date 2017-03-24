 function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        var name = profile.getName();
        console.log('Full Name: ' + name);
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        var image = profile.getImageUrl();
        console.log("Image URL: " + image);
        console.log("Email: " + profile.getEmail());

        $(".signedinInfo").html("Signed in as: " + name);
        $(".signedInImage").attr("src" , image);
        $(".signedin").css("display", "none");


        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

      };

        function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $(".signedinInfo").html("");
        $(".signedInImage").attr("src" , "");
        $(".signedout").css("display", "none");


  
    });
  }