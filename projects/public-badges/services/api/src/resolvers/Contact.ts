import { ContactResolvers } from "../generated/graphql";

const Contact: ContactResolvers = {
  name({ name }) {
    return name;
  },
  email({ email }) {
    return email;
  }
};

export default Contact;
