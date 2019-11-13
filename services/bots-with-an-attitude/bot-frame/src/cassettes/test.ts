import { ICassette, Object } from "../interfaces";

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const verb = "test";
const objects: Object[] = ["funk"]
const run = async ({ db }: any) => {

  const seconds = 1;
  await timeout(seconds * 1000);

  const promise = new Promise(function(resolve, reject) {
    db.get("person").get("name").once((name: string) => resolve(name));
  });

  const answer = await promise;
  return { results: [answer] };
};

const cassette: ICassette = {
  verb,
  objects,
  run
};

export default cassette;
