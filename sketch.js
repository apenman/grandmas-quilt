/* TODO:
 * 1. Currently hardcoded to 10x10 grid...change that
 * 2. Pull patterns from external js files
*/

var cells = [];
var alternate = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // set up quilt grid
  setupGrid();
  // load patterns from external files?
}

function draw() {
  noLoop();
  background(255);
  makeGrid();
  // cells[0][0].display();
  // cells[0][1].display();
  // cells[1][0].display();
  displayPatterns();
}

function setupGrid() {
  for(var i = 0; i < 10; i++) {
    cells[i] = [];
    for(var j = 0; j < 10; j++) {
       cells[i][j] = new Cell(createVector(0, 0), createVector((windowWidth/10), (windowHeight/10)));
    }
  }
}

function makeGrid() {
  for(var i = 0; i < 10; i++) {
    line(0, i*(windowHeight/10), windowWidth, i*(windowHeight/10));
    line(i*(windowWidth/10), 0, i*(windowWidth/10), windowHeight);
  }
}

function displayPatterns() {
  for(var i = 0; i < cells.length; i++) {
    // push on x translation
    // pop off after each loop because we multiply offset by index
    push();
    translate(i*(windowWidth/10),0);
    for(var j = 0; j < cells[i].length; j++) {
      // push on y translation
      // pop off after each loop because we multiply offset by index
      push();
      translate(0,j*(windowHeight/10));
      // Call the display function of the current cell
      cells[i][j].display();
      pop();
    }
    pop();
  }
}

function XPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    stroke(random(255), random(255), random(255));
    line(this.boxMin.x,this.boxMax.y, this.boxMax.x, this.boxMin.y);
    line(this.boxMin.x, this.boxMin.y, this.boxMax.x, this.boxMax.y)
  }
}

function DotPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    ellipse(boxMax.x/3,boxMax.y/3, 10);
    ellipse(2*(boxMax.x/3),boxMax.y/3, 10);
    ellipse(2*(boxMax.x/3),2*(boxMax.y/3), 10);
    ellipse(boxMax.x/3,2*(boxMax.y/3), 10);
  }
}

function Cell(cellMin, cellMax) {
  if(alternate)
    this.pattern = new XPattern(cellMin, cellMax);
  else
    this.pattern = new DotPattern(cellMin, cellMax);
  alternate = !alternate;

  this.display = function() {
    this.pattern.display();
  }
}
