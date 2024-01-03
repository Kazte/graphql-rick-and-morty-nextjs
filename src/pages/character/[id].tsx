import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '~/pages/Layout';
import { getCharacter, IGetCharacterResponse } from '~/lib/services/character-service';
import Image from 'next/image';
import Loader from '~/components/Loader';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import DescriptionItem from '~/components/DescriptionItem';

export default function CharacterPage() {
  const router = useRouter();

  const [character, setCharacter] = useState<IGetCharacterResponse | undefined>(undefined);

  useEffect(() => {
    getCharacter(router.query.id as string).then(data => {
      console.log(data);
      setCharacter(data);
    });
  }, [router.query.id]);

  return (
    <Layout>
      <Loader loaded={character !== undefined} className='items-center flex-grow'>
        <div className='flex flex-row gap-2 w-full lg:w-3/4 mx-auto'>
          <section className='flex-1 flex flex-col gap-4'>
            <h1 className='text-5xl'>{character?.name}</h1>
            <div className='p-4 flex flex-col gap-3'>
              <h3 className='text-4xl underline'>Episodes</h3>
              {
                character?.episode?.map((episode) => (
                  <div key={episode.id}>{episode.episode} - {episode.name}</div>
                ))
              }
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
      </Loader>
    </Layout>
  );
}