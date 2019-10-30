import bbot, { State, Path, logger as bLogger } from "bbot";
import recommendCassette from "./cassettes/recommend";
import testCassette from "./cassettes/test";
import { ICassette } from "./interfaces";

const initializeCassette: (
  cassette: ICassette & { scope: Path; logger: typeof bLogger }
) => void = ({ verb, objects, run, scope }) => {
  scope.text(
    new RegExp(`${verb} (${objects.join("|")})`, "i"),
    async (b: State) => {
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

const initiateBot: (cassettes: ICassette[]) => void = cassettes => {
  const { global, logger } = bbot;
  cassettes.map(cassette =>
    initializeCassette({ scope: global, logger, ...cassette })
  );
  bbot.start();
};

initiateBot([recommendCassette, testCassette]);
