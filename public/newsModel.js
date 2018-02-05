const NewsModel = function(url){
  this.url = url;
  this.data = [];
  this.onUpdate = null;

}

NewsModel.prototype.showData = function(){
  const request = new XMLHttpRequest();
  request.open("GET", this.url);

  request.addEventListener('load', function(){
    if (request.status != 200) return;
    const jsonString = request.responseText;
    this.data = JSON.parse(jsonString);
    this.onUpdate(this.data.articles);
  }.bind(this));



  request.send();
};
