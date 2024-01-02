import client from '~/lib/graphql/client';
import getAllCharactersQuery from '~/lib/graphql/queries/getAllCharactersQuery';

interface IGetAllCharactersResponse {
  info: { next: number; prev: number }[];
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
}

export async function getAllCharacters(page: number) {
  const characters = await client.fetch(getAllCharactersQuery, { page: 1 });
  return characters as IGetAllCharactersResponse;
}