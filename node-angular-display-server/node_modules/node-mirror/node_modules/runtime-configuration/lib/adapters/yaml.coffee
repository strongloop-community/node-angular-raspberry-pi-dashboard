# YAML configs coder/decoder
class YAMLAdapter

  YAML = require "yamljs"

  # Detect passed data format
  #
  # @param [String] data
  # @return [Object] is it yaml?
  #
  @detect: ->
    on

  # Parse passed data.
  #
  # @param [String] data data to parse
  # @return [Object] parsed object
  #
  @parse: ( data ) ->
    YAML.parse data

  # Stringify passed object.
  #
  # @param [Object] data object to stringify
  # @return [String] result string
  #
  @stringify: ( data ) ->
    YAML.stringify data

module.exports = YAMLAdapter