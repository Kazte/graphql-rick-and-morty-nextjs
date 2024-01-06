import { Suspense } from 'react';
import PaginationHome from '@/components/PaginationHome';
import { GetAllEpisodes } from '@/lib/services/episode-service';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function EpisodePage({ searchParams }: any) {
  const getAllEpisodes = await GetAllEpisodes(parseInt(searchParams.page) || 1);
  const queryInfo = getAllEpisodes.info;
  const episodes = getAllEpisodes.results;

  const keyString = `search=${searchParams.page}`;

  return (
    <section className='h-full flex flex-col gap-6 flex-grow p-12'>

      <h1 className='text-5xl text-center'>All Episodes</h1>
      <Suspense key={keyString} fallback={<h1>Loading</h1>}>
        {
          episodes && (
            <ul className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6'>
              {
                episodes.map((episode) => (
                  <Link href={`/episode/${episode.id}`}
                        className='max-w-[350px] min-w-[200px] bg-neutral-900 p-4 flex flex-col justify-center items-center gap-2 border-2 border-transparent transition-all ease-out duration-300 hover:border-accent-foreground'>
                    <h1 className='text-xl text-center line-clamp-2'>{episode.name}</h1>
                    <p className='italic text-foreground/50'>{episode.episode}</p>
                  </Link>
                ))
              }
            </ul>
          )
        }
      </Suspense>
      <div className='w-full flex flex-row justify-evenly items-center'>
        <PaginationHome prev={queryInfo?.prev} next={queryInfo?.next} pathname='/episode'/>
      </div>


    </section>
  );
}