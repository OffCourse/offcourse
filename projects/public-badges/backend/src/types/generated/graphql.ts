import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ValueCaseProxy, PublicBadgeProxy, OpenBadgesArtifactProxy } from '../models';
import { ApolloContext } from '../../handlers/graphql/context';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  URL: any,
  GUID: any,
  EmailAddress: string,
  JSON: string,
};

export type ApprovedOrganization = Organization & {
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  approvedBy: Scalars['EmailAddress'],
  approvedOn: Scalars['String'],
  domainName: Scalars['URL'],
  urls: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type ApprovedPublicBadge = PublicBadge & {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  recipient: Organization,
};

export type Contact = {
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};

export type ContactInput = {
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};



export type Issuer = {
  issuerId: Scalars['URL'],
  type: Maybe<Scalars['String']>,
  name: Maybe<Scalars['String']>,
  email: Scalars['EmailAddress'],
};


export type Mutation = {
  applyForBadge: Maybe<PublicBadge>,
  registerOrganization: Maybe<PendingOrganization>,
};


export type MutationApplyForBadgeArgs = {
  input: PublicBadgeInput
};


export type MutationRegisterOrganizationArgs = {
  input: OrganizationInput
};

export type OpenBadge = {
  id: Scalars['String'],
  badge: OpenBadgeClass,
  recipient: OpenBadgeRecipient,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  evidence: Array<Maybe<OpenBadgeProof>>,
};

export type OpenBadgeArtifact = {
  signature: Scalars['String'],
  json: Scalars['JSON'],
};

export type OpenBadgeClass = {
  id: Scalars['String'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  criteria: OpenBadgeCriteria,
};

export type OpenBadgeCriteria = {
  narrative: Scalars['String'],
};

export type OpenBadgeProof = {
  id: Scalars['String'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type OpenBadgeRecipient = {
  identity: Scalars['String'],
  type: Scalars['String'],
};

export type Organization = {
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domainName: Scalars['URL'],
  urls: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type OrganizationInput = {
  name: Scalars['String'],
  contact: ContactInput,
  admin: ContactInput,
  domainName: Scalars['URL'],
};

export enum OrganizationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED'
}

export type PendingOrganization = Organization & {
  organizationId: Scalars['GUID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domainName: Scalars['URL'],
  urls: Maybe<Array<Maybe<Scalars['URL']>>>,
};

export type PendingPublicBadge = PublicBadge & {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  recipient: Organization,
};

export type Proof = {
  proofId: Scalars['GUID'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Array<Scalars['String']>,
};

export type PublicBadge = {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  recipient: Organization,
};

export type PublicBadgeInput = {
  valueCaseId: Scalars['ID'],
  domainName: Scalars['URL'],
};

export enum PublicBadgeStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Signed = 'SIGNED',
  Rejected = 'REJECTED'
}

export type Query = {
  getAllBadges: Maybe<Array<Maybe<PublicBadge>>>,
};


export type QueryGetAllBadgesArgs = {
  domainName: Scalars['URL']
};

export type RejectedPublicBadge = PublicBadge & {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  recipient: Organization,
};

export type Scenario = {
  description: Scalars['String'],
  narrative: Array<Scalars['String']>,
};

export type SignedPublicBadge = PublicBadge & {
  badgeId: Scalars['GUID'],
  status: PublicBadgeStatus,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Proof>,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  artifact: OpenBadgeArtifact,
  recipient: Organization,
};


export type ValueCase = {
  valueCaseId: Scalars['GUID'],
  image: Scalars['URL'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  proposedBy: Organization,
  approvedBy: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
  scenarios: Array<Scenario>,
};

export type ValueCaseInput = {
  domainName: Scalars['URL'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  narrative: Scalars['String'],
  description: Scalars['String'],
};

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
  URL: ResolverTypeWrapper<Scalars['URL']>,
  PublicBadge: ResolverTypeWrapper<PublicBadgeProxy>,
  GUID: ResolverTypeWrapper<Scalars['GUID']>,
  PublicBadgeStatus: PublicBadgeStatus,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  ValueCase: ResolverTypeWrapper<ValueCaseProxy>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Organization: ResolverTypeWrapper<Organization>,
  OrganizationStatus: OrganizationStatus,
  Contact: ResolverTypeWrapper<Contact>,
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>,
  Scenario: ResolverTypeWrapper<Scenario>,
  Mutation: ResolverTypeWrapper<{}>,
  PublicBadgeInput: PublicBadgeInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  PendingOrganization: ResolverTypeWrapper<PendingOrganization>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Issuer: ResolverTypeWrapper<Issuer>,
  OpenBadgeRecipient: ResolverTypeWrapper<OpenBadgeRecipient>,
  OpenBadgeArtifact: ResolverTypeWrapper<OpenBadgesArtifactProxy>,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  OpenBadgeProof: ResolverTypeWrapper<OpenBadgeProof>,
  OpenBadgeCriteria: ResolverTypeWrapper<OpenBadgeCriteria>,
  OpenBadgeClass: ResolverTypeWrapper<OpenBadgeClass>,
  OpenBadge: ResolverTypeWrapper<OpenBadge>,
  ApprovedOrganization: ResolverTypeWrapper<ApprovedOrganization>,
  Proof: ResolverTypeWrapper<Proof>,
  PendingPublicBadge: ResolverTypeWrapper<Omit<PendingPublicBadge, 'valueCase'> & { valueCase: ResolversTypes['ValueCase'] }>,
  ApprovedPublicBadge: ResolverTypeWrapper<Omit<ApprovedPublicBadge, 'valueCase'> & { valueCase: ResolversTypes['ValueCase'] }>,
  RejectedPublicBadge: ResolverTypeWrapper<Omit<RejectedPublicBadge, 'valueCase'> & { valueCase: ResolversTypes['ValueCase'] }>,
  SignedPublicBadge: ResolverTypeWrapper<Omit<SignedPublicBadge, 'valueCase' | 'artifact'> & { valueCase: ResolversTypes['ValueCase'], artifact: ResolversTypes['OpenBadgeArtifact'] }>,
  ValueCaseInput: ValueCaseInput,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  URL: Scalars['URL'],
  PublicBadge: PublicBadgeProxy,
  GUID: Scalars['GUID'],
  PublicBadgeStatus: PublicBadgeStatus,
  ID: Scalars['ID'],
  ValueCase: ValueCaseProxy,
  String: Scalars['String'],
  Organization: Organization,
  OrganizationStatus: OrganizationStatus,
  Contact: Contact,
  EmailAddress: Scalars['EmailAddress'],
  Scenario: Scenario,
  Mutation: {},
  PublicBadgeInput: PublicBadgeInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  PendingOrganization: PendingOrganization,
  Boolean: Scalars['Boolean'],
  Issuer: Issuer,
  OpenBadgeRecipient: OpenBadgeRecipient,
  OpenBadgeArtifact: OpenBadgesArtifactProxy,
  JSON: Scalars['JSON'],
  OpenBadgeProof: OpenBadgeProof,
  OpenBadgeCriteria: OpenBadgeCriteria,
  OpenBadgeClass: OpenBadgeClass,
  OpenBadge: OpenBadge,
  ApprovedOrganization: ApprovedOrganization,
  Proof: Proof,
  PendingPublicBadge: Omit<PendingPublicBadge, 'valueCase'> & { valueCase: ResolversParentTypes['ValueCase'] },
  ApprovedPublicBadge: Omit<ApprovedPublicBadge, 'valueCase'> & { valueCase: ResolversParentTypes['ValueCase'] },
  RejectedPublicBadge: Omit<RejectedPublicBadge, 'valueCase'> & { valueCase: ResolversParentTypes['ValueCase'] },
  SignedPublicBadge: Omit<SignedPublicBadge, 'valueCase' | 'artifact'> & { valueCase: ResolversParentTypes['ValueCase'], artifact: ResolversParentTypes['OpenBadgeArtifact'] },
  ValueCaseInput: ValueCaseInput,
}>;

export type ApprovedOrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ApprovedOrganization'] = ResolversParentTypes['ApprovedOrganization']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  approvedBy: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>,
  approvedOn: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  domainName: Resolver<ResolversTypes['URL'], ParentType, ContextType>,
  urls: Resolver<Maybe<Array<Maybe<ResolversTypes['URL']>>>, ParentType, ContextType>,
}>;

export type ApprovedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ApprovedPublicBadge'] = ResolversParentTypes['ApprovedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['PublicBadgeStatus'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<ResolversTypes['Proof']>, ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
}>;

export type ContactResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>,
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID'
}

export type IssuerResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Issuer'] = ResolversParentTypes['Issuer']> = ResolversObject<{
  issuerId: Resolver<ResolversTypes['URL'], ParentType, ContextType>,
  type: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>,
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  applyForBadge: Resolver<Maybe<ResolversTypes['PublicBadge']>, ParentType, ContextType, RequireFields<MutationApplyForBadgeArgs, 'input'>>,
  registerOrganization: Resolver<Maybe<ResolversTypes['PendingOrganization']>, ParentType, ContextType, RequireFields<MutationRegisterOrganizationArgs, 'input'>>,
}>;

export type OpenBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadge'] = ResolversParentTypes['OpenBadge']> = ResolversObject<{
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  badge: Resolver<ResolversTypes['OpenBadgeClass'], ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['OpenBadgeRecipient'], ParentType, ContextType>,
  issuedOn: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expires: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  evidence: Resolver<Array<Maybe<ResolversTypes['OpenBadgeProof']>>, ParentType, ContextType>,
}>;

export type OpenBadgeArtifactResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeArtifact'] = ResolversParentTypes['OpenBadgeArtifact']> = ResolversObject<{
  signature: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  json: Resolver<ResolversTypes['JSON'], ParentType, ContextType>,
}>;

export type OpenBadgeClassResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeClass'] = ResolversParentTypes['OpenBadgeClass']> = ResolversObject<{
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  criteria: Resolver<ResolversTypes['OpenBadgeCriteria'], ParentType, ContextType>,
}>;

export type OpenBadgeCriteriaResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeCriteria'] = ResolversParentTypes['OpenBadgeCriteria']> = ResolversObject<{
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type OpenBadgeProofResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeProof'] = ResolversParentTypes['OpenBadgeProof']> = ResolversObject<{
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  genre: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type OpenBadgeRecipientResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['OpenBadgeRecipient'] = ResolversParentTypes['OpenBadgeRecipient']> = ResolversObject<{
  identity: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type OrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PendingOrganization' | 'ApprovedOrganization', ParentType, ContextType>,
  organizationId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domainName: Resolver<ResolversTypes['URL'], ParentType, ContextType>,
  urls: Resolver<Maybe<Array<Maybe<ResolversTypes['URL']>>>, ParentType, ContextType>,
}>;

export type PendingOrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PendingOrganization'] = ResolversParentTypes['PendingOrganization']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domainName: Resolver<ResolversTypes['URL'], ParentType, ContextType>,
  urls: Resolver<Maybe<Array<Maybe<ResolversTypes['URL']>>>, ParentType, ContextType>,
}>;

export type PendingPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PendingPublicBadge'] = ResolversParentTypes['PendingPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['PublicBadgeStatus'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
}>;

export type ProofResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Proof'] = ResolversParentTypes['Proof']> = ResolversObject<{
  proofId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  genre: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type PublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PublicBadge'] = ResolversParentTypes['PublicBadge']> = ResolversObject<{
  __resolveType: TypeResolveFn<'PendingPublicBadge' | 'ApprovedPublicBadge' | 'RejectedPublicBadge' | 'SignedPublicBadge', ParentType, ContextType>,
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['PublicBadgeStatus'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllBadges: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicBadge']>>>, ParentType, ContextType, RequireFields<QueryGetAllBadgesArgs, 'domainName'>>,
}>;

