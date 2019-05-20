export type Maybe<T> = T | null;

export interface UserInput {
  id: string;

  user: string;

  email: string;

  roles?: Maybe<(Maybe<string>)[]>;
}

export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  search: SearchOption[];

  enumerator: DropdownOption[];

  config?: Maybe<Config>;

  find?: Maybe<Json>;

  findOne?: Maybe<Data>;

  resume?: Maybe<AuthPayload>;
}

export interface SearchOption {
  key?: Maybe<string>;

  value?: Maybe<string>;

  title?: Maybe<string>;

  titles?: Maybe<string[]>;

  description?: Maybe<string>;
}

export interface DropdownOption {
  key?: Maybe<string>;

  value?: Maybe<string>;

  text?: Maybe<string>;

  description?: Maybe<string>;
}

export interface Config {
  config?: Maybe<string>;

  users?: Maybe<(Maybe<User>)[]>;
}

export interface User {
  id: string;

  user: string;

  email: string;

  password?: Maybe<string>;

  roles?: Maybe<(Maybe<string>)[]>;
}

export interface Data {
  id?: Maybe<string>;

  table?: Maybe<string>;

  key?: Maybe<string>;

  data?: Maybe<Json>;
}

export interface AuthPayload {
  token?: Maybe<string>;

  user?: Maybe<User>;
}

export interface Mutation {
  save?: Maybe<Data>;

  saveConfig?: Maybe<boolean>;

  signup?: Maybe<AuthPayload>;

  login?: Maybe<AuthPayload>;
}

// ====================================================
// Arguments
// ====================================================

export interface SearchQueryArgs {
  searchString: string;

  name?: Maybe<string>;

  id?: Maybe<string>;
}
export interface EnumeratorQueryArgs {
  name?: Maybe<string>;
}
export interface FindQueryArgs {
  searchString: string;

  name: string;

  limit?: Maybe<number>;
}
export interface FindOneQueryArgs {
  id: string;

  table: string;
}
export interface ResumeQueryArgs {
  token: string;
}
export interface SaveMutationArgs {
  table?: Maybe<string>;

  data?: Maybe<Json>;
}
export interface SaveConfigMutationArgs {
  config?: Maybe<string>;

  users?: Maybe<(Maybe<UserInput>)[]>;
}
export interface SignupMutationArgs {
  email: string;

  password: string;

  name: string;
}
export interface LoginMutationArgs {
  email: string;

  password: string;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = {}, TypeParent = {}> {
    search?: SearchResolver<SearchOption[], TypeParent, TContext>;

    enumerator?: EnumeratorResolver<DropdownOption[], TypeParent, TContext>;

    config?: ConfigResolver<Maybe<Config>, TypeParent, TContext>;

    find?: FindResolver<Maybe<Json>, TypeParent, TContext>;

    findOne?: FindOneResolver<Maybe<Data>, TypeParent, TContext>;

    resume?: ResumeResolver<Maybe<AuthPayload>, TypeParent, TContext>;
  }

  export type SearchResolver<
    R = SearchOption[],
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, SearchArgs>;
  export interface SearchArgs {
    searchString: string;

    name?: Maybe<string>;

    id?: Maybe<string>;
  }

  export type EnumeratorResolver<
    R = DropdownOption[],
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, EnumeratorArgs>;
  export interface EnumeratorArgs {
    name?: Maybe<string>;
  }

  export type ConfigResolver<
    R = Maybe<Config>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type FindResolver<
    R = Maybe<Json>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, FindArgs>;
  export interface FindArgs {
    searchString: string;

    name: string;

    limit?: Maybe<number>;
  }

  export type FindOneResolver<
    R = Maybe<Data>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, FindOneArgs>;
  export interface FindOneArgs {
    id: string;

    table: string;
  }

  export type ResumeResolver<
    R = Maybe<AuthPayload>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, ResumeArgs>;
  export interface ResumeArgs {
    token: string;
  }
}

export namespace SearchOptionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = SearchOption> {
    key?: KeyResolver<Maybe<string>, TypeParent, TContext>;

    value?: ValueResolver<Maybe<string>, TypeParent, TContext>;

    title?: TitleResolver<Maybe<string>, TypeParent, TContext>;

