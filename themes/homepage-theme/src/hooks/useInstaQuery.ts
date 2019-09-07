import { graphql, useStaticQuery } from "gatsby";

const useInstaQuery = () => {
  const { allInstaNode } = useStaticQuery(graphql`
    query InstaQuery {
      allInstaNode(limit: 3, skip: 5) {
        nodes {
          original
         }
       }
     }`);
  return allInstaNode.nodes.map(
    ({ original }: { original: string }) => original
  );
};

export default useInstaQuery;
