import client from '@/lib/graphql/client';
import GetAllEpisodesQuery from '@/lib/graphql/queries/getAllEpisodesQuery';
import GetEpisodeByIdQuery from '@/lib/graphql/queries/getEpisodeByIdQuery';
import { IEpisode } from '@/lib/services/character-service';

export async function GetAllEpisodes(page: number) {
  return await client.fetch(GetAllEpisodesQuery, { page });
}

export async function GetEpisodeById(id: number) {
  const episode = await client.fetch(GetEpisodeByIdQuery, { id });

  return episode as IEpisode;
}