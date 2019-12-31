export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum EventType {
  Initialized = 'INITIALIZED',
  Error = 'ERROR',
  Reset = 'RESET'
}

export type Mutation = {
  sendEvent: Maybe<Status>,
};


export type MutationSendEventArgs = {
  eventType: EventType
};

export type Query = {
  getStatus: Maybe<Status>,
};

export type Status = {
  currentState: Maybe<Scalars['String']>,
  affordances: Maybe<Array<Maybe<Scalars['String']>>>,
};
