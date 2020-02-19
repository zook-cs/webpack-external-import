const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const configFactory = require("../webpack/webpackConfigFactory");
const URLImportPlugin = require("../../webpack");

const siteId = 3;
const manifestName = `website-${siteId}`;

module.exports = configFactory(siteId, {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ExtractCssChunks.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    new URLImportPlugin({
      manifestName,
      fileName: "importManifest.js",
      basePath: ``,
      publicPath: `//localhost:300${siteId}/`,
      writeToFileEmit: false,
      filter: null,
      debug: true,
      provideExternals: {
        lodash: "lodash"
      }
    })
  ]
});
