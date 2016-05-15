* Murmelssonic extensions *

Well, not really extensions, more like trying to work out how to use NodeJS for simple stuff when using the GrovePi board.

First working "switch LED on (once) and off (once)"-demo was done by the following hack:

1. Copy the <root>/GrovePi/Software/NodeJS/libs/sensors/genericDigitalOutputSensor.js to another file:
genericDigitalOutput2Sensor.js
- basically just renames the functions to add a "2", and then adds a module.export command so that
this becomes an "instantiable class"... yes yes this is javascript but we can pretend that typing
matters.

2. add a reference to this new sensor file / class in the file <root>/GrovePi/Software/NodeJS/libs/index.js

3. Copy the <root>/GrovePi/Software/NodeJS/tests/basicTest.js to another file:
morebasicTest.js
Since I had a Grove LED connected to digital port D4, so commented out whatever was being assigned to that
port in the original script, and instead introduced the new class constructed with association to port D4.

This worked, so it will do as first push to murmelsson's forked copy of the GrovePi repo.

Not a great demo, but does the job:
pi@raspberrypi ~/Desktop/myGrove/GrovePi/Software/NodeJS/tests $ sudo node morebasicTest.js 
starting
info GrovePi.board GrovePi is initing
GrovePi Version :: 255.255.255
Acceleration I2C Sensor (single read) :: 0,0,0
Acceleration I2C Sensor (start stream - 1sec delay)
Acceleration I2C Sensor (start watch)
**Switch LED on..**
**switchedOn: true**
AirQuality Analog Sensor (start watch)
DHT Digital Sensor (start watch)
Light Analog Sensor (start watch)
...
AirQuality onChange value=360
Light onChange value=18.9
AirQuality onChange value=345
Light onChange value=20.18
**^C**AirQuality onChange value=357
Light onChange value=19.83
Acceleration stream value=0,0,0
ending
**SwitchedOff Led: true**
info GrovePi.board GrovePi is closing

