// start slingin' some d3 here.


var circle = d3.select("body").append("svg")
    .attr('width', 1400)
    .attr('height', 900)
  // .append('circle')
  //   .attr('cx',500)
  .append('svg:image')
    .attr("class", "enemies")
    .attr("xlink:href", "asteroid.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 100)
    .attr("y", 800);

var newEnemy = {
  x: 1400 * Math.random(),
  y: 700 * Math.random()
};
var moveEnemies = function() {
  d3.selectAll('.enemies')
  .data([newEnemy])
  .transition().duration(1500) 
  .attr('x', function(d) {
    return d.x * Math.random();
  });

  d3.selectAll('.enemies')
  .data([newEnemy])
  .transition().duration(1500)
  .attr('y', function(d) {
    return d.y * Math.random();
  });
  debugger ;
 // setInterval(moveEnemies,1000);
};
setInterval(moveEnemies, 1000);
// debugger;

/*h2 {
    position: absolute;
    left: 100px;
    top: 150px;
}
*/// $(".enemies").css({top: 200, left: 200, position:'absolute'});


//d3.select(".enemies").attr("align","center"); //  thanks & +1 to chaitanya89

/*  .append("circle")
    .attr("cx",25)
    .attr("cy",25)
    .attr("r",15)
*/  
//    .attr('d',path)
  // .attr('xlink:href','WCtrophy/trophy.png')
  // .append('img src= asteroid.png')
  //.append('g')

;



/*


      .attr("xlink:href", "http://www.e-pint.com/epint.jpg")
      .attr("width", 150)
      .attr("height", 200);
.append("svg:image")
  .attr("xlink:href", "img/icons/sun.svg")

HOW TO BUILD A CIRCLE: 
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");





<svg width="100%" height="100%" viewBox="0 0 95 50"
     xmlns="http://www.w3.org/2000/svg">
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="25" r="15" />
    <circle cx="40" cy="25" r="15" />
    <circle cx="55" cy="25" r="15" />
    <circle cx="70" cy="25" r="15" />
  </g>
</svg>

DONE WITH BUILDING CIRCLE
*/


