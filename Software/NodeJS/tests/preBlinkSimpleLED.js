var GrovePi = require('../libs').GrovePi;
var Commands = GrovePi.commands;
var Board = GrovePi.board;

//require sleep:
var nukkuu = require('../libs/node_modules/sleep');

// Declare our new simple-sensor-controller class:
var GenericDigitalOutput2Sensor = GrovePi.sensors.GenericDigitalOutput2;

var board;

// For now, instantiate the sensor-controller outside the start()-fn,
// so that it is easier to switch off the LED from anywhere in this code:
var genericDigitalOutput2Sensor = new GenericDigitalOutput2Sensor(4);

function start() {
  console.log('starting');

// we need a GrovePi Board instance:
  board = new Board({
    debug: true,
    onError: function(err) {
      console.log('TEST ERROR');
      console.log(err);
    },

    onInit: function(res) {
      if (res) {

        var switchval = 0;
        var interval = setInterval(function () {
          //switchval = 0 ? switchval = 1 : switchval = 0;
          if (switchval === 0) {
            var switchedOn = genericDigitalOutput2Sensor.on();
            console.log('switchedOn: ' + switchedOn);
            switchval = 1;
          } else {
            var switchedOff = genericDigitalOutput2Sensor.off();
            console.log('switchedOff: ' + switchedOff);
            switchval = 0;
          }
        }, 2000);

      } else {
        console.log('TEST CANNOT START');
      }
    }
  });

  // the start()-fn calls the board.init()-fn that does the main work:
  board.init();
}





function onExit(err) {
  console.log('ending');
  var switchedOffOnExit = genericDigitalOutput2Sensor.off();
  console.log('SwitchedOff Led onExit: ' + switchedOffOnExit);
  board.close();
  process.removeAllListeners();
  process.exit();
  if (typeof err != 'undefined')
    console.log(err);
}

// starts the test
start();
// catches ctrl+c event
process.on('SIGINT', onExit);
