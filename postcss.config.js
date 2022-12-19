module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        options: {
          postcssOptions: {
            parser: 'postcss-js',
          },
          execute: true,
          plugins: [require('autoprefixer')()],
          sourceMap: true,
        },
      },
    ],
  ],
};
