const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point for your app
  output: {
    publicPath: '/', // Base path for all assets
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'public'), // Serve static files from 'public'
      watch: true, // Watch for changes in static files
    },
    historyApiFallback: true, // To be enabled for handling routing in React
  },
  devtool: 'inline-source-map', // Generate source maps for debugging
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your existing index.html as a template
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(css|scss|sass)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
