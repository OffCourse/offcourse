import { GraphQLResolveInfo } from 'graphql';
import { OpenBadge, OpenBadgeProof, ApolloContext } from '../types';
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

export type ApprovedPublicBadge = PublicBadge & {
   __typename?: 'ApprovedPublicBadge',
  badgeId: Scalars['ID'],
  status: Status,
  badgeClassId: Scalars['ID'],
  badgeClass: PublicBadgeClass,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Maybe<Proof>>,
};

export type Contact = {
   __typename?: 'Contact',
  name: Maybe<Scalars['String']>,
  email: Maybe<Scalars['String']>,
};

export type ContactInput = {
  name: Maybe<Scalars['String']>,
  email: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  addBadgeClass: Maybe<PublicBadgeClass>,
  registerOrganization: Maybe<Organization>,
};


export type MutationAddBadgeClassArgs = {
  input: PublicBadgeClassInput
};


export type MutationRegisterOrganizationArgs = {
  input: OrganizationInput
};

export type OpenBadgeArtifact = {
   __typename?: 'OpenBadgeArtifact',
  json: Scalars['String'],
};

export type Organization = {
   __typename?: 'Organization',
  organizationId: Scalars['ID'],
  status: Status,
  path: Scalars['String'],
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domains: Array<Maybe<Scalars['String']>>,
};

export type OrganizationInput = {
  name: Scalars['String'],
  contact: ContactInput,
  admin: ContactInput,
  domains: Array<Maybe<Scalars['String']>>,
};

export type Proof = {
   __typename?: 'Proof',
  proofId: Scalars['ID'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type PublicBadge = {
  badgeId: Scalars['ID'],
  status: Status,
  badgeClassId: Scalars['ID'],
  badgeClass: PublicBadgeClass,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
};

export type PublicBadgeClass = {
   __typename?: 'PublicBadgeClass',
  badgeClassId: Scalars['ID'],
  name: Maybe<Scalars['String']>,
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type PublicBadgeClassInput = {
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  narrative: Scalars['String'],
  description: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  getBadge: Maybe<PublicBadge>,
  getAllBadges: Maybe<Array<Maybe<PublicBadge>>>,
  getOrganization: Maybe<Organization>,
  getAllOrganizations: Maybe<Array<Maybe<Organization>>>,
};


export type QueryGetBadgeArgs = {
  badgeId: Scalars['ID']
};


export type QueryGetOrganizationArgs = {
  organizationId: Scalars['ID']
};

export type RequestedPublicBadge = PublicBadge & {
   __typename?: 'RequestedPublicBadge',
  badgeId: Scalars['ID'],
  status: Status,
  badgeClassId: Scalars['ID'],
  badgeClass: PublicBadgeClass,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
};

export type SignedPublicBadge = PublicBadge & {
   __typename?: 'SignedPublicBadge',
  badgeId: Scalars['ID'],
  status: Status,
  badgeClassId: Scalars['ID'],
  badgeClass: PublicBadgeClass,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Maybe<Proof>>,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  artifact: OpenBadgeArtifact,
};

export enum Status {
  Requested = 'REQUESTED',
  Approved = 'APPROVED',
  Signed = 'SIGNED'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  PublicBadge: ResolverTypeWrapper<OpenBadge>,
  Status: Status,
  PublicBadgeClass: ResolverTypeWrapper<PublicBadgeClass>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Organization: ResolverTypeWrapper<Organization>,
  Contact: ResolverTypeWrapper<Contact>,
  Mutation: ResolverTypeWrapper<{}>,
  PublicBadgeClassInput: PublicBadgeClassInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Proof: ResolverTypeWrapper<OpenBadgeProof>,
  OpenBadgeArtifact: ResolverTypeWrapper<OpenBadge>,
  RequestedPublicBadge: ResolverTypeWrapper<OpenBadge>,
  ApprovedPublicBadge: ResolverTypeWrapper<OpenBadge>,
  SignedPublicBadge: ResolverTypeWrapper<OpenBadge>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  ID: Scalars['ID'],
  PublicBadge: OpenBadge,
  Status: Status,
  PublicBadgeClass: PublicBadgeClass,
  String: Scalars['String'],
  Organization: Organization,
  Contact: Contact,
  Mutation: {},
  PublicBadgeClassInput: PublicBadgeClassInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  Boolean: Scalars['Boolean'],
  Proof: OpenBadgeProof,
  OpenBadgeArtifact: OpenBadge,
  RequestedPublicBadge: OpenBadge,
  ApprovedPublicBadge: OpenBadge,
  SignedPublicBadge: OpenBadge,
}>;

export type ApprovedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ApprovedPublicBadge'] = ResolversParentTypes['ApprovedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  badgeClassId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  badgeClass: Resolver<ResolversTypes['PublicBadgeClass'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<Maybe<ResolversTypes['Proof']>>, ParentType, ContextType>,
}>;

export type ContactResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBadgeClass: Resolver<Maybe<ResolversTypes['PublicBadgeClass']>, ParentType, ContextType, RequireFields<MutationAddBadgeClassArgs, 'input'>>,
  registerOrganization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationRegisterOrganizationArgs, 'input'>>,
}>;

export type OpenBadgeArtifactResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeArtifact'] = ResolversParentTypes['OpenBadgeArtifact']> = ResolversObject<{
  json: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type OrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  path: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domains: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
}>;

export type ProofResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Proof'] = ResolversParentTypes['Proof']> = ResolversObject<{
  proofId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  genre: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type PublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PublicBadge'] = ResolversParentTypes['PublicBadge']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RequestedPublicBadge' | 'ApprovedPublicBadge' | 'SignedPublicBadge', ParentType, ContextType>,
  badgeId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  badgeClassId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  badgeClass: Resolver<ResolversTypes['PublicBadgeClass'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type PublicBadgeClassResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PublicBadgeClass'] = ResolversParentTypes['PublicBadgeClass']> = ResolversObject<{
  badgeClassId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBadge: Resolver<Maybe<ResolversTypes['PublicBadge']>, ParentType, ContextType, RequireFields<QueryGetBadgeArgs, 'badgeId'>>,
  getAllBadges: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicBadge']>>>, ParentType, ContextType>,
  getOrganization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryGetOrganizationArgs, 'organizationId'>>,
  getAllOrganizations: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>,
}>;

export type RequestedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RequestedPublicBadge'] = ResolversParentTypes['RequestedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  badgeClassId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  badgeClass: Resolver<ResolversTypes['PublicBadgeClass'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type SignedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SignedPublicBadge'] = ResolversParentTypes['SignedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  badgeClassId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  badgeClass: Resolver<ResolversTypes['PublicBadgeClass'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<Maybe<ResolversTypes['Proof']>>, ParentType, ContextType>,
  issuedOn: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expires: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  artifact: Resolver<ResolversTypes['OpenBadgeArtifact'], ParentType, ContextType>,
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  ApprovedPublicBadge: ApprovedPublicBadgeResolvers<ContextType>,
  Contact: ContactResolvers<ContextType>,
  Mutation: MutationResolvers<ContextType>,
  OpenBadgeArtifact: OpenBadgeArtifactResolvers<ContextType>,
  Organization: OrganizationResolvers<ContextType>,
  Proof: ProofResolvers<ContextType>,
  PublicBadge: PublicBadgeResolvers,
  PublicBadgeClass: PublicBadgeClassResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
  RequestedPublicBadge: RequestedPublicBadgeResolvers<ContextType>,
  SignedPublicBadge: SignedPublicBadgeResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
