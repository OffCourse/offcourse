import { Verb, Object, ICassette } from "./interfaces";
import Gun from "gun";

const gun = new Gun<{ person: { name: string } }>();
gun
  .get("person")
  .get("name")
  .put("Alice");

export default class Cassette implements ICassette {
  readonly verb: Verb;
  readonly objects: Object[];
  readonly run: any;

  constructor({ verb, objects, run }: ICassette) {
    this.verb = verb;
    this.objects = objects;
    const db = gun;
    this.run = () => run({ db });
  }
}
