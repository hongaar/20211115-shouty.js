class Coordinate {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceFrom(other) {
     // TODO: actually calculate distance between the coordinates.
     return Math.abs(this.x - other.x)
  }
}

module.exports = Coordinate
