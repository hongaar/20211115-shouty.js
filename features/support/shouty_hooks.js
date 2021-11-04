const assert = require('assert')
const { Before, After } = require('@cucumber/cucumber')

Before(function () {
  console.log("this is before")
})

After(function () {
  console.log("this is after")
});

Before(function () {
  console.log("this is other before")
})

After(function () {
  console.log("this is other after")
});

Before({ tags: "@SpecialTest"}, function () {
  console.log("this is special")
})