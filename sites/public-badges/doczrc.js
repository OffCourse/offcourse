import mermaid from "remark-mermaid";
import graphViz from "remark-graphviz";

export default {
  typescript: true,
  mdPlugins: [mermaid, graphViz],
  themeConfig: {
    mode: "dark"
  }
};
