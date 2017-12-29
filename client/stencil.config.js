exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
