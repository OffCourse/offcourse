const bot = require("bbot");
const recommendCassette = require("./cassettes/recommend");
const testCassette = require("./cassettes/test");

const initiateBot = cassettes => {
  cassettes.map(({ verb, objects, run }) => {
    bot.global.text(
      new RegExp(`${verb} .* (${objects.join("|")})`, "i"),
      async b => {
        const matchedObject = b.conditions.captures[0];
        const recommendations = await run({
          objectType: matchedObject
        });
        return b.reply(JSON.stringify(recommendations, null, 2));
      },
      {
        id: "recommendations-direct"
      }
    );
  });

  bot.start();
};

initiateBot((cassettes = [recommendCassette, testCassette]));
