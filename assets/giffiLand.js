$(document).ready(function(){
  // create choices variables for search, limit, rating
  console.log("start javascript");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  var history = [];
  $("#submit").on("click", function(){
    var search = $("#searchWho").val();
    var limit = $("#limit").val();
    var rating = $("#rating").val();
    history.push(search);
    console.log(search);
    var API = "MsSEC1MwfeJrOf5CUsZHUPKmeNpvxv3n";
    queryURL+=search+"&rating="+rating+"&api_key="+API;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(gifArray){
      console.log(gifArray);
      for (var i = 0; i < limit; i++) {
        var cardRow = $("<div class=\"row\">");
        var cardCol = $("<div class=\"col s12 m6\">");
        var cardCard = $("<div class=\"card\">");
        var cardImg = $("<div class=\"card-image\">");
        var cardContent = $("<div class=\"card-content\">");
        var p = $("<p>");
        p.text("Rating: "+gifArray.data[i].rating) ;
        var Image = $("<img>");
        Image.attr("src",gifArray.data[i].images.fixed_height.url);
        var cardTitle = $("<span class=\"card-title\">");
        cardTitle.text(gifArray.data[i].title);
        var cardDownload = $(`<a class="btn-floating halfway-fab waves-effect waves-light pink lighten-1" href="`+gifArray.data[i].embed_url+`" download="`+gifArray.data[i].slug+`"><i class="material-icons">arrow_downward</i></a>`);
        
        cardContent.append(p);
        cardImg.append(Image);
        cardImg.append(cardDownload);
        cardCard.append(cardImg);
        cardCard.append(cardTitle);
        cardCard.append(cardContent);
        cardCol.append(cardCard);
        cardRow.append(cardCol);
        $(".giffs").prepend(cardRow);
      }
    
    });
    $("#history").empty();
    history.forEach(element => {
      $("#history").prepend("<tr><td>"+element+"</td></tr>");  
    });
    event.preventDefault();
  });
      // ============= put step 3 in between these dashes ======================

      // ==================================
  // list top 5 gifs from multiple apis with a download link
});

