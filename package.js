Package.describe({
  name: "cfs-smartfile",
  summary: "SmartFile storage adapter for CollectionFS"
});

// Npm.depends({
//   mongodb: "1.3.23"
// });

Package.on_use(function(api) {
  api.use(['cfs-base-package', 'cfs-storage-adapter']);
  api.add_files('smartfile.server.js', 'server');
  api.add_files('smartfile.client.js', 'client');
});

Package.on_test(function(api) {
  api.use(['cfs-smartfile', 'test-helpers', 'tinytest'], 'server');
  api.add_files('tests/server-tests.js', 'server');
  api.add_files('tests/client-tests.js', 'client');
});
