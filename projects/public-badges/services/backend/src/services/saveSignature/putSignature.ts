import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies

const s3 = new AWS.S3();

type Save<T> = (id: string, document: T) => Promise<T>;

const putSignature: Save<string> = async (id, signature) => {
  const Bucket = process.env.REGISTRY_BUCKET;
  if (!Bucket) {
    throw "Bucket Name is Required";
  }
  const Key = `${id}.jws`;
  const reply = await s3
    .putObject({
      Bucket,
      Key,
      Body: signature
    })
    .promise();
  console.log(reply);
  return signature;
};

export default putSignature;
