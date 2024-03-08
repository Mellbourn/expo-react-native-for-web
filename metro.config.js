// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const customer = process.env.CUSTOMER;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    sourceExts: [
      ...[customer + ".ts", customer + ".tsx"].concat(
        config.resolver.sourceExts
      ),
    ],
  },
};
