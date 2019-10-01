import { graphql } from "gatsby";

export const StepsFragments = graphql`
  fragment StepsData on ProcessSection {
    steps {
      title
      description
    }
  }
`;

export const ProjectsFragment = graphql`
  fragment ProjectsData on ProjectsSection {
    projects {
      title
      description
    }
  }
`;

export const ProfileFragment = graphql`
  fragment ProfileData on ProfileSection {
    skills {
      title
      description
    }
  }
`;

export const ContactInfoData = graphql`
  fragment ContactInfoData on FooterSection {
    contactInfo {
      street
      zipCode
      city
      country
      email
    }
  }
`;

export const FormFieldOptionsFragment = graphql`
  fragment FormFieldOptionsData on FormField {
    options {
      value
      label
    }
  }
`;

export const FormFieldFragment = graphql`
  fragment FormFieldData on Form {
    fields {
      name
      label
      type
      ...FormFieldOptionsData
    }
  }
`;

export const FormFragment = graphql`
  fragment FormData on ContactSection {
    form {
      title
      ...FormFieldData
    }
  }
`;
