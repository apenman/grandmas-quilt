function XPattern(boxMin, boxMax) {
  this.boxMin = boxMin;
  this.boxMax = boxMax;
  this.color = color(random(255), random(255), random(255));

  this.display = function() {
    stroke(this.color);
    line(this.boxMin.x,this.boxMax.y, this.boxMax.x, this.boxMin.y);
    line(this.boxMin.x, this.boxMin.y, this.boxMax.x, this.boxMax.y)
  }
}
