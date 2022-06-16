// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//   entry: './src/app.jsx',
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'dev server app',
//       template: 'src/index.html',
//     }),
//   ],
//   resolve: {
//     modules: [path.join(__dirname, 'src'), 'node_modules'],
//     alias: {
//       react: path.join(__dirname, 'node_modules', 'react'),
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//           test: /\.css|\.scss|\.sass/gi,
//           exclude: /node_modules/,
//           use: ['style-loader', 'css-loader', 'sass-loader'],
//         },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
//   devServer: {
//     static: {
//       publicPath: '/build',
//       directory: path.join(__dirname, './build'),
//     }
//   },

// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev server app',
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, './build'),
    },
    port: 8080,
  },
};
