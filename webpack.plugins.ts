import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// eslint-disable-next-line import/no-named-as-default
import webpack from "webpack";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new webpack.IgnorePlugin({
    resourceRegExp: /^pg-hstore$/,
    contextRegExp: /sequelize/,
  }),
  new webpack.IgnorePlugin({
    resourceRegExp: /^pg$/,
    contextRegExp: /sequelize/,
  }),
];
