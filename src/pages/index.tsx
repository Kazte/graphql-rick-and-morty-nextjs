import { Inter } from 'next/font/google';
import { Button } from '~/components/ui/button';
import { useEffect, useState } from 'react';
import { getAllCharacters, ICharacter } from '~/lib/services/character-service';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious } from '~/components/ui/pagination';


export default function Home() {


  const [characters, setCharacters] = useState<ICharacter[]>();

  useEffect(() => {
    getAllCharacters(1).then((data) => {
      setCharacters(data.results);
    });
  }, []);


  return (
    <main
      className=''
    >
      {
        characters && (
          <ul className='flex flex-row flex-wrap justify-center gap-6'>
            {
              characters.map((character) => (
                <Link href={`c/${character.id}`} key={character.id} className='bg-neutral-900 p-4 flex flex-col justify-center items-center gap-2'>
                  <h1 className='text-2xl text-center'>{character.name}</h1>
                  <Image src={character.image} alt='Alt image' width={300} height={300}/>
                </Link>
              ))
            }
          </ul>
        )
      }
    </main>
  );
}
