const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare((api, opts) => {
  api.assertVersion(">=7.6.0");

  return {
    name: "@suchipi/babel-plugin-syntax-v8intrinsic",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push(["v8intrinsic"]);
    },
  };
});
