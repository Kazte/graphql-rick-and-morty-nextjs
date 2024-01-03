import Image from 'next/image';
import client from '@/lib/graphql/client';
import GetAllCharactersQuery from '@/lib/graphql/queries/getAllCharactersQuery';
import { getAllCharacters } from '@/lib/services/character-service';
import CharacterCard from '@/components/CharacterCard';
import PaginationHome from '@/components/PaginationHome';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loader from '@/components/utilities/Loader';
import Link from 'next/link';

export default async function Home({ searchParams }: { searchParams: { page: string } }) {

  const getAllCharactersResponse = await getAllCharacters(parseInt(searchParams.page) || 1);
  const queryInfo = getAllCharactersResponse.info;
  const characters = getAllCharactersResponse.results;

  const keyString = `search=${searchParams.page}`;

  return (
    <section className='h-full flex flex-col gap-6 flex-grow'>

      <h1 className='text-5xl text-center'>All Characters</h1>
      <Suspense key={keyString} fallback={<h1>Loading</h1>}>
        {
          characters && (
            <ul className='flex flex-row flex-wrap justify-center gap-6'>
              {
                characters.map((character) => (
                  <CharacterCard character={character} key={character.id}/>
                ))
              }
            </ul>
          )
        }
      </Suspense>
      <div className='w-full flex flex-row justify-evenly items-center'>
        <PaginationHome prev={queryInfo?.prev} next={queryInfo?.next}/>
      </div>


    </section>
  );
}
