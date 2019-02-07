export type Maybe<T> = T | null;

export type ListType = "Unit" | "ConfiscationReason" | "ConfiscationDecision";

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  searchConsignments: SearchOption[];

  searchEdition: SearchOption[];

  searchBook: SearchOption[];

  searchPerson: SearchOption[];

  searchPlace: SearchOption[];

  list: DropdownOption[];

  confiscations?: Maybe<(Maybe<Confiscation>)[]>;

  confiscation?: Maybe<Confiscation>;

  editions?: Maybe<(Maybe<Edition>)[]>;

  edition?: Maybe<Edition>;

  books?: Maybe<(Maybe<SuperBook>)[]>;

  book?: Maybe<SuperBook>;

  persons?: Maybe<(Maybe<Person>)[]>;

  person?: Maybe<Person>;

  locations?: Maybe<(Maybe<Location>)[]>;

  location?: Maybe<Location>;

  consignments?: Maybe<(Maybe<Consignment>)[]>;

  consignment?: Maybe<Consignment>;
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

export interface Confiscation {
  ID?: Maybe<number>;

  UUID?: Maybe<string>;

  consignment: number;

  title?: Maybe<string>;

  book_number?: Maybe<string>;

  number?: Maybe<number>;

  unit?: Maybe<number>;

  confiscation_reason?: Maybe<number>;

  confiscation_decision?: Maybe<number>;

  date?: Maybe<string>;

  censor_name?: Maybe<string>;

  censor?: Maybe<string>;

  sent_to_person_name?: Maybe<string>;

  sent_to_person?: Maybe<string>;

  sent_to_place_name?: Maybe<string>;

  sent_to_place?: Maybe<string>;
}

export interface Edition {
  ID?: Maybe<number>;

  book_code: string;

  super_book_code: string;

  edition_status: string;

  edition_type: string;

  full_book_title?: Maybe<string>;

  short_book_titles?: Maybe<string>;

  translated_title?: Maybe<string>;

  translated_language?: Maybe<string>;

  languages?: Maybe<string>;

  stated_publishers?: Maybe<string>;

  actual_publishers?: Maybe<string>;

  stated_publication_places?: Maybe<string>;

  actual_publication_places?: Maybe<string>;

  stated_publication_years?: Maybe<string>;

  actual_publication_years?: Maybe<string>;

  pages?: Maybe<string>;

  quick_pages?: Maybe<string>;

  number_of_volumes?: Maybe<number>;

  section?: Maybe<string>;

  edition?: Maybe<string>;

  book_sheets?: Maybe<string>;

  notes?: Maybe<string>;

  research_notes?: Maybe<string>;
}

export interface SuperBook {
  ID?: Maybe<number>;

  super_book_code: string;

  super_book_title: string;

  keywords?: Maybe<string>;

  parisian_keyword?: Maybe<string>;

  illegality?: Maybe<string>;
}

export interface Person {
  ID?: Maybe<number>;

  person_code: string;

  person_name?: Maybe<string>;

  sex?: Maybe<string>;

  title?: Maybe<string>;

  other_names?: Maybe<string>;

  designation?: Maybe<string>;

  status?: Maybe<string>;

  birth_date?: Maybe<string>;

  death_date?: Maybe<string>;

  notes?: Maybe<string>;
}

export interface Location {
  ID?: Maybe<number>;
}

export interface Consignment {
  ID?: Maybe<number>;

  UUID?: Maybe<string>;

  confiscation_register_ms?: Maybe<number>;

  confiscation_register_folio?: Maybe<string>;

  customs_register_ms?: Maybe<number>;

  customs_register_folio?: Maybe<string>;

  ms_21935_folio?: Maybe<string>;

  shipping_number?: Maybe<string>;

  marque?: Maybe<string>;

  inspection_date?: Maybe<string>;

  addressee_name?: Maybe<string>;

  addressee_title?: Maybe<string>;

  addressee?: Maybe<string>;

  origin_text?: Maybe<string>;

  origin_code?: Maybe<string>;

  residual_collector_name?: Maybe<string>;

  residual_collector?: Maybe<string>;

  collector_signed?: Maybe<boolean>;

