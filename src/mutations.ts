import { MutationResolvers } from './generated/graphql';
export const Mutation: MutationResolvers.Resolvers = {
  empty(_, _args) {
    return 1;
  }
};
