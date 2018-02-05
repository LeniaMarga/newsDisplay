const GridView = function(gridViewDiv, newsModel) {
  this.gridViewDiv = gridViewDiv;
  this.newsModel = newsModel;
  this.newsModel.onUpdate = this.render;

};

GridView.prototype.render = function(articles){

  // do DOM
  const newsUL = document.querySelector("#news");

  articles.forEach(function(newsItem){
    console.log(newsItem);
    const liTitle = document.createElement("li");
    liTitle.innerText = newsItem.title;
    newsUL.appendChild(liTitle);
  });

};
