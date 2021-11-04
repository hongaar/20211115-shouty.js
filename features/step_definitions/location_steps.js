const assert = require('assert')
const { Before, Given, When, Then } = require('@cucumber/cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

let shouty

Before(function() {
  shouty = new Shouty()
})

Given('{word} is at {int}, {int}', function (name, x, y) {
  shouty.setLocation(name, new Coordinate(x, y))
})

Given('people are located at', function (personLocations) {
  personLocations.hashes().forEach(personLocation => {
    shouty.setLocation(personLocation.name, new Coordinate(personLocation.x, personLocation.y))
  })
})
