import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Badge = {
   __typename?: 'Badge',
  id: Scalars['ID'],
  score: Score,
  type?: Maybe<Scalars['String']>,
  recipient?: Maybe<Recipient>,
  issuedOn?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['String']>,
  artifact?: Maybe<BadgeArtifact>,
};

export type BadgeArtifact = {
   __typename?: 'BadgeArtifact',
  json?: Maybe<Scalars['String']>,
  yaml?: Maybe<Scalars['String']>,
};

export type BadgeClass = {
   __typename?: 'BadgeClass',
  name?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  Score?: Maybe<Score>,
};

export type Query = {
   __typename?: 'Query',
  getBadge?: Maybe<Badge>,
};


export type QueryGetBadgeArgs = {
  badgeId: Scalars['ID']
};

export type Recipient = {
   __typename?: 'Recipient',
  type?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type Score = {
   __typename?: 'Score',
  accountable?: Maybe<Scalars['Int']>,
  sovereign?: Maybe<Scalars['Int']>,
  userCentric?: Maybe<Scalars['Int']>,
  transparent?: Maybe<Scalars['Int']>,
  open?: Maybe<Scalars['Int']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Badge: ResolverTypeWrapper<Badge>,
  Score: ResolverTypeWrapper<Score>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Recipient: ResolverTypeWrapper<Recipient>,
  BadgeArtifact: ResolverTypeWrapper<BadgeArtifact>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  BadgeClass: ResolverTypeWrapper<BadgeClass>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  Badge: Badge,
  Score: Score,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Recipient: Recipient,
  BadgeArtifact: BadgeArtifact,
  Boolean: Scalars['Boolean'],
  BadgeClass: BadgeClass,
};

export type BadgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Badge'] = ResolversParentTypes['Badge']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  score?: Resolver<ResolversTypes['Score'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  recipient?: Resolver<Maybe<ResolversTypes['Recipient']>, ParentType, ContextType>,
  issuedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  expires?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artifact?: Resolver<Maybe<ResolversTypes['BadgeArtifact']>, ParentType, ContextType>,
};

export type BadgeArtifactResolvers<ContextType = any, ParentType extends ResolversParentTypes['BadgeArtifact'] = ResolversParentTypes['BadgeArtifact']> = {
  json?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  yaml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type BadgeClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['BadgeClass'] = ResolversParentTypes['BadgeClass']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  Score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getBadge?: Resolver<Maybe<ResolversTypes['Badge']>, ParentType, ContextType, RequireFields<QueryGetBadgeArgs, 'badgeId'>>,
};

export type RecipientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipient'] = ResolversParentTypes['Recipient']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = {
  accountable?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sovereign?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  userCentric?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  transparent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  open?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Badge?: BadgeResolvers<ContextType>,
  BadgeArtifact?: BadgeArtifactResolvers<ContextType>,
  BadgeClass?: BadgeClassResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Recipient?: RecipientResolvers<ContextType>,
  Score?: ScoreResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

import gql from 'graphql-tag';
