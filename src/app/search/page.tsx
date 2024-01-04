import { GetAllCharacters, GetAllCharactersByName } from '@/lib/services/character-service';
import { Suspense } from 'react';
import CharacterCard from '@/components/CharacterCard';
import PaginationHome from '@/components/PaginationHome';

export default async function Page({ searchParams }: any) {

  const getAllCharactersResponse = await GetAllCharactersByName(parseInt(searchParams.page) || 1, searchParams.query);
  const queryInfo = getAllCharactersResponse.info;
  const characters = getAllCharactersResponse.results;

  return (
    <section className='h-full flex flex-col gap-6 flex-grow'>

      <h1 className='text-5xl text-center'>Searching: {searchParams.query}</h1>
      <Suspense key={`${searchParams.query}_${searchParams.page}`} fallback={<h1>Loading</h1>}>
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
        <PaginationHome prev={queryInfo?.prev} next={queryInfo?.next} pathname='/search' query={{
          query: searchParams.query
        }}/>
      </div>


    </section>
  );
}