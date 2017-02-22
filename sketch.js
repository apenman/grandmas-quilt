/* TODO:
 * 1. Pull patterns from external js files
*/

var cells = [];
var alternate = false;
var gridSize = 4;

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
  for(var i = 0; i < gridSize; i++) {
    cells[i] = [];
    for(var j = 0; j < gridSize; j++) {
       cells[i][j] = new Cell(createVector(0, 0), createVector((windowWidth/gridSize), (windowHeight/gridSize)));
    }
  }
}

function makeGrid() {
  // This won't work if grid is not square
  for(var i = 0; i < gridSize; i++) {
    line(0, i*(windowHeight/gridSize), windowWidth, i*(windowHeight/gridSize));
    line(i*(windowWidth/gridSize), 0, i*(windowWidth/gridSize), windowHeight);
  }
}

function displayPatterns() {
  for(var i = 0; i < gridSize; i++) {
    // push on x translation
    // pop off after each loop because we multiply offset by index
    push();
    translate(i*(windowWidth/gridSize),0);
    for(var j = 0; j < gridSize; j++) {
      // push on y translation
      // pop off after each loop because we multiply offset by index
      push();
      translate(0,j*(windowHeight/gridSize));
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
