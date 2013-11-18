# runtime-configuration (rc) [![Build Status](https://travis-ci.org/vtsvang/node-runtime-configuration.png)](https://travis-ci.org/vtsvang/node-runtime-configuration) [![endorse](http://api.coderwall.com/vtsvang/endorsecount.png)](http://coderwall.com/vtsvang)

Runtime configuration loader

## Features

  * Detect rc files location and format
  * Support of ini, json, yml and plist formats
  * Override with CLI arguments and ENV variables
  * Nested configuration support
  * Asynchronous API
  * Deep extend of defaults

*Idea inspired from [dominictarr/rc](https://github.com/dominictarr/rc)*

## Installation

    $ npm install runtime-configuration

## Usage

Completely compatible with JavaScript and CoffeeScript

### Just load runtime configuration for npm
```coffeescript
rc = require "runtime-configuration"

rc "npm", ( err, config ) ->
  console.log( config ), unless err
```

### Defaults
```coffeescript
rc = require "runtime-configuration"

rc "npm", { registry: "https://registry.npmjs.org/" }, ( err, config ) ->
  console.log( config.registry ), unless err
```

### Change settings
```coffeescript
rc = require "runtime-configuration"

rc "npm", ( err, config ) ->
  return if err?

  @set "registry", "http://my-internal-registry.local"
  @save "ini", ( err ) ->
    console.log "Configuration successfully saved!"
```

##Standards

Given your application name, rc will look in all the obvious places for configuration.

  * command line arguments (parsed by optimist)
  * enviroment variables prefixed with ${APPNAME}_
  * if you passed an option `--config file` then from that file
  * `$HOME/.${APPNAME}rc`
  * `$HOME/.${APPNAME}/config`
  * `$HOME/.config/${APPNAME}`
  * `$HOME/.config/${APPNAME}/config`
  * `/etc/${APPNAME}rc`
  * `/etc/${APPNAME}/config`
  * the defaults object you passed in.

All configuration sources that where found will be flattened into one object,
so that sources earlier in this list override later ones.

# Development

Add specs for any new or changed functionality.

Run tests: `npm test`

Generate documentation: `npm run-script generate-doc`

## Changelog

* v0.1.2 - Windows support
* v0.1.1 - Updated plist package
* v0.1.0 - First release
* v0.0.1 - Specs

## License

(The MIT License)

Copyright (c) 2013 Vladimir Tsvang &lt;vtsvang@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.