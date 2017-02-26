/* TODO:
 * 1. Make sure width and height vars are inline EVERYWHERE
*/
var cells = [];
var alternate = false;
var gridSize = 4;

function setup() {
  createCanvas(windowWidth,windowHeight);
  setupGrid();
}

function draw() {
  // noLoop(); // For debugging
  background(255);
  makeGrid();
  displayPatterns();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resizePatterns();
}


// Update all patterns to have new bounds
function resizePatterns() {
  for(var i = 0; i < gridSize; i++) {
    for(var j = 0; j < gridSize; j++) {
      if(cells[i][j].resize)
        cells[i][j].resize(createVector(0, 0), createVector((windowWidth/gridSize), (windowHeight/gridSize)));
    }
  }
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

function Cell(cellMin, cellMax) {
  if(alternate)
    this.pattern = new XPattern(cellMin, cellMax);
  else
    this.pattern = new DotPattern(cellMin, cellMax);
  alternate = !alternate;

  this.display = function() {
    this.pattern.display();
  }

  this.resize = function(newMin, newMax) {
    this.pattern.resize(newMin, newMax);
  }
}
