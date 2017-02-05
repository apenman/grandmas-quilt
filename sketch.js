/* TODO:
 * 1. MAYBE USE WEBGL SO I CAN THROW ON TRANSLATES TO SET PATTERN FUNCTIONS IN RIGHT PLACE
*/

var cells = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  // set up quilt grid
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

function makeGrid() {
  for(var i = 0; i < 10; i++) {
    line(0, i*(windowHeight/10), windowWidth, i*(windowHeight/10));
    line(i*(windowWidth/10), 0, i*(windowWidth/10), windowHeight);
    cells[i] = [];
    for(var j = 0; j < 10; j++) {
      cells[i][j] = new Cell(createVector(i*(windowWidth/10), j*(windowHeight/10)), createVector((i+1)*(windowWidth/10), (j+1)*(windowHeight/10)));
    }
  }
}

function displayPatterns() {
  for(var i = 0; i < cells.length; i++) {
    console.log("AT I " + i);
    for(var j = 0; j < cells[i].length; j++) {
      console.log("AT J " + j);
      cells[i][j].display();
    }
  }
}

function XPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    console.log("MIN / MAX", boxMin, boxMax);
    stroke(random(255), random(255), random(255));
    for(var i = 1; i < 4; i++) {
      console.log("DRAWING LINE " + i + " at " + i*((this.boxMax.y-this.boxMin.y)/3));
      line(this.boxMin.x, i*((this.boxMax.y-this.boxMin.y)/3)+this.boxMin.y, this.boxMax.x, i*((this.boxMax.y-this.boxMin.y)/3)+this.boxMin.y);
      line(i*((this.boxMax.x-this.boxMin.x)/3)+this.boxMin.x, this.boxMin.y, i*((this.boxMax.x-this.boxMin.x)/3)+this.boxMin.x, this.boxMax.y);
    }
  }
}

function DotPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    ellipse(boxMax.x/2,boxMax.y/2, 10);
  }
}

function Cell(cellMin, cellMax) {
  // this.cellMin = cellMin;
  // this.cellMax = cellMax;
  // this.pattern = new XPattern(cellMin, cellMax);
  this.pattern = new DotPattern(cellMin, cellMax);
  this.display = function() {
    this.pattern.display();
  }
}
