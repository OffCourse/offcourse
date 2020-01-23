exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@offcourse\/public-badges-drawer\/loader/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
