import { GetAllCharacters } from '@/lib/services/character-service';
import CharacterCard from '@/components/CharacterCard';
import PaginationHome from '@/components/PaginationHome';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default async function Home({ searchParams }: any) {
  const getAllCharactersResponse = await GetAllCharacters(parseInt(searchParams.page) || 1);
  const queryInfo = getAllCharactersResponse.info;
  const characters = getAllCharactersResponse.results;

  const keyString = `search=${searchParams.page}`;

  return (
    <section className='h-full flex flex-col gap-6 flex-grow p-12'>

      <h1 className='text-5xl text-center'>All Characters</h1>
      <Suspense key={keyString} fallback={<h1>Loading</h1>}>
        {
          characters && (
            <ul className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6'>
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
