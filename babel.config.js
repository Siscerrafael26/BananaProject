module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@colors': './src/colors',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
