const { dependencies } = require('./package.json');

module.exports = {
  name: 'shared',
  exposes: {
    './Header': './src/Header',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
