# JSON configs coder/decoder
class JSONAdapter

  # Detect passed data format
  #
  # @param [String] data
  # @return [Object] is it json?
  #
  @detect: ( data ) ->
    /^(\s+)?({|\[)/.test data

  # Parse passed data.
  #
  # @param [String] data data to parse
  # @return [Object] parsed object
  #
  @parse: ( data ) ->
    JSON.parse data

  # Stringify passed object.
  #
  # @param [Object] data object to stringify
  # @return [String] result string
  #
  @stringify: ( data ) ->
    JSON.stringify data, null, "  "

module.exports = JSONAdapter