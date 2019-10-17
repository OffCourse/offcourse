const bbot = require("bbot");
const recommendCassette = require("./cassettes/recommend");
const testCassette = require("./cassettes/test");

const initializeCassette = ({ verb, objects, run, scope, logger }) => {
  scope.text(
    new RegExp(`${verb} (${objects.join("|")})`, "i"),
    async b => {
      const matchedObject = b.conditions.captures[0];
      const recommendations = await run({
        objectType: matchedObject
      });
      return b.reply(JSON.stringify(recommendations, null, 2));
    },
    {
      id: `${verb}-cassette`
    }
  );
};

const initiateBot = cassettes => {
  const { global, logger } = bbot;
  cassettes.map(cassette =>
    initializeCassette({ scope: global, logger, ...cassette })
  );
  bbot.start();
};

initiateBot([recommendCassette, testCassette]);
