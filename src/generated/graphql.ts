export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  units: Enum[];

  consignments: Enum[];

  edition: Enum[];

  book: Enum[];

  person: Enum[];

  place: Enum[];

  confiscationReason: Enum[];

  confiscationDecision: Enum[];
}

export interface Enum {
  key?: Maybe<string>;

  value: number;

  title: string;

  description?: Maybe<string>;
}

export interface Mutation {
  empty?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface ConsignmentsQueryArgs {
  searchString: string;
}
export interface EditionQueryArgs {
  searchString: string;
}
export interface BookQueryArgs {
  searchString: string;
}
export interface PersonQueryArgs {
  searchString: string;
}
export interface PlaceQueryArgs {
  searchString: string;
}

import { GraphQLResolveInfo } from "graphql";

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
    units?: UnitsResolver<Enum[], TypeParent, Context>;

    consignments?: ConsignmentsResolver<Enum[], TypeParent, Context>;

    edition?: EditionResolver<Enum[], TypeParent, Context>;

    book?: BookResolver<Enum[], TypeParent, Context>;

    person?: PersonResolver<Enum[], TypeParent, Context>;

    place?: PlaceResolver<Enum[], TypeParent, Context>;

    confiscationReason?: ConfiscationReasonResolver<
      Enum[],
      TypeParent,
      Context
    >;

    confiscationDecision?: ConfiscationDecisionResolver<
      Enum[],
      TypeParent,
      Context
    >;
  }

  export type UnitsResolver<R = Enum[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ConsignmentsResolver<
    R = Enum[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ConsignmentsArgs>;
  export interface ConsignmentsArgs {
    searchString: string;
  }

  export type EditionResolver<R = Enum[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    EditionArgs
  >;
  export interface EditionArgs {
    searchString: string;
  }

  export type BookResolver<R = Enum[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    BookArgs
  >;
  export interface BookArgs {
    searchString: string;
  }

  export type PersonResolver<R = Enum[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    PersonArgs
  >;
  export interface PersonArgs {
    searchString: string;
  }

  export type PlaceResolver<R = Enum[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    PlaceArgs
  >;
  export interface PlaceArgs {
    searchString: string;
  }

  export type ConfiscationReasonResolver<
    R = Enum[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationDecisionResolver<
    R = Enum[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace EnumResolvers {
  export interface Resolvers<Context = {}, TypeParent = Enum> {
    key?: KeyResolver<Maybe<string>, TypeParent, Context>;

    value?: ValueResolver<number, TypeParent, Context>;

    title?: TitleResolver<string, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type KeyResolver<
    R = Maybe<string>,
    Parent = Enum,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<R = number, Parent = Enum, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<R = string, Parent = Enum, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Enum,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    empty?: EmptyResolver<Maybe<number>, TypeParent, Context>;
  }

  export type EmptyResolver<
    R = Maybe<number>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
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

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  Enum?: EnumResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
