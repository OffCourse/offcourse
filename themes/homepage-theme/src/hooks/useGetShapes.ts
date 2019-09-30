import { graphql, useStaticQuery } from "gatsby";
import { shuffle } from "d3-array"

const useGetShapes: () => any = () => {
  const data = useStaticQuery(graphql`
    query ShapesQuery {
      allFile(filter: { sourceInstanceName: { eq: "shapes" } }) {
        edges {
          node {
            name
          }
        }
      }
    }`);
  const allShapes = data.allFile.edges.reduce(
    (acc, { node }) => [...acc, node.name],
    []
  );
  return allShapes
}

export default useGetShapes;
