import "regenerator-runtime/runtime";
import path from "path";
import globImporter from "node-sass-glob-importer";
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin";
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    reactDocgen: "none",
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, "../src/assets"),
    };
    config.resolve?.plugins?.push(
      new TsconfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              importer: globImporter(),
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
