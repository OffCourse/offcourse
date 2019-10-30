import bbot from "bbot";
import recommendCassette from "./cassettes/recommend";
import testCassette from "./cassettes/test";


interface ICassette {
    verb: any,
    objects: any[],
    run: any,
    scope?: any,
    logger?: any
}

const initializeCassette: (cassette: ICassette) => void = ({ verb, objects, run, scope, logger }) => {
    scope.text(
        new RegExp(`${verb} (${objects.join("|")})`, "i"),
        async (b: any) => {
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
