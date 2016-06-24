ldd-ionic-webpack
=============


## Quick Start

Clone the repository

```bash
$ git clone https://github.com/evaletolab/ldd-ionic-webpack.git
```

Install the dependencies

```bash
$ npm install
```

Watch Mode (this will run the webpack dev server)

```bash
$ gulp watch
```

Adding Cordova Plugins

```bash
$ cordova plugins add ionic-plugin-keyboard cordova-plugin-console cordova-plugin-device


* [background GPS service](https://github.com/pmwisdom/cordova-background-geolocation-services)
* [un autre service GPS (je sais pas s'il est gratuit)](https://github.com/transistorsoft/cordova-background-geolocation-lt)
* [Navite sound effect](http://gonehybrid.com/how-to-add-sound-effects-to-your-ionic-app-with-native-audio/)

```bash
$ cordova plugin add https://github.com/pmwisdom/cordova-background-geolocation-services.git
```

Adding Cordova Platforms

```bash
$ cordova platform add ios
```

Build

```bash
$ gulp && cordova build
```

Running in the emulator

```bash
$ cordova emulate ios
```
