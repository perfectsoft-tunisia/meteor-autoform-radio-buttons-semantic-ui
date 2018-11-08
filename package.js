Package.describe({
  name: 'perfectsofttunisia:autoform-radio-buttons-semantic-ui',
  version: '1.0.0',
  summary: 'Radio button for autoform with semantic ui theme',
  git: 'https://github.com/perfectsoft-tunisia/meteor-autoform-radio-buttons-semantic-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['ecmascript', 'templating'], 'client');

  api.use('aldeed:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});
  api.use('perfectsofttunisia:autoform@4.0.0 || 5.0.0 || 6.0.0', {weak: true});

  api.addFiles([
    'buttons-radio.html',
    'buttons-radio.js',
    'input-type-config.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('perfectsofttunisia:autoform-radio-buttons-semantic-ui');
  api.mainModule('autoform-radio-buttons-semantic-ui-tests.js');
});
