import crypto from "crypto";

const uuidToUrn = (uuid: string) => `urn:uuid:${uuid}`;

const hashEmailAddress = (email: string, salt: string) => {
  const sum = crypto.createHash("sha256");
  sum.update(email + salt);
  return "sha256$" + sum.digest("hex");
};

const createISODate = (offset: number = 0) =>
  new Date(Date.now() + offset).toISOString();

export { uuidToUrn, hashEmailAddress, createISODate };
