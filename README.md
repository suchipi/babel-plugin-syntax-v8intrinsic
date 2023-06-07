# `@suchipi/babel-plugin-syntax-v8intrinsic`

This babel plugin enables syntax parsing support for V8 intrinsics, also known
as V8 runtime functions. See [Babel
7.6.0: V8 intrinsic runtime functions
parsing](https://babeljs.io/blog/2019/09/05/7.6.0#v8-intrinsic-runtime-functions-parsing-10148)
for more info.

This plugin does not perform any transformation; it only allows babel to parse
the syntax.

Remember that this syntax is invalid in production builds of Chrome/Chromium,
all non-V8 browsers, and Node.js without the `--allow-natives-syntax` flag. As
such, code using this syntax should not be pushed to production, and should only
be used for debugging and profiling purposes.

This plugin requires Babel 7.6.0 or higher in order to function.

## License

MIT
