import crypto from "crypto";
const hashEmailAddress = (email: string, salt: string) => {
  var sum = crypto.createHash("sha256");
  sum.update(email + salt);
  return "sha256$" + sum.digest("hex");
};

const createRecipient = ({ email }: { email: string }) => {
  const salt = "PUBLIC BADGES";
  const identity = hashEmailAddress(email, salt);
  return {
    type: "email",
    hashed: true,
    identity,
    salt
  };
};

export default createRecipient;
