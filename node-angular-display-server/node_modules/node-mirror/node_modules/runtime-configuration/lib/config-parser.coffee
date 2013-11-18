# Configuration class
class ConfigParser

  fs = require "fs"

  # Construct a ConfigParser.
  #
  # @param [String] @path path to file
  #
  constructor: ( @path ) ->
    @format = null
    @parsed = {}

  # Pick config format.
  #
  # @param [Function] callback
  # @return [ConfigParser]
  #
  pick: ( callback = -> ) ->
    fs.readFile @path, "utf8", ( err, @rawData ) =>
      return callback.call( @, err ) if err

      for own format in ConfigParser.formats
        try
          @parse format
          @format = format
          break
        catch e
          continue

      return callback.call( @, new Error( "Format not supported" ) ) unless @format

      callback.call @

    @

  # Parse config.
  #
  # @param [String] format config format
  # @return [ConfigParser]
  #
  parse: ( format ) ->
    adapter = require "./adapters/#{ format }"

    if @rawData is ""
      @parsed = {}
    else if adapter.detect @rawData
      @parsed = adapter.parse @rawData
    else
      throw new Error()

    @

  # Stringify and save config.
  #
  # @param [String] format config format
  # @param [Function] callback
  # @return [ConfigParser]
  #
  stringify: ( format, callback ) ->
    if typeof format is "function"
      callback = format
      format = "json"

    try
      fs.writeFile @path, ( require( "./adapters/#{ format ? @format }" ).stringify @parsed ), "utf8", ( err ) ->
        callback err
    catch e
      callback e

    @

  # Supported formats.
  @formats: [ "json", "plist", "ini", "yaml" ]

module.exports = ConfigParser