import badgeClass from "../fixtures/badgeClass.json";
const { badgeClassId, name, tags, description, narrative } = badgeClass;

const PublicBadgeClass = {
  badgeClassId() {
    return badgeClassId;
  },
  name() {
    return name;
  },
  tags() {
    return tags;
  },
  description() {
    return description;
  },
  narrative() {
    return narrative;
  }
};

export default PublicBadgeClass;
