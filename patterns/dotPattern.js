function DotPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    ellipse(this.boxMax.x/3,this.boxMax.y/3, 10);
    ellipse(2*(this.boxMax.x/3),this.boxMax.y/3, 10);
    ellipse(2*(this.boxMax.x/3),2*(this.boxMax.y/3), 10);
    ellipse(this.boxMax.x/3,2*(this.boxMax.y/3), 10);
  }

  this.resize = function(newMin, newMax) {
    this.boxMin = newMin;
    this.boxMax = newMax;
  }
}
