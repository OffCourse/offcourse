export type Verb = "recommend" | "test";
export type Object = "funk" | "user" | "hashtag";

export interface ICassette {
  verb: Verb;
  objects: Object[];
  run: any;
}

export interface ISentence {
  verb: Verb;
  object: string;
  objects: Object[];
  results: any[];
}

export interface IBot {
  cassettes: ICassette[];
}
