import client from '@/lib/graphql/client';
import GetAllCharactersQuery from '@/lib/graphql/queries/getAllCharactersQuery';
import GetCharacterByIdQuery from '@/lib/graphql/queries/getCharacterByIdQuery';
import { wait } from 'next/dist/lib/wait';
import GetAllCharactersByNameQuery from '@/lib/graphql/queries/getAllCharactersByNameQuery';

interface IGetAllCharactersResponse {
  info: IQueryResult;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
}

export interface IQueryResult {
  next: number;
  prev: number;
}

export interface IGetCharacterResponse {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode[];
}

export interface Origin {
  id: any;
  name: string;
}

export interface Location {
  id: string;
  name: string;
}

export interface Episode {
  id: string;
  name: string;
  episode: string;
}

export async function GetAllCharacters(page: number) {
  const characters = await client.fetch(GetAllCharactersQuery, { page: page });
  return characters as IGetAllCharactersResponse;
}

export async function GetAllCharactersByName(page: number, name: string) {
  const characters = await client.fetch(GetAllCharactersByNameQuery, { page, name });
  return characters as IGetAllCharactersResponse;
}

export async function GetCharacter(id: string) {
  try {
    const character = await client.fetch(GetCharacterByIdQuery, { id });
    return character as IGetCharacterResponse;
  } catch (e: any) {
    console.log('error fetching', e.message);
  }
}