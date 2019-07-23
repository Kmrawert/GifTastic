

$("button").on("click", function() {

    var gifs = $(this).attr("data-gif-type");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gifs + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
console.log(gifs);

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

          }
     }
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

//gifImage.attr("src", results[i].images.fixed_height.url);

$("#gifImage").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

function newButtons () {

};

function search () {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
};
$("#search").on("click", function searchButton() {
console.log("anything");

});

function reset () {

};

function toggleAnimate () {

};

//Psuedo Code
// Need buttons that populate g-rated gifs. 
// Need search button that adds buttons and populates g-rated gifs
// Need to reset gif div when button is pressed. 
// Need to toggle still vs. animate when gif is clicked. 