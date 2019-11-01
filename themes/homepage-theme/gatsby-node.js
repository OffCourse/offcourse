const fs = require("fs");
const remark = require(`remark`);
const html = require(`remark-html`);

exports.onCreateWebpackConfig = ({
  actions: { replaceWebpackConfig },
  getConfig
}) => {
  const config = getConfig();

  config.module.rules.push({
    test: /\.worker\.ts$/,
    use: { loader: "workerize-loader" }
  });

  config.output.globalObject = "this";

  replaceWebpackConfig(config);
};

exports.createSchemaCustomization = ({ actions }) => {
  actions.createFieldExtension({
    name: "md",
    args: {
      sanitize: {
        type: "Boolean!",
        defaultValue: true
      }
    },
    extend(options, prevFieldConfig) {
      return {
        args: {
          sanitize: "Boolean"
        },
        resolve(source, args, context, info) {
          const fieldValue = context.defaultFieldResolver(
            source,
            args,
            context,
            info
          );
          const shouldSanitize =
            args.sanitize != null ? args.sanitize : options.sanitize;
          const processor = remark().use(html, { sanitize: shouldSanitize });
          return processor.processSync(fieldValue).contents;
        }
      };
    }
  });
};

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions, reporter }) => {
  actions.createTypes(`
    type FormFieldOption {
      value: String!
      label: String!
    }

    type FormField {
        name: String!
        placeholder: String
        label: String!
        type: String
        options: [FormFieldOption]
    }

    type Form {
        title: String!
        fields: [FormField]
    }

    type ContactInfo {
      street: String
      zipCode: String
      city: String
      country: String
      email: String
    }

    type ProjectInfo {
      title: String
      description: String @md
    }


    type ContactSection implements Node & PageSection {
      role: String!
      order: Int!
      title: String
      description: String @md
      backdropPath: String
      publishable: Boolean
      callToAction: String
      form: Form
     }

    type HeroSection implements Node & PageSection {
      role: String!
      order: Int!
      title: String
      description: String @md
      backdropPath: String
      publishable: Boolean
     }

    type AboutSection implements Node & PageSection {
      role: String!
      order: Int!
      title: String
      description: String @md
      backdropPath: String
      publishable: Boolean
     }

    type FooterSection implements Node & PageSection {
      role: String!
      title: String
      order: Int!
      description: String @md
      backdropPath: String
      publishable: Boolean
      contactInfo: ContactInfo
    }

    type ProjectsSection implements Node & PageSection {
      role: String!
      title: String
      order: Int!
      description: String @md
      backdropPath: String
      publishable: Boolean
      projects: [ProjectInfo]
     }

    type ProcessSection implements Node & PageSection {
      role: String!
      title: String
      order: Int!
      description: String @md
      backdropPath: String
      publishable: Boolean
      steps: [ProjectInfo]
     }

    type ProfileSection implements Node & PageSection {
      role: String!
      title: String
      order: Int!
      description: String @md
      backdropPath: String
      publishable: Boolean
      skills: [ProjectInfo]
     }

    interface PageSection @nodeInterface {
      id: ID!
      role: String!
      order: Int!
      title: String
      description: String @md
      backdropPath: String
      publishable: Boolean
    }
`);
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/HomePage.tsx")
  });
};
