function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const verb = "test";
const objects = ["funk"]
const run = async ({ db }: any) => {

  const seconds = 1;
  await timeout(seconds * 1000);
  const promise = new Promise(function(resolve, reject) {
    db.get("person").get("name").once((name: string) => resolve(name));
  });

  return promise;
};

const cassette = {
  verb,
  objects,
  run
};

export default cassette;
