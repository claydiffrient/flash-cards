import proxy from "identity-obj-proxy";
import transform from "@instructure/babel-plugin-themeable-styles/transform";

export default {
  process: function(src) {
    return "module.exports = " + transform(proxy, src);
  }
};
