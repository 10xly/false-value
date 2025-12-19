var trueValue = require("true-value")

module.exports = function falseValue() {
  return !trueValue()
}