

$("button").on("click", function() {

    var gifs = $(this).attr("data-gif-type");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifs + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $("#gifsHere").prepend(gifDiv);

            

          }



       });
});

function newButtons () {

};

function search () {

};

function reset () {

};

function toggleAnimate () {

};

//Psuedo Code
// Need buttons that populate g-rated gifs. 
// Need search button that adds buttons and populates g-rated gifs
// Need to reset gif div when button is pressed. 
// Need to toggle still vs. animate when gif is clicked. 