const presets = ['@babel/env'];

const basePlugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 2,
    },
  ],
];

module.exports = function (api) {
  api.cache(true);

  return {
    presets,
    plugins: [...basePlugins],
    ignore: ['node_modules'],
  };
};
