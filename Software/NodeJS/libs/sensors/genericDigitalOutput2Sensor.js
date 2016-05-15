// Thanks to Craig Watkins for the contribution
var DigitalSensor = require('./base/digitalSensor')
var commands      = require('../commands')

function GenericDigitalOutput2Sensor(pin) {
  DigitalSensor.apply(this, Array.prototype.slice.call(arguments))
}
GenericDigitalOutput2Sensor.prototype = new DigitalSensor()

GenericDigitalOutput2Sensor.prototype.on = function() {
  this.board.pinMode(this.board.OUTPUT)
  var write = this.board.writeBytes(commands.dWrite.concat([this.pin, 1, commands.unused]))
  if (write) {
    return true
  } else {
    return false
  }
}

GenericDigitalOutput2Sensor.prototype.off = function() {
  this.board.pinMode(this.board.OUTPUT)
  var write = this.board.writeBytes(commands.dWrite.concat([this.pin, 0, commands.unused]))
  if (write) {
      return true
  } else {
      return false
  }
}

module.exports = GenericDigitalOutput2Sensor

