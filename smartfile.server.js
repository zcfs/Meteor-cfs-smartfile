// var chunkSize = 262144; // 256k is default SmartFile chunk size

/**
 * @public
 * @constructor
 * @param {String} name - The store name
 * @param {Object} options
 * @param {Function} [options.beforeSave] - Function to run before saving a file from the server. The context of the function will be the `FS.File` instance we're saving. The function may alter its properties.
 * @param {Number} [options.maxTries=5] - Max times to attempt saving a file
 * @returns {FS.StorageAdapter} An instance of FS.StorageAdapter.
 *
 * Creates a SmartFile store instance on the server. Inherits from FS.StorageAdapter
 * type.
 */
FS.Store.SmartFile = function(name, options) {
  var self = this;
  options = options || {};

  if (!(self instanceof FS.Store.SmartFile))
    throw new Error('FS.Store.SmartFile missing keyword "new"');

  Meteor.startup(function() {
  }); // EO startup

  return new FS.StorageAdapter(name, options, {

    typeName: 'storage.smartfile',

    get: function(fileKey, callback) {
      // var self = this;
      // callback(null, new Uint8Array(result));
    },

    getBytes: function(fileKey, start, end, callback) {
      // var self = this;
      // callback(null, new Uint8Array(result));
    },

    put: function(fileKey, buffer, options, callback) {
      // var self = this;
      // options = options || {};
      // callback(null, fileKey);
    },

    del: function(fileKey, callback) {
      // var self = this;
      // callback(null);
    },

    watch: function() {
      // throw new Error("SmartFile storage adapter does not support the sync option");
    },

    init: function() {
      // var self = this;
    }
  });
};
