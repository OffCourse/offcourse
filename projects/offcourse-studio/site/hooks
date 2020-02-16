import { graphql, useStaticQuery } from "gatsby";

const useGetProjectImages = () => {
  const { allFile } = useStaticQuery(graphql`
    query ProjectImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "projectImages" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const imageUrls = allFile.edges.reduce(
    (
      acc: { [key: string]: string },
      { node }: { node: { name: string; publicURL: string } }
    ) => ({
      ...acc,
      [node.name]: node.publicURL
    }),
    {}
  );
  return imageUrls;
};

export default useGetProjectImages;
