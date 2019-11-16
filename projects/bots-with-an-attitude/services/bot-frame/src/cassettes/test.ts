import { ICassette, Object } from "../interfaces";

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const verb = "test";

const objects: Object[] = ["funk"];

const run = async ({ memory }: any) => {
  const seconds = 1;
  await timeout(seconds * 1000);
  const answer = await memory.get("name").then();
  return { results: [answer] };
};

const cassette: ICassette = {
  verb,
  objects,
  run
};

export default cassette;
