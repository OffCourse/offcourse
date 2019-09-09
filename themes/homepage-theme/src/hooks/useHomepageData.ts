import { graphql, useStaticQuery } from "gatsby";

const useHomepageData = () => {
  const data = useStaticQuery(graphql`
    query AllHomepageData {
        allHomePage {
            edges {
                node {
                siteName
                sections {
                    backdropPath
                    callToAction
                    publishable
                    role
                    title
                    description
                    projects {
                      title
                      description
                    }
                    steps {
                      title
                      description
                    }
                    contactInfo {
                       street
                       zipCode
                       city
                       country
                       email
                    }
                    form {
                        title
                        fields {
                            label
                            name
                            type
                            options {
                                label
                                value
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  `);
  return data.allHomePage.edges[0].node;
};

export default useHomepageData;
