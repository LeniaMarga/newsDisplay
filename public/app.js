var app = function(){


  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' + "apikey=ecaf5a603ef14ada980e8b7bf78b9e5a";
  // var url1 = "https://restcountries.eu/"

  //setup model
  const newsModel = new NewsModel(url);
  var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  // general view
  const gridViewDiv = document.querySelector("#gridView");
  const gridView = new GridView(gridViewDiv, newsModel);

  newsModel.showData();

}

window.addEventListener('DOMContentLoaded', app);
