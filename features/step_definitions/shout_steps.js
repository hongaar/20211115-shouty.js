const assert = require('assert')
const { Before, Given, When, Then } = require('@cucumber/cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'
let shouty

Before(function() {
  shouty = new Shouty()
})

Given('{word} is at {int}, {int}', function (name, x, y) {
  shouty.setLocation(name, new Coordinate(x, y))
})

When('Sean shouts', function () {
  shouty.shout('Sean', ARBITARY_MESSAGE)
})

When('Oscar shouts', function () {
  shouty.shout('Oscar', ARBITARY_MESSAGE)
})

Then('Lucy should not hear Oscar', function () {
  assert(!shouty.getShoutsHeardBy("Lucy").has("Oscar"))
  // alternatively assert(!("Oscar" in shouty.getShoutsHeardBy("Lucy")))
})

Then('Lucy should hear Sean', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 1)
})

Then('Lucy should hear nothing', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 0)
})
