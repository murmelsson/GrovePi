#!/usr/bin/env python
#
# GrovePi Example for using the Grove - Gesture Sensor v1.0(http://www.seeedstudio.com/depot/Grove-Gesture-p-2463.html)
#		
# This example returns a value when a user does an action over the sensor
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://www.dexterindustries.com/forum/?forum=grovepi
#
'''
## License

The MIT License (MIT)

GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2015  Dexter Industries

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import grove_gesture_sensor
import time

g=grove_gesture_sensor.gesture()
g.init()
while True:
	gest=g.return_gesture()
	#Match the gesture
	if gest==g.FORWARD:
		print("FORWARD")
	elif gest==g.BACKWARD:
		print("BACKWARD")
	elif gest==g.RIGHT:
		print("RIGHT")
	elif gest==g.LEFT:
		print("LEFT")
	elif gest==g.UP:
		print("UP")
	elif gest==g.DOWN:
		print("DOWN")
	elif gest==g.CLOCKWISE:
		print("CLOCKWISE")
	elif gest==g.ANTI_CLOCKWISE:
		print("ANTI_CLOCKWISE")
	elif gest==g.WAVE:
		print("WAVE")
	elif gest==0:
		print("-")
	else:
		print("Error")
	time.sleep(.1)