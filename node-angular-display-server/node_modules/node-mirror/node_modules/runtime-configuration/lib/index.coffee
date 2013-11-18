module.exports = rc = ( program, defaults, callback = -> ) ->
  throw new Error( "Set program name" ) unless program?

  if typeof defaults is "function"
    callback = defaults

  config = new rc.RuntimeConfiguration( program, defaults )

  config.load ( err ) ->
    return callback.call config, err if err?

    callback.call @, null, @config

rc.RuntimeConfiguration = require "./runtime-configuration"
rc.ConfigParser = require "./config-parser"