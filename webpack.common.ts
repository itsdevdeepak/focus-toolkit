import { Configuration } from "webpack";
import path from "path";
import HtmlWebPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: Configuration = {
  entry: {
    popup: path.resolve(__dirname, "src/popup/index.tsx"),
    "content-script": path.resolve(__dirname, "src/content_script/index.tsx"),
    background: path.resolve(__dirname, "src/background/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPlugin({
      title: "popup",
      chunks: ["popup"],
      filename: "popup.html",
      template: path.resolve(__dirname, "src/popup/popup.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/manifest.json"),
          to: path.resolve(__dirname, "dist/manifest.json"),
        },
        {
          from: path.resolve(__dirname, "src/icons"),
          to: path.resolve(__dirname, "dist/icons"),
        },
      ],
    }),
  ],
};

export default config;
