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

export interface IBotConfig {
  cassettes: ICassette[];
}

export interface IBotContext {
  health: number | string;
  controller: any;
  cassettes: ICassette[];
}

export const SYSTEM = "system";
export const COMMANDS = "commands";
export const MESSAGE = "message";
export const JOIN = "join";

export type DBSchema = {
  test: { name: string };
  [SYSTEM]: {
    [COMMANDS]: string;
  };
};
