function XPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;

  this.display = function() {
    stroke(random(255), random(255), random(255));
    line(this.boxMin.x,this.boxMax.y, this.boxMax.x, this.boxMin.y);
    line(this.boxMin.x, this.boxMin.y, this.boxMax.x, this.boxMax.y)
  }
}
