export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export enum ApiEventType {
  Initialized = 'INITIALIZED',
  Reset = 'RESET'
}

export type BwaConfig = {
  cassettes: Array<Maybe<Scalars['String']>>,
  botName: Scalars['String'],
};

export type BwaEvent = {
  eventType: ApiEventType,
  payload: Maybe<BwaConfig>,
};

export type Mutation = {
  sendEvent: Maybe<Status>,
};


export type MutationSendEventArgs = {
  event: BwaEvent
};

export type Query = {
  getStatus: Maybe<Status>,
};

export type Status = {
  currentState: Maybe<Scalars['String']>,
  affordances: Maybe<Array<Maybe<Scalars['String']>>>,
};
