export type Maybe<T> = T | null;

export interface DataInput {
  table?: Maybe<string>;

  data?: Maybe<Json>;
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
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

  find?: Maybe<Json>;

  findOne?: Maybe<Data>;
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

export interface Data {
  id?: Maybe<string>;

  table?: Maybe<string>;

  key?: Maybe<string>;

  data?: Maybe<Json>;
}

export interface Mutation {
  save?: Maybe<Data>;
}

// ====================================================
// Arguments
// ====================================================

export interface SearchQueryArgs {
  searchString: string;

  name?: Maybe<string>;
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
export interface SaveMutationArgs {
  data?: Maybe<DataInput>;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
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
  export interface Resolvers<Context = {}, TypeParent = {}> {
    search?: SearchResolver<SearchOption[], TypeParent, Context>;

    enumerator?: EnumeratorResolver<DropdownOption[], TypeParent, Context>;

    find?: FindResolver<Maybe<Json>, TypeParent, Context>;

    findOne?: FindOneResolver<Maybe<Data>, TypeParent, Context>;
  }

  export type SearchResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchArgs>;
  export interface SearchArgs {
    searchString: string;

    name?: Maybe<string>;
  }

  export type EnumeratorResolver<
    R = DropdownOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, EnumeratorArgs>;
  export interface EnumeratorArgs {
    name?: Maybe<string>;
  }

  export type FindResolver<
    R = Maybe<Json>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, FindArgs>;
  export interface FindArgs {
    searchString: string;

    name: string;

    limit?: Maybe<number>;
  }

  export type FindOneResolver<
    R = Maybe<Data>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, FindOneArgs>;
  export interface FindOneArgs {
    id: string;

    table: string;
  }
}

export namespace SearchOptionResolvers {
  export interface Resolvers<Context = {}, TypeParent = SearchOption> {
    key?: KeyResolver<Maybe<string>, TypeParent, Context>;

    value?: ValueResolver<Maybe<string>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    titles?: TitlesResolver<Maybe<string[]>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type KeyResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TitlesResolver<
    R = Maybe<string[]>,
    Parent = SearchOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = SearchOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace DropdownOptionResolvers {
  export interface Resolvers<Context = {}, TypeParent = DropdownOption> {
    key?: KeyResolver<Maybe<string>, TypeParent, Context>;

    value?: ValueResolver<Maybe<string>, TypeParent, Context>;

    text?: TextResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type KeyResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TextResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = DropdownOption,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace DataResolvers {
  export interface Resolvers<Context = {}, TypeParent = Data> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    table?: TableResolver<Maybe<string>, TypeParent, Context>;

    key?: KeyResolver<Maybe<string>, TypeParent, Context>;

    data?: DataResolver<Maybe<Json>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Data,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TableResolver<
    R = Maybe<string>,
    Parent = Data,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type KeyResolver<
    R = Maybe<string>,
    Parent = Data,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DataResolver<
    R = Maybe<Json>,
    Parent = Data,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    save?: SaveResolver<Maybe<Data>, TypeParent, Context>;
  }

  export type SaveResolver<
    R = Maybe<Data>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveArgs>;
  export interface SaveArgs {
    data?: Maybe<DataInput>;
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

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  SearchOption?: SearchOptionResolvers.Resolvers<Context>;
  DropdownOption?: DropdownOptionResolvers.Resolvers<Context>;
  Data?: DataResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Json?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
