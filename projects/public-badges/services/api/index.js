const artifact = require("./fixture.json");
const { id, type, recipient, issuedOn, expires } = artifact;

const badgeWrapper = {
  id,
  type,
  recipient,
  issuedOn,
  expires,
  artifact: {
    json: JSON.stringify(artifact)
  }
};

const score = {
  accountable: 0,
  sovereign: 70,
  userCentric: 10,
  transparent: 10,
  open: 10
};

exports.handler = async event => {
  var badges = {
    "1": {
      ...badgeWrapper
    },
    "2": {
      id: "urn:uuid:e79a6c18-787e-4868-8e65-e6a4530fb419",
      ...badgeWrapper
    }
  };

  return badges[event.badgeId];
};
