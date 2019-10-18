const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
}



// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[path][name].[ext]?[contenthash]',
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
