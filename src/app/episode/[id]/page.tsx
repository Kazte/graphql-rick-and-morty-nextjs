import { GetEpisodeById } from '@/lib/services/episode-service';
import DescriptionItem from '@/components/DescriptionItem';
import CharacterCard from '@/components/CharacterCard';

export default async function Page({ params }: any) {
  const episode = await GetEpisodeById(params.id);

  return (
    <div className='flex flex-row gap-2 w-full lg:w-3/4 mx-auto'>
      <section className='flex-1 flex flex-col gap-4'>
        <h1 className='text-5xl'>{episode?.name}</h1>
        <div className='p-4 flex flex-col gap-3'>
          <h3 className='text-4xl underline'>Characters</h3>
          <ul className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6'>
            {
              episode.characters.map((character) => (
                <CharacterCard character={character} key={character.id}/>
              ))
            }
          </ul>
        </div>
      </section>
      <aside className='w-[300px] h-fit border border-accent-foreground p-4 flex flex-col gap-3'>
        <h3 className='text-lg text-center'>{episode?.name}</h3>
        <div className='w-full h-1 bg-accent'/>

        <DescriptionItem title='Air Data' content={episode?.air_date!}/>
        <DescriptionItem title='Episode' content={episode?.episode!}/>

      </aside>
    </div>
  );
}