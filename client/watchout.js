/*Initialize will add a svg tag to the body element. It will set that svg tage to have
a width of 1400, a height of 900 and a class name of svgTag. Initialize will also
call the createNode function 30 times.
*/
var initialize = function () {
  d3.select("body").append("svg")
      .attr('width', 1400)
      .attr('height', 900)
      .attr('class', "svgTag")
  for (var j = 0; j < 30; j++) {
    createNode();
  }  
}
/*
The function createNode appends a svg:image tag to all svg tags (there is only one
svg tag as of now.). The function also sets the class of that svg:image tag to enemies, 
the xlink:href to an asteroid picture, the width to 50, the height to 50, the x and y value of the object
associated with the tag to random
*/
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
  
initialize();//calls initialize to get all thirty asteroids on the browser.




/*
the function newEnemy creates a enemy object
*/
var newEnemy = function (x, y){
  var enemy = {
    x: x,
    y: y    
  }
  return enemy
};


/*
creates a global array that holds all of the enemies. 
*/
var enemyArray = [];
/*
this for loop pushes all of the enemies into the enemyArray
*/
for (var i = 0; i < 30; i++) {
  enemyArray.push(newEnemy(1400 * Math.random(), 700 * Math.random()) );
}


/*
The function moveEnemies randomly changes each and every asteroids position
*/
var moveEnemies = function() {
  d3.selectAll('.enemies')  
  .data(enemyArray)
  .transition().duration(1500) 
  .attr('x', function(d) {
    if (d.x < 100) {// if the asteroid is located close to the left of the screen
      d.x =  500;// move them closer to the right.
    }
    return d.x * Math.random();
  })
  .attr('y', function(d) {
    if (d.y < 100) { // if the asteroid is located close to the top of the screen.
      d.y = 400// move them closer to the bottom
    }
    return d.y * Math.random();
  })
};
/*
line 37-43 append a circle tag to the main svg element.
*/
d3.select('.svgTag').append('circle')
  // .attr('height', 25)
  // .attr('width', 25)
  .attr("class", 'pow')
  .attr('cx', '25')
  .attr('cy', '25')
  .attr('r', '15');

/*
The mover function changes the positioning of cx and cy to the event (draging)
position. (?)
*/
function mover () {
  d3.select('circle')
    .attr("cx", d3.event.x )
    .attr("cy", d3.event.y) ;
}
/*
Not too sure how drag variable works. d3.beahvior.drag() creates an object???
.on('drag', mover) listens for when someone drags the circle and then calls mover 
when they do.
*/
var drag = d3.behavior.drag()
    .on("drag", mover);

/*
calls drag on the circle tag (object? d3 node? )
I sincerly dislike using libraries without understanding whats under the hood. 
*/
d3.select('body').select('svg').select("circle")
      .call(drag);
/*
call moveEnemies every second.
*/
setInterval(moveEnemies, 1000);

