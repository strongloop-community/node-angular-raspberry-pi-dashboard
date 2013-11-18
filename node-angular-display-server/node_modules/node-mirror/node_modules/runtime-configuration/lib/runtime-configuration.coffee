# Configuration class
class RuntimeConfiguration

  rc = require "./index"
  fs = require "fs"
  glob = require "glob"
  path = require "path"
  async = require "async"
  optimist = require "optimist"
  extend = require "node.extend"

  # Construct a new RuntimeConfiguration.
  #
  # @param [String] @appName application name
  # @param [Object] @defaults defaults object
  #
  constructor: ( @appName, @defaults = {} ) ->
    throw new Error( "Application name not specified" ) unless @appName?

    # config overrides chain
    @_chain = []

  # Resolves home directory path.
  #
  # @return [String] homepath
  #
  home: ->
    if process.platform is "win32" then process.env.USERPROFILE else process.env.HOME

  # Lookup chain of configs.
  #
  # @return [Array] looked up paths
  #
  lookup: ->
    g1 = glob.sync "#{ @home() }/.#{ @appName }{rc,/config}"
    g2 = glob.sync "#{ @home() }/.config/{#{ @appName },#{ @appName }/config}"
    g3 = glob.sync "/etc/#{ @appName }{rc,/config}"

    [ g1..., g2..., g3... ].reverse()

  # Load configuration.
  #
  # @param [Function] callback
  # @return [RuntimeConfiguration] rc instance
  #
  load: ( callback = -> ) ->
    chain = @_chain = []

    iteration = ( item, done ) ->
      new rc.ConfigParser( item.file ).pick ->
        done null, chain.push @parsed

    # load configs
    async.forEach ( { file, idx } for own file, idx in @lookup() ), iteration, ( err ) =>
      # load cli args
      @cli()

      # load env vars
      @env()

      # set config
      @config = extend true, {}, @defaults, @_chain...

      # invoke the callback
      callback.call @, null, @config

    # for own path in @lookup()
    #   new rc.Adapter( path ).pick()
    @

  # Save configuration.
  #
  # @param [String] format config format
  # @param [Function] callback
  # @return [RuntimeConfiguration] rc instance
  #
  save: ( format, callback = -> ) ->
    if typeof format is "function"
      callback = format
      format = "json"

    config = new rc.ConfigParser( path.join @home(), ".#{ @appName }rc" )
    config.parsed = @config

    config.stringify format, callback

    @

  # Property getter.
  #
  # @param [String] key property name
  # @return [Object] value
  #
  get: ( key ) ->
    if key? then @config[ key ] else extend( {}, @config )

  # Property setter.
  #
  # @param [String|Object] key
  # @param [Object] value
  # @return [RuntimeConfiguration] rc instance
  #
  set: ( key, value ) ->
    if ( not value? ) and typeof key is "object"
      obj = key
    else
      obj = {}
      obj[ key ] = value

    extend on, @config, obj

    @

  # Load env vars
  #
  # @return [RuntimeConfiguration] rc instance
  #
  env: ->
    keyExp = new RegExp "^#{ @appName.toUpperCase() }_"
    obj = {}

    for own key, value of process.env when keyExp.test key
      objPartial = obj

      for own token, idx in tokens = key.replace( keyExp, "" ).split( "__" )
        token = token.toLowerCase().replace /_(\w)/g, ( match, word ) -> word.toUpperCase()

        if idx is tokens.length - 1
          objPartial[ token ] = value
        else
          objPartial = objPartial[ token ] ?= {}


    @_chain.push obj
    @

  # Load cli args overrides
  #
  # @return [RuntimeConfiguration] rc instance
  #
  cli: ->
    # console.log process.argv, optimist.parse process.argv
    cliArgs = extend {}, optimist.parse process.argv
    delete cliArgs._
    delete cliArgs[ "$0" ]

    @_chain.push cliArgs

    @


module.exports = RuntimeConfiguration