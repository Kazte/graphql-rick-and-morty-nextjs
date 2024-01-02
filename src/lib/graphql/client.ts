import { CacheLoader, GraphQLClient } from 'astraql';

const cache = new CacheLoader({
  expiresIn: 60 * 10
});

const client = new GraphQLClient({
  endpoint: 'https://rickandmortyapi.com/graphql', //process.env['NEXT_PUBLIC_BACKEND_SERVER'] as string,
  cache
});

export default client;