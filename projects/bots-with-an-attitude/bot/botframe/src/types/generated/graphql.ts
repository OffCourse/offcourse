export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Event = {
  type: Maybe<Scalars['String']>,
};

export type Mutation = {
  sendEvent: Maybe<Status>,
};


export type MutationSendEventArgs = {
  event: Event
};

export type Query = {
  getStatus: Maybe<Status>,
};

export type Status = {
  currentState: Maybe<Scalars['String']>,
  affordances: Maybe<Array<Maybe<Scalars['String']>>>,
};
