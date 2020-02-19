const webpack = require("webpack");
const configFactory = require("../webpack/webpackConfigFactory");
const URLImportPlugin = require("../../webpack");

const siteId = 2;
const manifestName = `website-${siteId}`;

module.exports = configFactory(siteId, {
  plugins: [
    new URLImportPlugin({
      manifestName,
      fileName: "importManifest.js",
      basePath: ``,
      publicPath: `//localhost:300${siteId}/`,
      writeToFileEmit: false,
      filter: null,
      debug: true,
      useExternals: {
        lodash: "lodash"
      }
    })
  ]
});

