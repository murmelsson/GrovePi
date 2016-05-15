To get this working, note the following, this had to be done (uhh, i think) before npm install will work for the NodeJS stuff
sudo apt-get install libasound2-dev

Also worth checking that gcc and g++ are on versions 4.8 :
https://github.com/fivdi/onoff/wiki/Node.js-v4-and-native-addons
(may have more to do with "standard" raspberry-pi js than grovePi, but putting it in anyway).

generally a good idea to run npm install with the verbose flag set (i don't know why, it just often works better):
```npm install --verbose```

For now my modifications are mainly in the ./Software/NodeJS/ folders. 

See e.g. ./Software/NodeJS/README-murmelssonic.md of that folder.

TODOs:

1. Make a simpler test script, but with the more traditional HelloWorld(LED-blink) functionality

2. Modify the wot-book hello-world to run using GrovePi-based libraries

3. POC what is the minimal set of npm-ery and ad-hoc .js file includes needed to get going.

4. Move on to the next-easiest example.

5. etcetera, etcetera...
