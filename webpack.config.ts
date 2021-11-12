import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import globImporter from "node-sass-glob-importer";
import TerserPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
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
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            negate_iife: false,
          },
          output: {
            wrap_iife: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};
