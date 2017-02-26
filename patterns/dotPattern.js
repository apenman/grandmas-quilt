function DotPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    ellipse(boxMax.x/3,boxMax.y/3, 10);
    ellipse(2*(boxMax.x/3),boxMax.y/3, 10);
    ellipse(2*(boxMax.x/3),2*(boxMax.y/3), 10);
    ellipse(boxMax.x/3,2*(boxMax.y/3), 10);
  }

  this.resize = function(newMin, newMax) {
    this.boxMin = newMin;
    this.boxMax = newMax;
  }
}
