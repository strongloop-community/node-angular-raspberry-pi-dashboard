/*!
 * A CRUD-capable model.
 */
var loopback = require('loopback');
var properties = require('./properties');
var config = require('./config');
var metric = loopback.Model.extend('metric', properties, config);

if (config['data-source']) {
  metric.attachTo(require('../' + config['data-source']));
}

module.exports = metric;