  acquit_a_caution?: Maybe<string>;

  confiscation_register_notes?: Maybe<string>;

  customs_register_notes?: Maybe<string>;
}

export interface Mutation {
  saveConfiscation?: Maybe<Confiscation>;

  saveEdition?: Maybe<Edition>;

  saveBook?: Maybe<SuperBook>;

  savePerson?: Maybe<Person>;

  saveConsignment?: Maybe<Consignment>;

  saveLocation?: Maybe<Person>;
}

// ====================================================
// Arguments
// ====================================================

export interface SearchConsignmentsQueryArgs {
  searchString: string;
}
export interface SearchEditionQueryArgs {
  searchString: string;
}
export interface SearchBookQueryArgs {
  searchString: string;
}
export interface SearchPersonQueryArgs {
  searchString: string;
}
export interface SearchPlaceQueryArgs {
  searchString: string;
}
export interface ListQueryArgs {
  name?: Maybe<ListType>;
}
export interface ConfiscationsQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface ConfiscationQueryArgs {
  id: number;
}
export interface EditionsQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface EditionQueryArgs {
  id: number;
}
export interface BooksQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface BookQueryArgs {
  id: number;
}
export interface PersonsQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface PersonQueryArgs {
  id: number;
}
export interface LocationsQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface LocationQueryArgs {
  id: number;
}
export interface ConsignmentsQueryArgs {
  searchString: string;

  limit?: Maybe<number>;
}
export interface ConsignmentQueryArgs {
  id: number;
}
export interface SaveConfiscationMutationArgs {
  data?: Maybe<Json>;
}
export interface SaveEditionMutationArgs {
  data?: Maybe<Json>;
}
export interface SaveBookMutationArgs {
  data?: Maybe<Json>;
}
export interface SavePersonMutationArgs {
  data?: Maybe<Json>;
}
export interface SaveConsignmentMutationArgs {
  data?: Maybe<Json>;
}
export interface SaveLocationMutationArgs {
  data?: Maybe<Json>;
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
    searchConsignments?: SearchConsignmentsResolver<
      SearchOption[],
      TypeParent,
      Context
    >;

    searchEdition?: SearchEditionResolver<SearchOption[], TypeParent, Context>;

    searchBook?: SearchBookResolver<SearchOption[], TypeParent, Context>;

    searchPerson?: SearchPersonResolver<SearchOption[], TypeParent, Context>;

    searchPlace?: SearchPlaceResolver<SearchOption[], TypeParent, Context>;

    list?: ListResolver<DropdownOption[], TypeParent, Context>;

    confiscations?: ConfiscationsResolver<
      Maybe<(Maybe<Confiscation>)[]>,
      TypeParent,
      Context
    >;

    confiscation?: ConfiscationResolver<
      Maybe<Confiscation>,
      TypeParent,
      Context
    >;

    editions?: EditionsResolver<Maybe<(Maybe<Edition>)[]>, TypeParent, Context>;

    edition?: EditionResolver<Maybe<Edition>, TypeParent, Context>;

    books?: BooksResolver<Maybe<(Maybe<SuperBook>)[]>, TypeParent, Context>;

    book?: BookResolver<Maybe<SuperBook>, TypeParent, Context>;

    persons?: PersonsResolver<Maybe<(Maybe<Person>)[]>, TypeParent, Context>;

    person?: PersonResolver<Maybe<Person>, TypeParent, Context>;

    locations?: LocationsResolver<
      Maybe<(Maybe<Location>)[]>,
      TypeParent,
      Context
    >;

    location?: LocationResolver<Maybe<Location>, TypeParent, Context>;

    consignments?: ConsignmentsResolver<
      Maybe<(Maybe<Consignment>)[]>,
      TypeParent,
      Context
    >;

