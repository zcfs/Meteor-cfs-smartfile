/**
 * @public
 * @constructor
 * @param {String} name - The store name
 * @param {Object} options
 * @param {Function} [options.beforeSave] - Function to run before saving a file from the client. The context of the function will be the `FS.File` instance we're saving. The function may alter its properties.
 * @param {Number} [options.maxTries=5] - Max times to attempt saving a file
 * @returns {undefined}
 * 
 * Creates a SmartFile store instance on the client, which is just a shell object
 * storing some info.
 */
FS.Store.SmartFile = function(name, options) {
  var self = this;
  if (!(self instanceof FS.Store.SmartFile))
    throw new Error('FS.Store.SmartFile missing keyword "new"');
  
  _.extend(this, { name: name, sync: false, maxTries: 5 }, options || {});
};