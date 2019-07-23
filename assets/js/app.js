

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

            var gifDiv = $("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images['480w_still'].url);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $("#gifsHere").prepend(gifDiv);

            

          }



       });
});

function newButtons () {

};

function search () {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
      
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