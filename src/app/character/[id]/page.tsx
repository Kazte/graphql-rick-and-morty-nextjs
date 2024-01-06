import { GetCharacterById } from '@/lib/services/character-service';
import Image from 'next/image';
import DescriptionItem from '@/components/DescriptionItem';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const character = await GetCharacterById(params.id);

  return {
    title: `Rick and Morty AstraQL - ${character?.name}`,
  };
}

export default async function CharacterPage({ params }: any) {

  const character = await GetCharacterById(params.id);

  return (
    <div className='flex flex-row gap-2 w-full lg:w-3/4 mx-auto'>
      <section className='flex-1 flex flex-col gap-4'>
        <h1 className='text-5xl'>{character?.name}</h1>
        <div className='p-4 flex flex-col gap-3'>
          <h3 className='text-4xl underline'>Episodes</h3>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
            {
              character?.episode?.map((episode) => (
                  <Link
                    className='hover:underline'
                    key={episode.id}
                    href={`/episode/${episode.id}`}>
                    {episode.episode} - {episode.name}
                  </Link>
              ))
            }
          </div>
        </div>
      </section>
      <aside className='w-[300px] h-fit border border-accent-foreground p-4 flex flex-col gap-3'>
        <h3 className='text-lg text-center'>{character?.name}</h3>
        <Image src={character?.image!} alt='Alt image' width={300} height={300}/>
        <div className='w-full h-1 bg-accent'/>

        <DescriptionItem title='Status' content={character?.status!}/>
        <DescriptionItem title='Species' content={character?.species!}/>
        <DescriptionItem title='Type' content={character?.type!}/>
        <DescriptionItem title='Gender' content={character?.gender!}/>
        <DescriptionItem title='Origin' content={character?.origin.name!}/>
        <DescriptionItem title='Location' content={character?.location.name!}/>


      </aside>
    </div>
  );
}