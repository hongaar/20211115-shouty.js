class Coordinate {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceFrom(other) {
     return Math.hypot(this.x - other.x, this.y - other.y)
  }
}

module.exports = Coordinate