    titles?: TitlesResolver<Maybe<string[]>, TypeParent, TContext>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type KeyResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type ValueResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type TitlesResolver<
    R = Maybe<string[]>,
    Parent = SearchOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace DropdownOptionResolvers {
  export interface Resolvers<TContext = {}, TypeParent = DropdownOption> {
    key?: KeyResolver<Maybe<string>, TypeParent, TContext>;

    value?: ValueResolver<Maybe<string>, TypeParent, TContext>;

    text?: TextResolver<Maybe<string>, TypeParent, TContext>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type KeyResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type ValueResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type TextResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace ConfigResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Config> {
    config?: ConfigResolver<Maybe<string>, TypeParent, TContext>;

    users?: UsersResolver<Maybe<(Maybe<User>)[]>, TypeParent, TContext>;
  }

  export type ConfigResolver<
    R = Maybe<string>,
    Parent = Config,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type UsersResolver<
    R = Maybe<(Maybe<User>)[]>,
    Parent = Config,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace UserResolvers {
  export interface Resolvers<TContext = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, TContext>;

    user?: UserResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;

    password?: PasswordResolver<Maybe<string>, TypeParent, TContext>;

    roles?: RolesResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;
  }

  export type IdResolver<R = string, Parent = User, TContext = {}> = Resolver<
    R,
    Parent,
    TContext
  >;
  export type UserResolver<R = string, Parent = User, TContext = {}> = Resolver<
    R,
    Parent,
    TContext
  >;
  export type EmailResolver<
    R = string,
    Parent = User,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type PasswordResolver<
    R = Maybe<string>,
    Parent = User,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type RolesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = User,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace DataResolvers {
  export interface Resolvers<TContext = {}, TypeParent = Data> {
    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    table?: TableResolver<Maybe<string>, TypeParent, TContext>;

    key?: KeyResolver<Maybe<string>, TypeParent, TContext>;

    data?: DataResolver<Maybe<Json>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Data,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type TableResolver<
    R = Maybe<string>,
    Parent = Data,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type KeyResolver<
    R = Maybe<string>,
    Parent = Data,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<Json>,
    Parent = Data,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<TContext = {}, TypeParent = AuthPayload> {
    token?: TokenResolver<Maybe<string>, TypeParent, TContext>;

    user?: UserResolver<Maybe<User>, TypeParent, TContext>;
  }

  export type TokenResolver<
    R = Maybe<string>,
    Parent = AuthPayload,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
  export type UserResolver<
    R = Maybe<User>,
    Parent = AuthPayload,
    TContext = {}
  > = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = {}, TypeParent = {}> {
    save?: SaveResolver<Maybe<Data>, TypeParent, TContext>;

    saveConfig?: SaveConfigResolver<Maybe<boolean>, TypeParent, TContext>;

    signup?: SignupResolver<Maybe<AuthPayload>, TypeParent, TContext>;

    login?: LoginResolver<Maybe<AuthPayload>, TypeParent, TContext>;
  }

  export type SaveResolver<
    R = Maybe<Data>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, SaveArgs>;
  export interface SaveArgs {
    table?: Maybe<string>;

    data?: Maybe<Json>;
  }

  export type SaveConfigResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, SaveConfigArgs>;
  export interface SaveConfigArgs {
    config?: Maybe<string>;

    users?: Maybe<(Maybe<UserInput>)[]>;
  }

  export type SignupResolver<
    R = Maybe<AuthPayload>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, SignupArgs>;
  export interface SignupArgs {
    email: string;

    password: string;

    name: string;
  }

  export type LoginResolver<
    R = Maybe<AuthPayload>,
    Parent = {},
    TContext = {}
  > = Resolver<R, Parent, TContext, LoginArgs>;
  export interface LoginArgs {
    email: string;

    password: string;
  }
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<Json, any> {
  name: "JSON";
}

export type IResolvers<TContext = {}> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  SearchOption?: SearchOptionResolvers.Resolvers<TContext>;
  DropdownOption?: DropdownOptionResolvers.Resolvers<TContext>;
  Config?: ConfigResolvers.Resolvers<TContext>;
  User?: UserResolvers.Resolvers<TContext>;
  Data?: DataResolvers.Resolvers<TContext>;
  AuthPayload?: AuthPayloadResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
  Json?: GraphQLScalarType;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
