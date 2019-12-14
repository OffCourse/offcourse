import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ValueCaseProxy } from '../types/index';
import { ApolloContext } from '../types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  GUID: any,
  ValueCaseID: any,
  EmailAddress: string,
  JSON: string,
};

export type ApprovedOrganization = Organization & {
   __typename?: 'ApprovedOrganization',
  organizationId: Scalars['ID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domains: Domains,
  approvedBy: Scalars['EmailAddress'],
  approvedOn: Scalars['String'],
};

export type ApprovedPublicBadge = PublicBadge & {
   __typename?: 'ApprovedPublicBadge',
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
  evidence: Array<Maybe<Proof>>,
};

export type Contact = {
   __typename?: 'Contact',
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};

export type ContactInput = {
  name: Scalars['String'],
  email: Scalars['EmailAddress'],
};

export type Domains = {
   __typename?: 'Domains',
  main: Scalars['String'],
  other: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type DomainsInput = {
  main: Scalars['String'],
  other: Maybe<Array<Maybe<Scalars['String']>>>,
};




export type Mutation = {
   __typename?: 'Mutation',
  proposeValueCase: Scalars['String'],
  registerOrganization: Maybe<PendingOrganization>,
};


export type MutationProposeValueCaseArgs = {
  input: ValueCaseInput
};


export type MutationRegisterOrganizationArgs = {
  input: OrganizationInput
};

export type OpenBadge = {
   __typename?: 'OpenBadge',
  id: Scalars['String'],
  badge: OpenBadgeClass,
  recipient: OpenBadgeRecipient,
  issuedOn: Scalars['String'],
  expires: Scalars['String'],
  evidence: Array<Maybe<OpenBadgeProof>>,
};

export type OpenBadgeArtifact = {
   __typename?: 'OpenBadgeArtifact',
  json: Scalars['JSON'],
  js: OpenBadge,
};

export type OpenBadgeClass = {
   __typename?: 'OpenBadgeClass',
  id: Scalars['String'],
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  criteria: OpenBadgeCriteria,
};

export type OpenBadgeCriteria = {
   __typename?: 'OpenBadgeCriteria',
  narrative: Scalars['String'],
};

export type OpenBadgeProof = {
   __typename?: 'OpenBadgeProof',
  id: Scalars['String'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type OpenBadgeRecipient = {
   __typename?: 'OpenBadgeRecipient',
  identity: Scalars['String'],
  type: Scalars['String'],
};

export type Organization = {
  organizationId: Scalars['ID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domains: Domains,
};

export type OrganizationInput = {
  name: Scalars['String'],
  contact: ContactInput,
  admin: ContactInput,
  domains: DomainsInput,
};

export enum OrganizationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED'
}

export type PendingOrganization = Organization & {
   __typename?: 'PendingOrganization',
  organizationId: Scalars['ID'],
  status: OrganizationStatus,
  name: Scalars['String'],
  contact: Contact,
  admin: Contact,
  domains: Domains,
};

export type Proof = {
   __typename?: 'Proof',
  proofId: Scalars['GUID'],
  name: Scalars['String'],
  genre: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
};

export type ProposedBy = {
   __typename?: 'ProposedBy',
  organizationId: Scalars['String'],
};

export type PublicBadge = {
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
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
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
  name: Scalars['String'],
  tags: Array<Maybe<Scalars['String']>>,
  description: Scalars['String'],
  narrative: Scalars['String'],
  recipientId: Scalars['ID'],
};

export type Scenario = {
   __typename?: 'Scenario',
  title: Scalars['String'],
  statements: Array<Maybe<Scalars['String']>>,
};

export type SignedPublicBadge = PublicBadge & {
   __typename?: 'SignedPublicBadge',
  badgeId: Scalars['GUID'],
  status: Status,
  valueCaseId: Scalars['ID'],
  valueCase: ValueCase,
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

export type ValueCase = {
   __typename?: 'ValueCase',
  valueCaseId: Scalars['ValueCaseID'],
  name: Maybe<Scalars['String']>,
  tags: Array<Maybe<Scalars['String']>>,
  proposedBy: Organization,
  approvedBy: Scalars['String'],
  description: Scalars['String'],
  narrative: Scalars['String'],
  scenarios: Array<Maybe<Scenario>>,
};


export type ValueCaseInput = {
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
  ID: ResolverTypeWrapper<Scalars['ID']>,
  PublicBadge: ResolverTypeWrapper<OpenBadge>,
  GUID: ResolverTypeWrapper<Scalars['GUID']>,
  Status: Status,
  ValueCase: ResolverTypeWrapper<ValueCaseProxy>,
  ValueCaseID: ResolverTypeWrapper<Scalars['ValueCaseID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Organization: ResolverTypeWrapper<Organization>,
  OrganizationStatus: OrganizationStatus,
  Contact: ResolverTypeWrapper<Contact>,
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>,
  Domains: ResolverTypeWrapper<Domains>,
  Scenario: ResolverTypeWrapper<Scenario>,
  Mutation: ResolverTypeWrapper<{}>,
  ValueCaseInput: ValueCaseInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  DomainsInput: DomainsInput,
  PendingOrganization: ResolverTypeWrapper<PendingOrganization>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  OpenBadgeRecipient: ResolverTypeWrapper<OpenBadgeRecipient>,
  OpenBadgeProof: ResolverTypeWrapper<OpenBadgeProof>,
  OpenBadgeCriteria: ResolverTypeWrapper<OpenBadgeCriteria>,
  OpenBadgeClass: ResolverTypeWrapper<OpenBadgeClass>,
  OpenBadge: ResolverTypeWrapper<OpenBadge>,
  OpenBadgeArtifact: ResolverTypeWrapper<OpenBadge>,
  JSON: ResolverTypeWrapper<Scalars['JSON']>,
  ApprovedOrganization: ResolverTypeWrapper<ApprovedOrganization>,
  Proof: ResolverTypeWrapper<OpenBadgeProof>,
  RequestedPublicBadge: ResolverTypeWrapper<OpenBadge>,
  ApprovedPublicBadge: ResolverTypeWrapper<OpenBadge>,
  SignedPublicBadge: ResolverTypeWrapper<OpenBadge>,
  ProposedBy: ResolverTypeWrapper<ProposedBy>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  ID: Scalars['ID'],
  PublicBadge: OpenBadge,
  GUID: Scalars['GUID'],
  Status: Status,
  ValueCase: ValueCaseProxy,
  ValueCaseID: Scalars['ValueCaseID'],
  String: Scalars['String'],
  Organization: Organization,
  OrganizationStatus: OrganizationStatus,
  Contact: Contact,
  EmailAddress: Scalars['EmailAddress'],
  Domains: Domains,
  Scenario: Scenario,
  Mutation: {},
  ValueCaseInput: ValueCaseInput,
  OrganizationInput: OrganizationInput,
  ContactInput: ContactInput,
  DomainsInput: DomainsInput,
  PendingOrganization: PendingOrganization,
  Boolean: Scalars['Boolean'],
  OpenBadgeRecipient: OpenBadgeRecipient,
  OpenBadgeProof: OpenBadgeProof,
  OpenBadgeCriteria: OpenBadgeCriteria,
  OpenBadgeClass: OpenBadgeClass,
  OpenBadge: OpenBadge,
  OpenBadgeArtifact: OpenBadge,
  JSON: Scalars['JSON'],
  ApprovedOrganization: ApprovedOrganization,
  Proof: OpenBadgeProof,
  RequestedPublicBadge: OpenBadge,
  ApprovedPublicBadge: OpenBadge,
  SignedPublicBadge: OpenBadge,
  ProposedBy: ProposedBy,
}>;

export type ApprovedOrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ApprovedOrganization'] = ResolversParentTypes['ApprovedOrganization']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domains: Resolver<ResolversTypes['Domains'], ParentType, ContextType>,
  approvedBy: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>,
  approvedOn: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ApprovedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ApprovedPublicBadge'] = ResolversParentTypes['ApprovedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  evidence: Resolver<Array<Maybe<ResolversTypes['Proof']>>, ParentType, ContextType>,
}>;

export type ContactResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>,
}>;

export type DomainsResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Domains'] = ResolversParentTypes['Domains']> = ResolversObject<{
  main: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  other: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID'
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  proposeValueCase: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationProposeValueCaseArgs, 'input'>>,
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
  json: Resolver<ResolversTypes['JSON'], ParentType, ContextType>,
  js: Resolver<ResolversTypes['OpenBadge'], ParentType, ContextType>,
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
  organizationId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domains: Resolver<ResolversTypes['Domains'], ParentType, ContextType>,
}>;

export type PendingOrganizationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PendingOrganization'] = ResolversParentTypes['PendingOrganization']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['OrganizationStatus'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  contact: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  admin: Resolver<ResolversTypes['Contact'], ParentType, ContextType>,
  domains: Resolver<ResolversTypes['Domains'], ParentType, ContextType>,
}>;

export type ProofResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Proof'] = ResolversParentTypes['Proof']> = ResolversObject<{
  proofId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  genre: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type ProposedByResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ProposedBy'] = ResolversParentTypes['ProposedBy']> = ResolversObject<{
  organizationId: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export type PublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PublicBadge'] = ResolversParentTypes['PublicBadge']> = ResolversObject<{
  __resolveType: TypeResolveFn<'RequestedPublicBadge' | 'ApprovedPublicBadge' | 'SignedPublicBadge', ParentType, ContextType>,
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getBadge: Resolver<Maybe<ResolversTypes['PublicBadge']>, ParentType, ContextType, RequireFields<QueryGetBadgeArgs, 'badgeId'>>,
  getAllBadges: Resolver<Maybe<Array<Maybe<ResolversTypes['PublicBadge']>>>, ParentType, ContextType>,
  getOrganization: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryGetOrganizationArgs, 'organizationId'>>,
  getAllOrganizations: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>,
}>;

export type RequestedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['RequestedPublicBadge'] = ResolversParentTypes['RequestedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  recipientId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
}>;

export type ScenarioResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = ResolversObject<{
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  statements: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
}>;

export type SignedPublicBadgeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['SignedPublicBadge'] = ResolversParentTypes['SignedPublicBadge']> = ResolversObject<{
  badgeId: Resolver<ResolversTypes['GUID'], ParentType, ContextType>,
  status: Resolver<ResolversTypes['Status'], ParentType, ContextType>,
  valueCaseId: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  valueCase: Resolver<ResolversTypes['ValueCase'], ParentType, ContextType>,
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

export type ValueCaseResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['ValueCase'] = ResolversParentTypes['ValueCase']> = ResolversObject<{
  valueCaseId: Resolver<ResolversTypes['ValueCaseID'], ParentType, ContextType>,
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tags: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>,
  proposedBy: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
  approvedBy: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  narrative: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  scenarios: Resolver<Array<Maybe<ResolversTypes['Scenario']>>, ParentType, ContextType>,
}>;

export interface ValueCaseIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ValueCaseID'], any> {
  name: 'ValueCaseID'
}

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  ApprovedOrganization: ApprovedOrganizationResolvers<ContextType>,
  ApprovedPublicBadge: ApprovedPublicBadgeResolvers<ContextType>,
  Contact: ContactResolvers<ContextType>,
  Domains: DomainsResolvers<ContextType>,
  EmailAddress: GraphQLScalarType,
  GUID: GraphQLScalarType,
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
  Proof: ProofResolvers<ContextType>,
  ProposedBy: ProposedByResolvers<ContextType>,
  PublicBadge: PublicBadgeResolvers,
  Query: QueryResolvers<ContextType>,
  RequestedPublicBadge: RequestedPublicBadgeResolvers<ContextType>,
  Scenario: ScenarioResolvers<ContextType>,
  SignedPublicBadge: SignedPublicBadgeResolvers<ContextType>,
  ValueCase: ValueCaseResolvers<ContextType>,
  ValueCaseID: GraphQLScalarType,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
