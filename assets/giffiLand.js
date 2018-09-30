$(document).ready(function(){
  // create choices variables for search, limit, rating
  console.log("start javascript");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var limit = 5;
  // var search = $("#search").val();
  // var rating = $("#rating").val();
  $("")
  var search = $("#searchWho").val();
  console.log(search);
  var rating = "g";
  var API = "MsSEC1MwfeJrOf5CUsZHUPKmeNpvxv3n";
  queryURL+=search+"&rating="+rating+"&api_key="+API;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(gifArray){
    console.log(gifArray);
    for (var i = 0; i < limit; i++) {

      var animalDiv = $("<div>");
      var p = $("<p>");
      p.text(gifArray.data[i].rating) ;
      var animalImage = $("<img>");
      animalImage.attr("src",gifArray.data[i].images.fixed_height.url);
      animalDiv.append(p);
      animalDiv.append(animalImage);
      $(".giffs").prepend(animalDiv);
      // ============= put step 3 in between these dashes ======================

      // ==================================
    }
  
  });
  // list top 5 gifs from multiple apis with a download link
});