module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          // root: ["./src"],
          alias: {
            // this lets you import "@src/whatever" instead of "./src/whatever
            //"@src": "./src",
            // this works
            constants: "./src/constants.customer1",
          },
        },
      ],
    ],
  };
};
