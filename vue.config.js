const path = require("path");
module.exports = {
  configureWebpack: () => {
      return {
        resolve: {
          // alias: { "@components": path.resolve(__dirname, "./src/components") },
          alias: { "@": path.resolve(__dirname, "./src") },
        },
      };
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
  //       lessOptions: {
  //         modifyVars: {
  //           // 直接覆盖变量
  //           'tabbar-height': '300',
  //           // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
  //           hack: `true; @import "your-less-file-path.less";`,
  //         },
  //       },
  //     },
  //   },
  // },
};
