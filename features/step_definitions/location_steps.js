const assert = require('assert')
const { Before, Given, When, Then } = require('@cucumber/cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

Given('{word} is at {coordinate}', function (name, coordinate) {
  this.shouty.setLocation(name, coordinate)
})

Given('people are located at', function (personLocations) {
  personLocations.hashes().forEach(personLocation => {
    this.shouty.setLocation(personLocation.name, new Coordinate(personLocation.x, personLocation.y))
  })
})
