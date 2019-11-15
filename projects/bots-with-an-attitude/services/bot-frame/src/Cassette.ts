import { Verb, Object, ICassette } from "./interfaces";

export default class Cassette implements ICassette {
  readonly verb: Verb;
  readonly objects: Object[];
  readonly run: any;

  constructor({ verb, objects, run, memory }: ICassette & { memory: any }) {
    this.verb = verb;
    this.objects = objects;
    this.run = () => run({ memory: memory.get(verb) });
  }
}
