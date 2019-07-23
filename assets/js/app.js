// Unsure what I did when I cleaned up the formating, but now no gifs show on the page, when previously all code worked properly.
// I didn't change any syntax, and not sure how to fix or undo? There's no error message to correct?

$("button").on("click", function() {

    var gifs = $(this).attr("data-gif-type");   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifs + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var gifImage = $("<img>");

                //animated
                gifImage.attr("data-animate", results[i].images.fixed_height.url)
                //setting as source, or beginning image
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                //static
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);

                gifImage.attr("data-state", "animate");
                gifImage.attr("data-state", "still");
                gifImage.attr("class","gifState")

                gifDiv.append(p);
                gifDiv.append(gifImage);
                $("#gifsHere").prepend(gifDiv);
            }};
        $(".gifState").on("click", function(){
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    });
});

$("#gifImage").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
$("#search").on("click", function searchButton() {
    console.log("Search Button has been clicked");
//This on click event should initiate the following:
    // create a button from the user input/search term in the search bar
        //append button to top of page by other buttons
    // search Giphy API for search term
        //return gifs, and follow the same path/restrictions - for loop and rating
        //append to page

});

// function reset () {
    //removes previous gifs. 
// };


//Psuedo Code
// Need buttons that populate g-rated gifs. 
// Need search button that adds buttons and populates g-rated gifs
// Need to reset gif div when button is pressed. 