    consignment?: ConsignmentResolver<Maybe<Consignment>, TypeParent, Context>;
  }

  export type SearchConsignmentsResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchConsignmentsArgs>;
  export interface SearchConsignmentsArgs {
    searchString: string;
  }

  export type SearchEditionResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchEditionArgs>;
  export interface SearchEditionArgs {
    searchString: string;
  }

  export type SearchBookResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchBookArgs>;
  export interface SearchBookArgs {
    searchString: string;
  }

  export type SearchPersonResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchPersonArgs>;
  export interface SearchPersonArgs {
    searchString: string;
  }

  export type SearchPlaceResolver<
    R = SearchOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SearchPlaceArgs>;
  export interface SearchPlaceArgs {
    searchString: string;
  }

  export type ListResolver<
    R = DropdownOption[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ListArgs>;
  export interface ListArgs {
    name?: Maybe<ListType>;
  }

  export type ConfiscationsResolver<
    R = Maybe<(Maybe<Confiscation>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ConfiscationsArgs>;
  export interface ConfiscationsArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type ConfiscationResolver<
    R = Maybe<Confiscation>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ConfiscationArgs>;
  export interface ConfiscationArgs {
    id: number;
  }

  export type EditionsResolver<
    R = Maybe<(Maybe<Edition>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, EditionsArgs>;
  export interface EditionsArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type EditionResolver<
    R = Maybe<Edition>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, EditionArgs>;
  export interface EditionArgs {
    id: number;
  }

  export type BooksResolver<
    R = Maybe<(Maybe<SuperBook>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, BooksArgs>;
  export interface BooksArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type BookResolver<
    R = Maybe<SuperBook>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, BookArgs>;
  export interface BookArgs {
    id: number;
  }

  export type PersonsResolver<
    R = Maybe<(Maybe<Person>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, PersonsArgs>;
  export interface PersonsArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type PersonResolver<
    R = Maybe<Person>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, PersonArgs>;
  export interface PersonArgs {
    id: number;
  }

  export type LocationsResolver<
    R = Maybe<(Maybe<Location>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, LocationsArgs>;
  export interface LocationsArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type LocationResolver<
    R = Maybe<Location>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, LocationArgs>;
  export interface LocationArgs {
    id: number;
  }

  export type ConsignmentsResolver<
    R = Maybe<(Maybe<Consignment>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ConsignmentsArgs>;
  export interface ConsignmentsArgs {
    searchString: string;

    limit?: Maybe<number>;
  }

  export type ConsignmentResolver<
    R = Maybe<Consignment>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ConsignmentArgs>;
  export interface ConsignmentArgs {
    id: number;
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

export namespace ConfiscationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Confiscation> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;

    UUID?: UuidResolver<Maybe<string>, TypeParent, Context>;

    consignment?: ConsignmentResolver<number, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    book_number?: BookNumberResolver<Maybe<string>, TypeParent, Context>;

    number?: NumberResolver<Maybe<number>, TypeParent, Context>;

    unit?: UnitResolver<Maybe<number>, TypeParent, Context>;

    confiscation_reason?: ConfiscationReasonResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    confiscation_decision?: ConfiscationDecisionResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    date?: DateResolver<Maybe<string>, TypeParent, Context>;

    censor_name?: CensorNameResolver<Maybe<string>, TypeParent, Context>;

    censor?: CensorResolver<Maybe<string>, TypeParent, Context>;

    sent_to_person_name?: SentToPersonNameResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    sent_to_person?: SentToPersonResolver<Maybe<string>, TypeParent, Context>;

    sent_to_place_name?: SentToPlaceNameResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    sent_to_place?: SentToPlaceResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UuidResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConsignmentResolver<
    R = number,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BookNumberResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NumberResolver<
    R = Maybe<number>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UnitResolver<
    R = Maybe<number>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationReasonResolver<
    R = Maybe<number>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationDecisionResolver<
    R = Maybe<number>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CensorNameResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CensorResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SentToPersonNameResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SentToPersonResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SentToPlaceNameResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SentToPlaceResolver<
    R = Maybe<string>,
    Parent = Confiscation,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace EditionResolvers {
  export interface Resolvers<Context = {}, TypeParent = Edition> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;

    book_code?: BookCodeResolver<string, TypeParent, Context>;

    super_book_code?: SuperBookCodeResolver<string, TypeParent, Context>;

    edition_status?: EditionStatusResolver<string, TypeParent, Context>;

    edition_type?: EditionTypeResolver<string, TypeParent, Context>;

    full_book_title?: FullBookTitleResolver<Maybe<string>, TypeParent, Context>;

    short_book_titles?: ShortBookTitlesResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    translated_title?: TranslatedTitleResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    translated_language?: TranslatedLanguageResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    languages?: LanguagesResolver<Maybe<string>, TypeParent, Context>;

    stated_publishers?: StatedPublishersResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    actual_publishers?: ActualPublishersResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    stated_publication_places?: StatedPublicationPlacesResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    actual_publication_places?: ActualPublicationPlacesResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    stated_publication_years?: StatedPublicationYearsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    actual_publication_years?: ActualPublicationYearsResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    pages?: PagesResolver<Maybe<string>, TypeParent, Context>;

    quick_pages?: QuickPagesResolver<Maybe<string>, TypeParent, Context>;

    number_of_volumes?: NumberOfVolumesResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    section?: SectionResolver<Maybe<string>, TypeParent, Context>;

    edition?: EditionResolver<Maybe<string>, TypeParent, Context>;

    book_sheets?: BookSheetsResolver<Maybe<string>, TypeParent, Context>;

    notes?: NotesResolver<Maybe<string>, TypeParent, Context>;

    research_notes?: ResearchNotesResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BookCodeResolver<
    R = string,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SuperBookCodeResolver<
    R = string,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EditionStatusResolver<
    R = string,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EditionTypeResolver<
    R = string,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type FullBookTitleResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ShortBookTitlesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TranslatedTitleResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TranslatedLanguageResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LanguagesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatedPublishersResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ActualPublishersResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatedPublicationPlacesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ActualPublicationPlacesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatedPublicationYearsResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ActualPublicationYearsResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PagesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type QuickPagesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NumberOfVolumesResolver<
    R = Maybe<number>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SectionResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EditionResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BookSheetsResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NotesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ResearchNotesResolver<
    R = Maybe<string>,
    Parent = Edition,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace SuperBookResolvers {
  export interface Resolvers<Context = {}, TypeParent = SuperBook> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;

    super_book_code?: SuperBookCodeResolver<string, TypeParent, Context>;

    super_book_title?: SuperBookTitleResolver<string, TypeParent, Context>;

    keywords?: KeywordsResolver<Maybe<string>, TypeParent, Context>;

    parisian_keyword?: ParisianKeywordResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    illegality?: IllegalityResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SuperBookCodeResolver<
    R = string,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SuperBookTitleResolver<
    R = string,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type KeywordsResolver<
    R = Maybe<string>,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ParisianKeywordResolver<
    R = Maybe<string>,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IllegalityResolver<
    R = Maybe<string>,
    Parent = SuperBook,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace PersonResolvers {
  export interface Resolvers<Context = {}, TypeParent = Person> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;

    person_code?: PersonCodeResolver<string, TypeParent, Context>;

    person_name?: PersonNameResolver<Maybe<string>, TypeParent, Context>;

    sex?: SexResolver<Maybe<string>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;

    other_names?: OtherNamesResolver<Maybe<string>, TypeParent, Context>;

    designation?: DesignationResolver<Maybe<string>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    birth_date?: BirthDateResolver<Maybe<string>, TypeParent, Context>;

    death_date?: DeathDateResolver<Maybe<string>, TypeParent, Context>;

    notes?: NotesResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PersonCodeResolver<
    R = string,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PersonNameResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type SexResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OtherNamesResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DesignationResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BirthDateResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DeathDateResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NotesResolver<
    R = Maybe<string>,
    Parent = Person,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace LocationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Location> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Location,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ConsignmentResolvers {
  export interface Resolvers<Context = {}, TypeParent = Consignment> {
    ID?: IdResolver<Maybe<number>, TypeParent, Context>;

    UUID?: UuidResolver<Maybe<string>, TypeParent, Context>;

    confiscation_register_ms?: ConfiscationRegisterMsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    confiscation_register_folio?: ConfiscationRegisterFolioResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    customs_register_ms?: CustomsRegisterMsResolver<
      Maybe<number>,
      TypeParent,
      Context
    >;

    customs_register_folio?: CustomsRegisterFolioResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    ms_21935_folio?: Ms_21935FolioResolver<Maybe<string>, TypeParent, Context>;

    shipping_number?: ShippingNumberResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    marque?: MarqueResolver<Maybe<string>, TypeParent, Context>;

    inspection_date?: InspectionDateResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    addressee_name?: AddresseeNameResolver<Maybe<string>, TypeParent, Context>;

    addressee_title?: AddresseeTitleResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    addressee?: AddresseeResolver<Maybe<string>, TypeParent, Context>;

    origin_text?: OriginTextResolver<Maybe<string>, TypeParent, Context>;

    origin_code?: OriginCodeResolver<Maybe<string>, TypeParent, Context>;

    residual_collector_name?: ResidualCollectorNameResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    residual_collector?: ResidualCollectorResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    collector_signed?: CollectorSignedResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;

    acquit_a_caution?: AcquitACautionResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    confiscation_register_notes?: ConfiscationRegisterNotesResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;

    customs_register_notes?: CustomsRegisterNotesResolver<
      Maybe<string>,
      TypeParent,
      Context
    >;
  }

  export type IdResolver<
    R = Maybe<number>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UuidResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationRegisterMsResolver<
    R = Maybe<number>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationRegisterFolioResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CustomsRegisterMsResolver<
    R = Maybe<number>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CustomsRegisterFolioResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type Ms_21935FolioResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ShippingNumberResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MarqueResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type InspectionDateResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AddresseeNameResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AddresseeTitleResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AddresseeResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OriginTextResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OriginCodeResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ResidualCollectorNameResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ResidualCollectorResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CollectorSignedResolver<
    R = Maybe<boolean>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AcquitACautionResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ConfiscationRegisterNotesResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CustomsRegisterNotesResolver<
    R = Maybe<string>,
    Parent = Consignment,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    saveConfiscation?: SaveConfiscationResolver<
      Maybe<Confiscation>,
      TypeParent,
      Context
    >;

    saveEdition?: SaveEditionResolver<Maybe<Edition>, TypeParent, Context>;

    saveBook?: SaveBookResolver<Maybe<SuperBook>, TypeParent, Context>;

    savePerson?: SavePersonResolver<Maybe<Person>, TypeParent, Context>;

    saveConsignment?: SaveConsignmentResolver<
      Maybe<Consignment>,
      TypeParent,
      Context
    >;

    saveLocation?: SaveLocationResolver<Maybe<Person>, TypeParent, Context>;
  }

  export type SaveConfiscationResolver<
    R = Maybe<Confiscation>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveConfiscationArgs>;
  export interface SaveConfiscationArgs {
    data?: Maybe<Json>;
  }

  export type SaveEditionResolver<
    R = Maybe<Edition>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveEditionArgs>;
  export interface SaveEditionArgs {
    data?: Maybe<Json>;
  }

  export type SaveBookResolver<
    R = Maybe<SuperBook>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveBookArgs>;
  export interface SaveBookArgs {
    data?: Maybe<Json>;
  }

  export type SavePersonResolver<
    R = Maybe<Person>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SavePersonArgs>;
  export interface SavePersonArgs {
    data?: Maybe<Json>;
  }

  export type SaveConsignmentResolver<
    R = Maybe<Consignment>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveConsignmentArgs>;
  export interface SaveConsignmentArgs {
    data?: Maybe<Json>;
  }

  export type SaveLocationResolver<
    R = Maybe<Person>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, SaveLocationArgs>;
  export interface SaveLocationArgs {
    data?: Maybe<Json>;
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
  Confiscation?: ConfiscationResolvers.Resolvers<Context>;
  Edition?: EditionResolvers.Resolvers<Context>;
  SuperBook?: SuperBookResolvers.Resolvers<Context>;
  Person?: PersonResolvers.Resolvers<Context>;
  Location?: LocationResolvers.Resolvers<Context>;
  Consignment?: ConsignmentResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Json?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
