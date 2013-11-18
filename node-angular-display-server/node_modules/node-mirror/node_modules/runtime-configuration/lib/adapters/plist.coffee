# Plist configs coder/decoder
class PlistAdapter

  plist = require "plist"

  # Detect passed data format
  #
  # @param [String] data
  # @return [Object] is it plist?
  #
  @detect: ( data ) ->
    /^</.test data

  # Parse passed data.
  #
  # @param [String] data data to parse
  # @return [Object] parsed object
  #
  @parse: ( data ) ->
    plist.parseStringSync data

  # Stringify passed object.
  #
  # @param [Object] data object to stringify
  # @return [String] result string
  #
  @stringify: ( data ) ->
    plist.build( data ).toString()

module.exports = PlistAdapter