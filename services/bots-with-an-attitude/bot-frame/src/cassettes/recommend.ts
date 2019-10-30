const user = [{ name: "something", age: 23 }, { name: "else", age: 29 }];
const hashtag = [
    { name: "wething", weight: 100 },
    { name: "asklasse", weight: 1000 }
];

interface IRec {
    user: any;
    hashtag: any;
}

const rec: IRec = { user, hashtag };

const run: (options: { objectType: "user" | "hashtag" }) => any = ({ objectType = "user" }) => rec[objectType];
const verb = "recommend";
const objects = Object.keys(rec);

const cassette = { verb, objects, run };

export default cassette;
