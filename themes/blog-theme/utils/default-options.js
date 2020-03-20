module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/blog`;
  const contentPath = themeOptions.contentPath || `data/posts`;
  const assetPath = themeOptions.assetPath || `data/assets`;

  return {
    basePath,
    contentPath,
    assetPath
  };
};
