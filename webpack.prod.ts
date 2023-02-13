import configs from "./webpack.common";
import { merge } from "webpack-merge";

export default merge(configs, {
  mode: "development",
  devtool: "inline-source-map",
});
