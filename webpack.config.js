const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PugPlugin = require('pug-plugin');

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/main/main.pug',
    uiKit: './src/pages/ui-kit/ui-kit.pug',
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.join(__dirname, './build'),
  },
  stats: {
    children: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        scripts: {
          test: /\.(js)$/,
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './build'),
    },
    open: true,
    compress: true,
    hot: 'only',
    port: 3000,
    watchFiles: [
      './src/pages/**/*.*',
      './src/components/**/*.*',
      './src/assets/common/*.*',
    ],
  },
  resolve: {
    alias: {
      Img: path.join(__dirname, './src/assets/images/'),
      Icons: path.join(__dirname, './src/assets/icons/'),
      Fonts: path.join(__dirname, './src/assets/fonts/'),
      Components: path.join(__dirname, './src/components/'),
      Layouts: path.join(__dirname, './src/layouts/'),
      UIKit: path.join(__dirname, './src/UIKit'),
      Styles: path.join(__dirname, './src/assets/styles/'),
      Libs: path.join(__dirname, './src/libs/'),
      NodeModules: path.join(__dirname, './node_modules/'),
      Partials: path.join(__dirname, './src/pages/_partials/'),
      Utils: path.join(__dirname, './src/utils/'),
    },
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'assets/css/[name].css',
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon/'),
          to: path.resolve(__dirname, 'build/assets/favicon/'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/icons/'),
          to: path.resolve(__dirname, 'build/assets/icons/'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/images/map-marker.png'),
          to: path.resolve(__dirname, 'build/assets/images/'),
        },
      ],
    }),
  ],
  devtool: isDev ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/video/[name][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