export type RejectedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RejectedPublicBadge'] = ResolversParentTypes['RejectedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['PublicBadgeStatus'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<ResolversTypes['Proof']>, ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
}>;

export type ScenarioResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = ResolversObject<{
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type SignedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SignedPublicBadge'] = ResolversParentTypes['SignedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['PublicBadgeStatus'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<ResolversTypes['Proof']>, ParentType, ContextType>,
  issuedOn: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expires: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  artifact: Resolver<ResolversTypes['OpenBadgeArtifact'], ParentType, ContextType>,
  recipient: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL'
}

export type ValueCaseResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ValueCase'] = ResolversParentTypes['ValueCase']> = ResolversObject<{
  valueCaseId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  image: Resolver<ResolversTypes['URL'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  proposedBy: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
  approvedBy: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  scenarios: Resolver<Array<ResolversTypes['Scenario']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  ApprovedOrganization: ApprovedOrganizationResolvers<ContextType>,
  ApprovedPublicBadge: ApprovedPublicBadgeResolvers<ContextType>,
  Contact: ContactResolvers<ContextType>,
  EmailAddress: GraphQLScalarType,
  GUID: GraphQLScalarType,
  Issuer: IssuerResolvers<ContextType>,
  JSON: GraphQLScalarType,
  Mutation: MutationResolvers<ContextType>,
  OpenBadge: OpenBadgeResolvers<ContextType>,
  OpenBadgeArtifact: OpenBadgeArtifactResolvers<ContextType>,
  OpenBadgeClass: OpenBadgeClassResolvers<ContextType>,
  OpenBadgeCriteria: OpenBadgeCriteriaResolvers<ContextType>,
  OpenBadgeProof: OpenBadgeProofResolvers<ContextType>,
  OpenBadgeRecipient: OpenBadgeRecipientResolvers<ContextType>,
  Organization: OrganizationResolvers,
  PendingOrganization: PendingOrganizationResolvers<ContextType>,
  PendingPublicBadge: PendingPublicBadgeResolvers<ContextType>,
  Proof: ProofResolvers<ContextType>,
  PublicBadge: PublicBadgeResolvers,
  Query: QueryResolvers<ContextType>,
  RejectedPublicBadge: RejectedPublicBadgeResolvers<ContextType>,
  Scenario: ScenarioResolvers<ContextType>,
  SignedPublicBadge: SignedPublicBadgeResolvers<ContextType>,
  URL: GraphQLScalarType,
  ValueCase: ValueCaseResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
