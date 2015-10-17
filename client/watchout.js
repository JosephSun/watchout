

var initialize = function () {
  d3.select("body").append("svg")
      .attr('width', 1400)
      .attr('height', 900)
      .attr('class', "svgTag")
  for (var j = 0; j < 30; j++) {
    createNode();
  }  
}

var createNode = function(){
    d3.select("svg").append('svg:image')
        .attr("class", "enemies")
        .attr("xlink:href", "asteroid.png")
        .attr("width", 50)
        .attr("height", 50)
        // .attr("position", 'absolute')
        .attr("x", 900 * Math.random())
        .attr("y", 800 * Math.random());
  }
  
initialize();
var newEnemy = function (x, y){
  var enemy = {
    x: x,
    y: y    
  }
  return enemy
};
var enemyArray = [];

for (var i = 0; i < 30; i++) {
  enemyArray.push(newEnemy(1400 * Math.random(), 700 * Math.random()) );
}



var moveEnemies = function() {
  d3.selectAll('.enemies')
  .data(enemyArray)
  .transition().duration(1500) 
  .attr('x', function(d) {
    if (d.x < 100) {
      d.x =  500;
    }
    return d.x * Math.random();
  })
  .attr('y', function(d) {
    if (d.y < 100) {
      d.y = 400
    }
    return d.y * Math.random();
  })
};
setInterval(moveEnemies, 1000);

