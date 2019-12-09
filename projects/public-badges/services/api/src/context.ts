import * as stores from "./stores";
import {
  ApolloContext,
  PublicBadgesDataLake,
} from "./types";
import AWS from "aws-sdk"; // eslint-disable-line import/no-extraneous-dependencies
import uuidv1 from "uuid/v1";

const s3 = new AWS.S3();

const datalake: PublicBadgesDataLake = {
  async dump(event) {
    const Bucket = process.env.DATALAKE_BUCKET;
    if (!Bucket) {
      throw "Bucket Name is Required";
    }
    const reply = await s3
      .putObject({
        Bucket,
        Key: `${uuidv1()}.json`,
        Body: JSON.stringify(event, null, 2)
      })
      .promise();
    console.log(reply);
    return event.data;
  }
};

const context: ApolloContext = { stores, datalake };

export default context;
