Package.describe({
  name: 'practicalmeteor:mocha-core',
  summary: 'Fibers aware mocha server side wrappers. Internal package - use practicalmeteor:mocha.',
  version: '1.0.0',
  testOnly: true,
  git: 'https://github.com/practicalmeteor/meteor-mocha-core.git'
});

Npm.depends({
  mocha: '2.4.5',
  'xunit-file': '1.0.0'
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.3');

  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.export(['mochaInstance', 'setupGlobals'], 'server');
});
