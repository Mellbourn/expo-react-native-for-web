// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");
const fs = require("fs");
const { getDefaultConfig } = require("expo/metro-config");
const customer = process.env.CUSTOMER;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
// console.log("🚀 ~ config:", config);

const extendedConfig = {
  ...config,
  resolver: {
    ...config.resolver,
    sourceExts: [
      ...[customer + ".ts", customer + ".tsx"].concat(
        config.resolver.sourceExts
      ),
    ],
    // resolveRequest: (context, realModuleName, platform, moduleName) => {
    //   //   console.log("🚀 ~ context:", context);
    //   //   console.log("🚀 ~ realModuleName:", realModuleName);
    //   //   console.log("🚀 ~ platform:", platform);
    //   //   console.log("🚀 ~ moduleName:", moduleName);
    //   const baseName = path.resolve(context.originModulePath, realModuleName);
    //   //   console.log("🚀 ~ baseName:", baseName);
    //   const customerSpecificFile = `${baseName}.${customer}.ts`;

    //   //   console.log("🚀 ~ customerSpecificFile:", customerSpecificFile);
    //   //   if (fs.existsSync(customerSpecificFile)) {
    //   //     console.log(
    //   //       "********************************************************************************************FOUND",
    //   //       customerSpecificFile
    //   //     );
    //   //     return {
    //   //       filePath: customerSpecificFile,
    //   //       type: "sourceFile",
    //   //     };
    //   //   }

    //   // Fallback to Metro's default resolver if no customer-specific file is found
    //   const result = context.resolveRequest(context, realModuleName, platform);
    //   //   console.log("🚀 ~ result:", result);
    //   return result;
    // },
  },
};
// console.log("🚀 ~ qextendedConfig:", extendedConfig);
console.log("extendedConfig", extendedConfig.resolver.sourceExts);

module.exports = extendedConfig;
